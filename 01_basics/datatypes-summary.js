//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction();
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *********************** Stack and heap ***********************
let userOneEmail = "123@gmail.com"
let anotherEmail = userOneEmail;

anotherEmail = "gaurav@gmail.com"

console.log(userOneEmail,anotherEmail);

const user = {
    name: "gaurav",
    email: "gaurav@google.com"
}

const anotherUser = user;
anotherUser.email = "123456@google.com"
console.log(anotherUser)
