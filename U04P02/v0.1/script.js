function entero() {
    let numero = document.getElementById('entero').value;
    
        if (numero == 0) {
            document.getElementById('saludo').innerHTML = 'Nro ingresado nulo';
        }
        else if (numero > 0) {
            document.getElementById('saludo').innerHTML = 'Nro ingresado positivo';
        }
        else {
            document.getElementById('saludo').innerHTML = 'Nro ingresado es negativo';
        }
    }