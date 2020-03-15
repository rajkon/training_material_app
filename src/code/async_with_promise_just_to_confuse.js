const axios = require("axios");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function getAPIResponseAsync() {
    var response = await axios.get('http://google.com');
    console.log("before await ");
    var resp = await response;
    await sleep(1000);
    console.log("after await")
    console.log("resp in async func: " + JSON.stringify(resp.data));
    return resp;
};

//getAPIResponseAsync();
getAPIResponseAsync().then( (resp) => {
    console.log('data after then call:');
    console.log(resp);
});
console.log("final stmnt");