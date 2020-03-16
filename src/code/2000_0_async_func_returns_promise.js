
//async functions return promise by default

//non-es6 style / typical function
async function foo() {
    // do something
}

//arrow function - ES6 syntax 
const foo2 = async () => {
    // do something
}

//arrow functions with single parameter - example 1 
const foo3 = async param => {
    // do something with param
}

//arrow functions with single parameter - example 2 
const foo4 = async (param) => {
    // do something with param
}

//anonymous async function
const foo5 = async function () {
    // do something
}


console.log(foo());
console.log(foo2());
console.log(foo3());
console.log(foo4());
console.log(foo5());