console.log('holi')
const calcular = document.getElementById('button');
const limpia = document.getElementById('limpia');
const container = document.getElementById("input");
let i = 0;
let suma = 0;

calcular.onclick = function Calcular() {
    console.log('funca')
    var dado6caras = parseInt(6 * Math.random() + 1);
    // variable que suma 
    i++;
    //suma los valores de los dados
    suma = suma + dado6caras;
    container.appendChild(document.createTextNode("Número " +  i  + ": " + dado6caras))
    // Crea un salto de linea, para que se vea mas bonito.
    container.appendChild(document.createElement("br"));
    //container.appendChild(document.createTextNode('Total: ' + suma));
    // Crea un salto de linea, para que se vea mas bonito.
    container.appendChild(document.createElement("br"));
    document.getElementById('suma').innerHTML = 'Suma es: ' + suma;
}


limpia.onclick = function Limpia() {
    // Borra los contenidos anteriores del div.
    while (container.hasChildNodes()) { 
    container.removeChild(container.lastChild);
    }
    i = 0;
    document.getElementById('suma').innerHTML = '';
    suma = 0;
}

