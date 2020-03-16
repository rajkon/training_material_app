

//note the error in the sleep function  -> cb is undefined in this example. 
function sleep(cb, ms) {
  return new Promise((resolve) => resolve (setTimeout(()=> cb, ms)));
}

async function delayedGreeting() {
  console.log("Hello");
  await sleep(myfun(), 1000);
  console.log("World!");
}

function myfun() {
  console.log("whatever");
}

delayedGreeting();
console.log("Goodbye!");










// Hello
// whatever  //myfun() will execute the function before 1000 millisecond timeout
// Goodbye!
// World!


// //---------------- WITH WEBAPI SetTimeOut ------------------


// async function delayedGreeting2() {
//   console.log("2- Hello");
//   //await sleep(myfun(), 1000);
//   setTimeout(() => { myfun2(); }, 1000);
//   console.log("2- World!");
// }

// function myfun2() {
//   console.log("2- whatever");
// }

// delayedGreeting2();
// console.log("2- Goodbye!");
