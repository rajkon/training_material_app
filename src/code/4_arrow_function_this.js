let myFunction = function() {
    console.log(this);
 }
 
 myFunction();    // Window / Global object

console.log('----- creating objects using functions ------')
function Foo() {    
    this.name = 'John';
    this.say = function () {
        return "I am " + this.name;
    };
}

let result = new Foo(); //creating object
console.log(result.name);  //John
console.log(result.say());  //I am John
result.name = 'Henry';
console.log(result.name);  //Henry
console.log(result.say());  //I am Henry


console.log('------- arrow function in a function used to create an instance/object  -------');
//Arrow functions used as methods
function Foo2() {    
    this.name = 'Bill';
    this.say = () => "I am " + this.name;
}


let result2 = new Foo2();
console.log('type: ' + typeof result2); //object
console.log(result2.name); //
console.log(result2.say());
result2.name = 'Warren Buffet';
console.log('----- changing name again in the instance ----');
console.log(result2.name);
console.log(result2.say());


var group = {
    title: "Our Group has: ",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach( student => {
                // this here refer to group object
                console.log(this.title + ': ' + student);
            }
        );
    }
};

group.showList();


//Notes about 'this':
// 1- The value of 'this' is usually determined by a functions execution context.
// 2- In the global scope, 'this' refers to the global object (the window object).
// 3- The object that is standing before the dot is what the this keyword will be bound to.
// 4- We can set the value of this explicitly with call(), bind(), and apply()
// 5- When the new keyword is used(a constructor), this is bound to the new object being created.
// 6- Arrow Functions don’t bind this — instead, this is bound lexically (i.e. based on the original context)