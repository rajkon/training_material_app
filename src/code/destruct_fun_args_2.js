
//default values when using ES6 destructuring

/* 
//passing an object to function
const obj = { label: "",  stock: 0 } ;
const transaction1 = (type, obj) => {
    console.log(type);
    console.log(JSON.stringify(obj));
}
transaction1('order1', obj)
 */

//label is defined so value of label printed in console log is undefined 
// but no error is thrown.
const transaction2 = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}
transaction2('order2')

console.log("-------- Passing destuctured parameters ------------");
//Passing destuctured parameters
const transaction3 = (type, { label = "K" , stock = 0 } = {}) => {
    console.log(type, label, stock)
}
transaction3('order3',{ label : "l", stock : 7 });
transaction3('order3');



//label is not defined so will throw error
// const transaction4 = (type, { stock = 0 } = {}) => {
//     console.log(type, label, stock)
// }
// transaction4('order4')


