//Get all the countries from Asia continent /region using Filter function

//require library
const XMLHttpRequest = require('xhr2');

//create an object to the XMLHttpRequest class

let xhr = new XMLHttpRequest();
xhr.open(`GET`,`https://restcountries.com/v3.1/all`);
xhr.send();

xhr.onload=function(){
    const countries=JSON.parse(xhr.response);
    console.log(countries.filter(country=>{
        if(country.region=='Asia'){
            return true;
        }
    }).map(country=>country.name.common));
}

    
     
