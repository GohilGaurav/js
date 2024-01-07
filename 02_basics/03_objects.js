// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Gaurav",
    "full name": "Gaurav Gohil",
    mySym: mySym,
    age: 21,
    location: "Mumbai",
    email: "gaurav@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)

// JsUser.email = "gaurav@ss.com"
// Object.freeze(JsUser)
// JsUser.email = "gaurav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    return "Hello JS user"
}
JsUser.greetingTwo = function(){
    return `Hello JS user, ${this.name}`
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());