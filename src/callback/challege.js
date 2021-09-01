//Instancia de llamado a una API con JS Y XMMLH
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API= 'https://rickandmorty.com/api/character/';


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

fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if(error2) return console.error(error2);
        fetchData(daa2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})