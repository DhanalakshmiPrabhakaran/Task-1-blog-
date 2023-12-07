//Print the country that uses US dollars as currency.

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
    console.log(countries.filter(country=>{
             for(let i in country.currencies){
                 if(country.currencies[i].symbol=="$")
                 {
                    return true;
                 }
                  
                }
             }).map(country=>country.name.common))
     }

