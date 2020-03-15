
// Concepts applicable here: event loop, call back queue, stack
// Stack is a LIFO (last in first out) data structure.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

//"Run-to-completion" from the 'message' queue

//"Never blocking" - A very interesting property of the event loop model is that JavaScript, 
// unlike a lot of other languages, never blocks. 
// Handling I/O is typically performed via events and callbacks

console.log('1-Starting')
// Wait 2 seconds before running the function
setTimeout(() => {
    console.log('3-Timer-log')
}, 0);
console.log('2-Stopping')









//Output:  
// 1-Starting
// 2-Stopping
// 3-Timer-log
