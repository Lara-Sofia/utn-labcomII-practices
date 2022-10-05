const pesos = document.getElementById('pesos');
const cambio = document.getElementsByClassName('cambio');
    console.log(pesos);
    console.log(cambio);
const resultado = document.getElementById('resultado');
console.log(resultado);
function entero(pesos) {
    switch (pesos) {
        case 1:
            resultado == 200*pesos
            return resultado;
            break;
        case 2:
            resultado == 300*pesos
            return resultado;
            break;
        default:
            return println("invalid pesos");
            break;
    }
    return document.appendChild(resultado.innerHTML);
}

