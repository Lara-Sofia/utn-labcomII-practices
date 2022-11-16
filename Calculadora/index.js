//tenemos todos los elementos de HTML en variables de JS
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operadores');

//intanciamos Calculadora
//const calculadora = new Calculadora(); 
//console.log(calculadora.sumar(2,3));

//instanciamos display
const display = new Display(displayValorAnterior, displayValorActual);


botonesNumeros.forEach(boton => {
    //cada boton 
    //como primera parámetro que escuche el 'click
    //segundo parámetro, lo que tiene que hacer 
    //en este caso: display agregue un nro
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach (boton => { boton.addEventListener('click', ( ) => {display.computar(boton.value)}});

