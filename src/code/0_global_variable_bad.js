var a = 10;

myFunction(); //hoisting

function myFunction(){
   a = 20;
}

alert("Value of 'a' outside the function " + a); //outputs 20