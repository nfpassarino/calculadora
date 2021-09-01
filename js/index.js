let n1 = null;
let n2 = null;
let op = "";
let borrar = true;
const $resultado = document.querySelector("#resultado");

document
    .querySelectorAll(".btn__nro")
    .forEach((btn__nro) => btn__nro.addEventListener("click", mostrar));
document
    .querySelectorAll(".btn__accion-limpiar")
    .forEach((btn__limpiar) => btn__limpiar.addEventListener("click", limpiar));

function mostrar() {
    document.querySelectorAll(".btn__accion-op").forEach((btn__op) => {
        btn__op.addEventListener("click", accionar);
        btn__op.classList.remove("selected");
    });
    let num = this.value;
    let res = $resultado.value;
    if (borrar === true && num !== ".") {
        $resultado.value = num;
        borrar = false;
    } else if (borrar === false && !(num === "." && res.includes("."))) {
        res += num;
        $resultado.value = res;
    }
}

function accionar() {
    document
        .querySelectorAll(".btn__accion-op")
        .forEach((btn__op) => btn__op.removeEventListener("click", accionar));
    let boton = this.value;
    if (boton !== "=") {
        this.classList.add("selected");
    }
    if (n1 === null && borrar === false && boton !== "=") {
        n1 = parseFloat($resultado.value);
        op = boton;
        borrar = true;
    } else if (n1 !== null && borrar === false) {
        n2 = parseFloat($resultado.value);
        resolver();
        $resultado.value = n1;
        n2 = null;
        if (boton === "=") {
            document
                .querySelectorAll(".btn__accion-op")
                .forEach((btn__op) =>
                    btn__op.addEventListener("click", accionar)
                );
            op = "";
            borrar = false;
        } else {
            op = boton;
            borrar = true;
        }
    }
}

function resolver() {
    switch (op) {
        case "+":
            n1 += n2;
            break;
        case "-":
            n1 -= n2;
            break;
        case "X":
            n1 *= n2;
            break;
        case "/":
            n1 /= n2;
            break;
        default:
            break;
    }
}

function limpiar() {
    document.querySelectorAll(".btn__accion-op").forEach((btn__op) => {
        btn__op.removeEventListener("click", accionar);
        btn__op.classList.remove("selected");
    });
    let boton = this.value;
    switch (boton) {
        case "C":
            n1 = null;
            n2 = null;
            op = "";
            borrar = true;
            $resultado.value = "0";
            break;
        case "CE":
            $resultado.value = "0";
            borrar = true;
            break;
        case "<-":
            let parcial = $resultado.value;
            parcial = parcial.slice(0, -1);
            if (parcial.length !== 0) {
                $resultado.value = parcial;
            } else {
                $resultado.value = "0";
                borrar = true;
            }
    }
}
