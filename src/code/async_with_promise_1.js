
function sleep(cb, ms) {
  return new Promise((resolve) => resolve (setTimeout(()=> cb(), ms)));
}

async function delayedGreeting() {
  console.log("Hello");
  await sleep(myfun, 1000);
  console.log("World!");
}

function myfun() {
  console.log("whatever");
}

delayedGreeting();
console.log("Goodbye!");

// Hello
// Goodbye!
// World!
// whatever