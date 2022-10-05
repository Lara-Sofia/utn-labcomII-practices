function entero() {
    let numero = prompt('ingrese un numero entero:');
    console.log(numero);
    if (numero == '0') {
        document.getElementById('saludo').innerHTML = 'Nro ingresado nulo';
    }
    else if (numero >= '1') {
        document.getElementById('saludo').innerHTML = 'Nro ingresado positivo';
    }
    else {
        document.getElementById('saludo').innerHTML = 'Nro ingresado es negativo';
    }
}