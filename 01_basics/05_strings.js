const name = "gaurav"
const repoCount = 120

// console.log(name + " " + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('gaurav-gohil-com')

console.log(typeof name);
console.log(typeof gameName);

// console.log(gameName[2]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('-'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(0, 4)
// console.log(anotherString);

// const newStringOne = "   gaurav    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://gaurav.com/gaurav%20gohil"

console.log(url.replace('%20', '-'))

console.log(url.includes('gaurav'))

console.log(gameName.split('-'));