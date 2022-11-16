
function enviar() {
    let pokeid = document.getElementById('pokeid').value;
    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokeid;
    fetch(url, {
        method: 'GET', // or 'PUT'
    }).then(response => console.log(response))
        .catch(err => console.log('Error', err));
}

