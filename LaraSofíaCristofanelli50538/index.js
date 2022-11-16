const button = document.getElementById('button');
const resultado = document.getElementById('resultado');
let area=0;
button.addEventListener('click', function() {
    console.log('funca')
    let pi = 3.14159;
    let radio = document.getElementById('radio').value;
    if (radio > 0) {
        area = pi*radio*radio;
        resultado.innerHTML = area;
    } else {
        resultado.innerHTML = 'Ocurrió un error'
    }
});