//Print the total population of countries using reduce function

//require library

const XMLHttpRequest = require('xhr2');

//create an object to the XMLHttpRequest class

let xhr = new XMLHttpRequest();

//open the connection

xhr.open(`GET`,`https://restcountries.com/v3.1/all`);
xhr.send();

//handle the response

xhr.onload=function(){
    const countries=JSON.parse(xhr.response);
    let population= countries.reduce((acc,curr)=>{ ////total population of countries using reduce function
        return acc+curr.population;
    },0)
    console.log(population);
    }
