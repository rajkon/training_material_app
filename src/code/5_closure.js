//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeFunc(n) {
    var name = n;
    
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  let myFunc = makeFunc('mozilla');
  myFunc();

  myFunc = makeFunc('chrome');
  myFunc();
