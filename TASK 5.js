//for the given json iterate over all for loops(for,for in,for of,for Each)
//for Loops:
//Syntax:
//for (initialization; condition; finalExpression) {
    // code
 // }  
 //Example:
// Iterate through integers from 0-10:

for (let i = 0; i <11; i++) {
    console.log(i);
  }
  
//for...in Loop:
//Syntax:
//for (property in object) {
    // code
  //}

  //Example:
//Iterate over the properties of an object and log its name and value to the console:

let cars = {
    a: "verna",
    b: "BMW",
    c: "Innova"
  };
  
  for (let key in cars) {
    console.log(key + ": " + cars[key]);
  }
  
//for...of Loop:
//Syntax
//for (variable of object) {
  // code
//}
//The for...of loop iterates over the values of many types of iterables
//Example:
//Iterate over an array:
const arr = [ "Dhana", "Prabha", "Nirai" ];

for (let i of arr) {
  console.log(i);
}
//ForEach() Loop:
//forEach will iterate over the array you provide and for each iteration 

var names = ["Dhana", "Prabha", "Nirai"];
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}
