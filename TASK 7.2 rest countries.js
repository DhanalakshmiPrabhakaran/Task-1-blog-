//Print the following details name, capital, flag, using forEach function

//require library

const XMLHttpRequest = require('xhr2');

////create an object to the XMLHttpRequest class

let xhr = new XMLHttpRequest();

//open the connection

xhr.open(`GET`,`https://restcountries.com/v3.1/all`);
xhr.send();
//handle the response
xhr.onload=function(){
    const countries=JSON.parse(xhr.response);
    countries.forEach(country=>{
        console.log("country:",country.name.common,"capital:",country.capital,"flag:",country.flag);
    })
}
