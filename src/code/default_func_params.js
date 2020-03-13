
//default parameters to a functions
const sayHello = (name = 'user!', age) => {
    console.log('Hello ' + name)
}
sayHello('Raj') // Will print: Hello Raj
sayHello() // Will print: Hello user
