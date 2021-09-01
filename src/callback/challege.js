//Instancia de llamado a una API con JS Y XMMLH
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    //peticion e instanciado htmlll request 
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        //validacion de ejecucion del callback basada en valor númerico
        if (xhttp.readyState === 4) {
            //status en el que se encuentra la peticion correcta o incorrecta 
            if(xhttp.status === 2000) {
                callback(null, JSON.parse(xhttp.responseText));
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
        
    }
    xhttp.send();
}