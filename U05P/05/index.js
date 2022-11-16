var msg= document.getElementById('result'); //El h3 donde voy a mostrar el resultado
let input=document.getElementById('number'); //el input el cual el usuario ingresa el numero

function Calcular(){ //Se llama cuando el usuario aprieta boton
    let validacion= validar(input.value);

    if (validacion){
        let rtdo=factorial(input.value);
        SetMessage("El resultado es: "+rtdo, "OK");
    }
    else{
        SetMessage("Ingrese un numero entero entero mayor o igual a cero", "Error")
    }

}

function validar(value){ //valida el numero ingresado

    if (value>=0 && value!='' && value == parseInt(value, 10) ){
        return true
    }
    else{
        return false
    }
}

function SetMessage(text, type){ //muestra mensaje de error o exitoso

    if (type=="Error"){
        msg.style.color='red';
            }
    else{
        msg.style.color='green';

    }
    msg.innerHTML=text;
}

function factorial (n) {  //calcula el factorial
    var total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    return total; 
}