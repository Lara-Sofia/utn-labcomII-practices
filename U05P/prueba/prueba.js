console.log('holi ');
const button = document.getElementById('button');
const limpia = document.getElementById('limpia');
const container = document.getElementById('container');
let i = 0;
let suma = 0;

button.onclick = function Calcular() {
    console.log('funca')
    // mat
    var dado6caras = parseInt(6 * Math.random() + 1);
    i++;
    suma += dado6caras;
    // Añadir un nodo con un texto.
    container.appendChild(document.createTextNode('Número ' + i + ':' + dado6caras));
    container.appendChild(document.createElement('br'));
    // dos maneras del Total
    document.getElementById('parrafo').innerHTML = ('Total: ' + suma);
    //container.appendChild(document.createTextNode('Total: ' + suma));
    container.appendChild(document.createElement('br'));
}

limpia.onclick = function Limpia() {
    // Borra los contenidos anteriores del div.
    while (container.hasChildNodes()) { 
        container.removeChild(container.lastChild);
    }
    i = 0;
    suma = 0;
    document.getElementById('parrafo').innerHTML = ''
}

