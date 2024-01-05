const accountId = 6426561
let accountEmail = "gaurav@gmail.com"
var accountPassword = "123456789"
accountCity = "Mumbai"
let accountState
userId = 123;

//accountId = 2 not allowed. const is constant so the value of caonst variable can't be changed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log([accountId,accountEmail,accountPassword,accountCity,accountState,userId]);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);