//https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc

//In ES6 Arrow functions don’t bind their own this value.
//every javascript function while executing has a reference to its 
//current execution context, called 'this'


// While in ES5 'this' referred to the parent of the function, 
// in ES6, arrow functions use lexical scoping — 'this' refers to 
// it's current surrounding scope and no further.
//-------------- with arrow functions
function createUserWithAccounts(username, accounts){
    this.given_name = username;
    this.list_accounts =  function ( ){
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

