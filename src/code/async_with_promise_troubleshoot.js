

// Troubleshoot later
function sleep(cb, ms) {
  return new Promise((cb) => setTimeout(cb, ms));
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