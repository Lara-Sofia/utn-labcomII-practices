function validar_cp() {
    var cadena = document.getElementById("cp").value;
    var expresion_regular = /^[A-Z]{1}([0-9]{4})[A-Z]{3}$/;
    if(expresion_regular.test(cadena)) {
        alert("el código es Correcto!");
        return true;
    }
    else {
        alert("el código es Incorrecto");
        return  false;
        
    }
}