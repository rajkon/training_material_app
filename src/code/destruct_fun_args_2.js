
//default values when using ES6 destructuring

const product = {
    label: 'Red-notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

/* 
//passing an object to function
const obj = { label: "",  stock: 0 } ;
const transaction1 = (type, obj) => {
    console.log(type);
    console.log(JSON.stringify(obj));
}
transaction1('order1', obj)
 */

console.log("-------- Passing destuctured parameters ------------");
// label is passed as a parameter so value of label printed in console log is undefined 
// but no error is thrown.
const transaction2 = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}
transaction2('order2'); 
transaction2('order2', product);

//Expected output:
// order2 undefined 0
// order2 Red-notebook 201

console.log("-------- Passing destuctured parameters without passing an object------------");
//Passing destuctured parameters
const transaction3 = (type, { label = "K" , stock = 0 } = {}) => {
    console.log(type, label, stock)
}
transaction3('order3',{ label : "l", stock : 7 });
transaction3('order3');

// order3 l 7
// order3 K 0

//label is not defined so will throw error
// const transaction4 = (type, { stock = 0 } = {}) => {
//     console.log(type, label, stock)
// }
// transaction4('order4')


