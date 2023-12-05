//Do the below programs in anonymous function & IIFE
//Print odd numbers in an array
//anonymous:
let OddNumbers= function(array){
    for(let i=0; i<array.length; i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
    }
}
([1,2,3,4]);

//IIFE:
(function(array){for(let i=0; i<array.length; i++){
    if(array[i]%2!=0){
        console.log(array[i]);}}})
        ([1,2,3,4]);

//Convert all the strings to title caps in a string array
//anonymous:
function titleCase() {
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
}
titleCase();
//IIFE:
(function(){
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 })();
 //Sum of all numbers in an array:
//Anonymous:
let a= [1,2,3,4,5];
let b= function(){
  let sum =0;
  for(let i=0; i<a.length; i++){
    sum = sum + a[i];
}
return sum;
}
console.log(b());
//IIFE:
(function(){
  let a=[1,2,3,4,5];
  let sum=0;
  for(let i=0;i<a.length;i++){
    sum=sum + a[i];
  }
  console.log(sum);
}());
//Return all the prime numbers in an array:
//Anonymous:

let prime = function(data) {
  return data.filter((n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  });
};
console.log(prime([1,2,3,4,5,6,7,8,9,10]));

//Prime Number using IIFE:
(function (data) {
  let prime = [];
  for (let i=0;i<data.length;i++){
    if (data[i]===2){
      prime.push(data[i]);
      continue;
    }
    for (let j=2;j<data[i];j++){
      if(data[i] % j==0){
        break;
      }
      if(j===data[i]-1)
      prime.push(data[i])
    }
  }
  console.log(prime);
})([1,2,3,4,5,6,7,8,9,10]);
//Return all the palindromes in an array
//Anonymous:

let arr=["haritha","papa","madam"];

let palindrome= function (d) 
{
    return d.filter((x) =>
    {
        
        let y=x.split("").reverse().join("");
        if (y==x)
        {
            return true;
        }
        else return false;
    });
}
console.log(palindrome(arr));

//IIFE:
(function (arr) {
  data=[]
  for (let i in arr) {
  let y=arr[i].split("").reverse().join("");
  if (y==arr[i]){
      data.push(arr[i]);
  }
 // else return false;
  }
  console.log(data);
})(["haritha","papa","madam"]);

//Return median of two sorted arrays of the same size.
//Anonymous:

let x = function (arr1 =[],arr2 =[]) 

{ 
     
    let length1 = arr1.length; 
    let length2 = arr2.length; 
    let totallength = length1+length2; 
    let i = 0; let 
    j = 0; let 
    totalarr = []; 
    while(i<length1 && j <length2) 
    { 
        if (arr1[i]<=arr2[j]) 
        { 
            totalarr.push(arr1[i]) 
            i++; 
            
        } else 
        { totalarr.push(arr2[j]) 
        j++; 
            
        }
        } 
        if (totallength%2===0) 
        { 
            return (totalarr[totalarr.length/2]+totalarr[totalarr.length/2 -1])/2; 
            
        } 
    
} 
        let arr1 =[2,3,4]; 
        let arr2 =[3,4,5];
        console.log(x(arr1,arr2))
//IIFE:
var ar1 = [1, 12, 5, 26, 38];
var ar2 = [2, 1, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
var n=n1;
(function(){
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {       
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
   
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }


    console.log((m1 + m2)/2)
})(ar1,ar2,n1)

//Remove duplicates from an array:
//Anonymous:

let remove = function(arr){
  return [...new Set(arr)];
}
console.log(remove(["Dhana","Prabha","Prabha","Nirai"]));

//IIFE:

(function(array){
  let dup = [...new Set(array)];
  console.log(dup);
 })(["Dhana","Dhana","Prabha","Prabha","Nirai"])

 //Rotate an array by k times:
 //Anonymous:
 let rotate = function(arr,d){
  let data ;
  for(let i=0;i<d;i++){
      data =arr.shift();
      arr.push(data);
  }
  return arr;
}
console.log(rotate([1,2,3,4,5,6],2));

//IIFE:
console.log((function(arr,d){
  let data ;
  for(let i=0;i<d;i++){
      data =arr.shift();
      arr.push(data);
  }
  return arr;
})([1,2,3,4],3));

//Do the below programs in arrow functions.
//Print odd numbers in an array:
var y=[5,4,26,18,20,31];
var res=((arr)=>{
    var odd=[];
for (var x of arr){




    if(x%2==1){
    odd.push(x);
       }
    else{
    continue;
      }
    }
return odd;
})

console.log(res(y));

//Convert all the strings to title caps in a string array:
var array=["Dhana","Prabha","Nirai","Viki"];
var res=((array)=>{
    for(i=-0;i<array.length;i++){
        var y=array[i].split("")
        if(y[0].charCodeAt()>=97&&y[0].charCodeAt()<=122){
            y[0]=String.fromCharCode(y[0].charCodeAt(0)-32)
            
            }
            array[i]=y[0]+array[i].substring(1,y.length)
    }
console.log(array.join(","));
})
res(array)

//Sum of all numbers in an array:

var arr=[10,12,15,18];
var res=((arr)=>{
    var sum=0;
for(var x of arr){
    sum=sum+x
}
console.log(sum)
})
res(arr);

//Return all the prime numbers in an array:
var arr=[12,14,16,91,19,1,2,4];


var prime=((arr)=>{
    var result=[];


    for(var x of arr){
    var repeat=0;
        for(var i=2;i<=x/2;i++){
            
        if(x%i==0){
            repeat=1;
            break;


        }
        }
        if(repeat==0){
            result.push(x)
        }
    }
    return result;


})
console.log(prime(arr))
//Return all the palindromes in an array:
var arr=[101,"mom","bob","dad","dhana","guvi"];

var palindrome=(()=>{
    var res=[];
for(var x of arr){
    var repeat=0;
    var y=x.toString();
    for(i=0;i<=y.length/2;i++){
        if(y.charAt(i)==y.charAt(y.length-i-1)){
             repeat=1;

        }

    }
    if(repeat==1){
        res.push(x)
    }
}
return res;
})
console.log(palindrome(arr));







