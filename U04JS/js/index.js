function askMe() {
    let person = prompt("Ingrese su nombre, gracias!");

    if (person != null) {
        document.getElementById('saludos').innerHTML =
        'holi ' + person + '!' + ' bienvenide!';
    }
    else {
        document.getElementById('saludos').innerHTML =
        'good morning, afternoon, night';
    }
}

function result() {
        //nombre variables = Función
    let confirm = confirm('Desea confirmar?');
    
}