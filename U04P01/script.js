function mayor() {
    var numberUno = document.getElementById('numeroUno').value;
    var numberDos = document.getElementById('numeroDos').value;
    var numberTres = document.getElementById('numeroTres').value;
    //value sirve para tomar el valor ingresado
    
    if (numberUno > numberDos && numberUno > numberTres) {
        alert('El mayor es: ' + numberUno);
    }
    else if (numberDos > numberTres && numberDos > numberUno) {
        alert('El mayor es: ' + numberDos);
    }
    else 
    {   
        alert('El mayor es: ' + numberTres);
    }
    
}