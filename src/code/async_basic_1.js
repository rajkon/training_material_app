
//async code
//event loop, call back queue, stack
console.log('1-start')
// Wait 2 seconds before running the function
setTimeout(() => {
    console.log('3-Timer-log')
}, 2000)
console.log('2-end')













//OUTPUT:

// 1-Start
// 2-end
// 3-Timer-log
