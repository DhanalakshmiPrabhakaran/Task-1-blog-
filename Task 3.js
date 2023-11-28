//How to Compare two JSON have the same Properties without Order?
//a. let obj1 = {name: "Person 1", age:5};
//b. let obj2 = {age:5, name: "Person 1"};

let obj1 = {
  name: "Person 1",
  age: 5
};

console.log(JSON.stringify(obj1));
    
let obj2 = {
  age: 5,
  name: "Person 1"
};

console.log(JSON.stringify(obj2));

let json1= {"name":"Person 1","age":5};
let json2= {"age":5,"name":"Person 1"};

let flag=true;

if(Object.keys(json1).length==Object.keys(json2).length){
    for(let key in json1) { 
        if(json1[key] == json2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);







