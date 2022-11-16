var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let random = Math.random()
        if (random > 0.5) {
            resolve ('Hola mundo');
        }
        else {
            reject ('Ha ocurrido un error');
        }
    }, 3000);
});

myPromise
    .then(function (value) {
        console.log (value);
    })
    .then(function (error) {
        console.log (error);
    })