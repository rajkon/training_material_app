
//new operator(also called new binding) and classes
//es5 and above standard instead of creating a function create a class if we want multiple instances
class Foo {
    constructor() {
        this.name = 'John';
        this.say = function () {
            return "I am " + this.name;
        };
    }
}

let result = new Foo(); //creating object
let result_r1 = new Foo(); //creating object

console.log(result.say() === result_r1.say());


console.log(result.name);  //John
console.log(result.say());  //I am John
result.name = 'Henry';
console.log(result.name);  //Henry
console.log(result.say());  //I am Henry


console.log('------- arrow in a class and this used to create an instance/object  -------');
class Foo2 {
    constructor() {
        this.name = 'Bill';
        this.say = () => "I am " + this.name;
    }
}

let result2 = new Foo2();
let result_r2 = new Foo2(); //creating object
console.log('with arrow compare constructor functions: ' +  (result2.say() ===  result_r2.say())); //true
console.log('type: ' + typeof result2); //object
console.log(result2.name); //Bill
console.log('result2.say():'+ result2.say()); //I am Bill
console.log('result_r2.say():' + result_r2.say());//I am Bill
result2.name = 'Warren Buffet';
console.log('----- changing name again in the instance ----');
console.log(result2.name);
console.log(result2.say());

