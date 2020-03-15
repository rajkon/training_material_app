function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

obj.foo();  // 2 


//---------
let john = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

john.greet("Mark");  // Hi Mark, my name is John

let fx = john.greet;
fx("Mark");   // Hi Mark, my name is
// fx will be a reference to the greet function itself 
// so the default binding applies and this will refer to Window.

//Hi Mark, my name is John
//Hi Mark, my name is undefined