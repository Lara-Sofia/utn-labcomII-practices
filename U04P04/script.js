/*Primer botón*/ 
var count = 0;
var btn = document.getElementById('btn');
var display = document.getElementById('display');

btn.onclick = function() {
    count++;
    display.innerHTML = count;
}

/*Segundo botón*/
var btnL = document.getElementById('btnL');

btnL.onclick = function() {
    localStorage.getItem('btnL');
    localStorage.setItem('btnL');

}
