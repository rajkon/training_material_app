function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	fooFunc:foo
};

obj.fooFunc();  // 2 //implicit binding


//--------- Object Literal ( generally used for singleton)
let user = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

user.greet("Mark");  // Hi Mark, my name is John

let fx = guser.reet;
fx("Mark");   // Hi Mark, my name is
// fx will be a reference to the greet function itself 
// so the default binding applies and this will refer to Window.

//Hi Mark, my name is John
//Hi Mark, my name is undefined