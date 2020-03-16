//https://medium.com/tech-tajawal/javascript-this-4-rules-7354abdb274c

var myFunction1 = function() {
    console.log(this);
}
 
 myFunction1();    // Object [global] {...} or [object Window]  in browser

 //-- Example 2
 var myFunction2 = function() {
    console.log(this.a);
 }
 
 var a = 5 ;
 //In Node.js all modules (script files) are executed in their own closure 
 // while browsers execute all script files directly within the global scope.
 myFunction2();    //NOTE: it prints 5 in browser console but in node undefined

