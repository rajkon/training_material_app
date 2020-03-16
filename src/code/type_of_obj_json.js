const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    cubeFunc(num){
        return num * num * num;
    }
}

let res = book instanceof Object;
console.log(' type of the variable book is an object ? ' + res); //true


// Covert JavaScript object into JSON string
const bookJSONstr = JSON.stringify(book);
let res2 = book instanceof String;
console.log(' type of the variable bookJSONstr is a string  ? ' + res); //true
console.log('bookJSONstr:' + bookJSONstr);

// Covert JSON string into object
const bookObject = JSON.parse(bookJSONstr)
console.log(bookObject.title) // Prints: Ego is the Enemy
//console.log(bookObject.cubeFunc(3)) // Will throw error even if cubeFunc was an arrow function