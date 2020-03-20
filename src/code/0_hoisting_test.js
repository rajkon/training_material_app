// Functions and variables are stored in memory for an execution context
// before we execute our code. This is called hoisting.


// Functions are stored with a reference to the entire functions, 
// variables with the var keyword with the value of undefined, and 
// variables with the let and const keyword are stored uninitialized.

//https://dev.to/lydiahallie/javascript-visualized-hoisting-478h

console.log(some_variable); //prints undefined
console.log(add(3, 2));  //5   - hoisting
//console.log(country); //if accessed ReferenceError
//console.log(name);//if accessed ReferenceError

var some_variable ;
function add(a, b) { return a + b };
//let country  = 'US'; 
const name = 'raj';