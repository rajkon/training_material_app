//hoisting
console.log('-------------hoisting--------------')
var a = 10;

myFunction(); //hoisting

function myFunction(){
   a = 20;
}

console.log("Value of 'a' outside the function " + a); //outputs 20

//Exercise:
//Write a similar function without looking above that changes a value of variable called 'name'


//Block-scoped variables: let and const
let b = 10;
const c = 20;

//c = 30;  //TypeError: Assignment to constant variable.
console.log(c);



console.log('----------------Rest parameters------------------');
//Rest parameters
function printAll(first, ...remaining){ 
    console.log(first + ",");
    remaining.map(r => console.log(r + ","));
}

printAll(2, 3, 4, 5, 6, 7);

console.log('----------------Default parameters ------------------');

//Default parameters 
function  stopLoss(percentage = 5){ 
    console.log('stop loss:' + percentage);
}

stopLoss(10);
stopLoss();