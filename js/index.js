let n1 = null;
let n2 = null;
let op = '';
let borrar = true;

function mostrar(num) {
	let res = document.getElementById('resultado').value;
	if (borrar === true && num !== '.') {
		document.getElementById('resultado').value = num;
		borrar = false;
	} else if (borrar === false && !(num === '.' && res.includes('.'))) {
		res += num;
		document.getElementById('resultado').value = res;
	}
}

function accionar(boton) {
	if(n1 === null && borrar === false && boton !== '=') {
		n1 = parseFloat(document.getElementById('resultado').value);
		op = boton;
		borrar = true;
	} else if (n1 !== null && borrar === false) {
		n2 = parseFloat(document.getElementById('resultado').value);
		resolver();
		document.getElementById('resultado').value = n1;
		n2 = null;
		if (boton === '=') {
			op = '';
			borrar = false;
		} else {
			op = boton;
			borrar = true;
		}
	}
}

function resolver() {
	switch (op) {
		case '+':
			n1 += n2;
			break
		case '-':
			n1 -= n2;
			break
		case 'X':
			n1 *= n2;
			break
		case '/':
			n1 /= n2;
			break
		default:
			break
	}
}

function limpiar(boton) {
	switch (boton) {
		case 'C':
			n1 = null;
			n2 = null;
			op = '';
			borrar = true;
			document.getElementById('resultado').value = '0';
			break
		case 'CE':
			document.getElementById('resultado').value = '0';
			borrar = true;
			break
		case '<-':
			let parcial = document.getElementById('resultado').value;
			parcial = parcial.slice(0,-1);
			if (parcial.length !== 0) {
				document.getElementById('resultado').value = parcial;
			} else {
				document.getElementById('resultado').value = '0';
				borrar = true;
			}
	}
}