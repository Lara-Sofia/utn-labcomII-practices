function HaceAlgo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let random = Math.random()
            if (random > 0.5) {
                resolve ('Hola Mundo');
            }
            else {
                reject ('Ha ocurrido un error');
            }

        }, 3000);
    });
}

async function test() {
    try {
        let response = await HaceAlgo();
        document.getElementById('parrafo').innerHTML = response
        console.log (document.getElementById('parrafo'))
    }
    catch (error) {
        document.getElementById('parrafo').innerHTML = error
        console.log (document.getElementById('parrafo').innerHTML)
    }
}

test();