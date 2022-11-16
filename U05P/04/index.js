do {
    var cant = window.prompt("Ingrese cantidad de numeros a ingresar (Maximo 5)");
} while (cant>5 || cant<=0 );

var container = document.getElementById("input");
// Borra los contenidos anteriores del div.
while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);

}

for (i = 0; i < cant; i++) {
    // Añadir un nodo con un texto aleatorio.
    container.appendChild(document.createTextNode("Número " + (i + 1) + ":"));
    // Crea un elemento input estableciendo tipo y nombre.
    var input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Ingrese nro";
    input.id = "number_opc" + i;
    input.required=true;
    container.appendChild(input);
    // Crea un salto de linea, para que se vea mas bonito.
    container.appendChild(document.createElement("br"));
}


var button = document.createElement("button");
button.id = 'button';
button.type = 'button'
button.innerText = 'Calcular';
container.appendChild(button);
document.getElementById("button").onclick = function () {
    let n1 = document.getElementById("number_opc0");
    let n2 = document.getElementById("number_opc1");
    let n3 = document.getElementById("number_opc2");
    let n4 = document.getElementById("number_opc3");
    let n5 = document.getElementById("number_opc4");
    switch (cant) {
        case '1':
            Calcular(n1.value);
            break;
        case '2':
            Calcular(n1.value, n2.value);
            break;
        case '3':
            Calcular(n1.value, n2.value, n3.value);
            break;
        case '4':
            Calcular(n1.value, n2.value, n3.value, n4.value);
            break;
        case '5':
            Calcular(n1.value, n2.value, n3.value, n4.value, n5.value);
            break;
        default:
            break;
    }
}

function Calcular(...args) {
    let cantpares = 0;
    let cantimpares = 0;
    
    for (let arg of args) {
        if (arg % 2) {
            cantimpares += 1;

        }
        else {
            cantpares += 1;

        }
    }
    let message = "cant pares: " + cantpares + " cant impares: " + cantimpares;
    window.alert(message);
}