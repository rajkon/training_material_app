
//https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
//https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c
//https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/
//https://medium.com/free-code-camp/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881#.59q9th108

//** In ES6 Arrow functions don’t bind their own this value. ***
//every javascript function while executing has a reference to its 
//current execution context, called 'this'
//

// While in ES5 'this' referred to the parent of the function, 
// in ES6, arrow functions use lexical scoping — 'this' refers to 
// it's current surrounding scope and no further. Thus the inner function knew to bind 
// to the inner function only, and not to the object’s method or the object itself.

//-------------- with arrow functions
function createUserWithAccounts(username, accounts){
    this.given_name = username;
    this.list_accounts =  () => {
        accounts.map((a) => { 
            console.log(this.given_name);  //prints the value. Lexical scoping - ES6 concept
            console.log(a)         
            console.log("---------");
        });
    }
}

let user = new createUserWithAccounts('raj kondala', ['savings','checking','mortage']);
user.list_accounts();

console.log(typeof createUserWithAccounts); //prints function
console.log(this.list_accounts) //undefined


console.log('**  arrow function expressions are best suited for non-method functions. ***')
//Arrow functions used as methods .
//Method is a function when object is associated with it.
//**  arrow function expressions are best suited for non-method functions.***
//Arrow functions do not have their own this.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
let obj = { 
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }
  console.log('--- Should print undefined {}')
  obj.b(); // prints undefined, Window {...} (or the global object)
  console.log('--- Should print 10 { i: 10, b: [Function: b], c: [Function: c] }')
  obj.c(); // prints 10 { i: 10, b: [Function: b], c: [Function: c] }