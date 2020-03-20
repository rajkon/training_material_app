

function sleep(cb, ms) {
  return new Promise((resolve) => resolve (setTimeout(()=> cb(), ms)));
}

async function delayedGreeting() {
  console.log("Hello");
  await sleep(myfun, 1000);
  await sleep(myfun2, 5000);
  await sleep(myfun3, 1000);
  console.log("World!");
}

function myfun() {
  console.log("whatever1");
}

function myfun2() {
  console.log("whatever2");
}

function myfun3() {
  console.log("whatever3");
}

delayedGreeting();
console.log("Goodbye!");

// Hello
// Goodbye!
// World!
// whatever