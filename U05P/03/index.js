const nro = document.getElementById('nro').value;
const btn = document.getElementById('btn');

btn.separador = () => {
    for (let step = 0; step <= nro; step++) {
        let resultP;
        let resultI;
        if (nro%2 === 0) {
            resultP = step+1;
        } else {
            resultI = step+1;
        }
    }
    
};