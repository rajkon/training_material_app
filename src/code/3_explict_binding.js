//3- Explicit Binding:

//------------ CALL

function greet1(){
	console.log(this.name);
}

var person = {
	name:'Alex'
}

greet1.call(person, arg1, arg2, arg3); // Alex

//------------  APPLY

function greet2() {
	console.log(this.name);
}

var person2 = {
	name:'Alex2'
}

greet2.apply(person2, [args]); // Alex  (Similar to call)

//------------  BIND

function greet3() {
	console.log(this.name);
}

var person3 = {
	name:'Alex3'
};

var greetPerson = greet3.bind(person3); 
greetPerson(); // Alex