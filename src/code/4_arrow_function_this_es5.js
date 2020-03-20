//-------------- without arrow functions
function createUserWithAccounts(username, accounts) {
    this.given_name = username;
    this.list_accounts = function () {
        accounts.map(function (a) {
            console.log(this.given_name);  //prints undefined because 'this' is global
            console.log(a);
            console.log("---------");
        });
    }
}

let user = new createUserWithAccounts('raj kondala', ['savings', 'checking', 'mortage']);
user.list_accounts();

console.log(typeof createUserWithAccounts); //prints function
console.log(this.list_accounts) //undefined
