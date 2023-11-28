//use the rest countries API URL http://restcountries.com/v3.1/all and display all the country flags in the console
//Print all countries names,regions, sub-region,populations.

let XMLHttpRequest = require('xhr2');
let xhr= new XMLHttpRequest();
xhr.open('GET','http://restcountries.com/v3.1/all');

xhr.onload=function (){

    let data= JSON.parse(xhr.responseText);
    for(let flags in data){
        console.log("Flag : ",data[flags].flag);
    }
console.log("-----------------------------------------------------------------------------------------");
    for(let countries in data){
        console.log("countries names:", data[countries].name.common);
}
console.log("-----------------------------------------------------------------------------------------");
    for(let regions in data){
        console.log("region:", data[regions].region);
    }
console.log("-----------------------------------------------------------------------------------------");
    for(let subregions in data){
    console.log("sub-regions:", data[subregions].subregion);
}
console.log("-----------------------------------------------------------------------------------------");
    for(let populations in data){
    console.log("populations:", data[populations].population);
}    
}
xhr.send();