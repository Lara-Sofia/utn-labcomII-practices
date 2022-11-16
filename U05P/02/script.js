async function GetPokemon(id) {

    try {

        let url = 'https://pokeapi.co/api/v2/pokemon/' + id;
        const promiseResult = await fetch(url, { method: 'GET', });
        cleanData();
        console.log(promiseResult)
        if (promiseResult.status == 200) {
            const data = await promiseResult.json();
            console.log(data);
            document.getElementById('pokeName').innerHTML="Nombre: "+data.name;

        }
        else{
            SetErrorMsg("Pokemon no encontrado");
        }

    } catch (error) {
        SetErrorMsg(":Ha ocurrido un error al conectarse al servidor.");
    }

}

function SetErrorMsg(error){
    document.getElementById("error-msg").innerHTML=error;
}

function cleanData(){
    SetErrorMsg("");
    document.getElementById('pokeName').innerHTML="";
    console.clear();
}