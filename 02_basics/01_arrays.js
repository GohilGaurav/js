// array

const myArr = [0, 1, 2, 3, 4,45, 5,",dmdmdmdm"]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeors[1]);

// Array methods

myArr.push(6)
// console.log(myArr);
myArr.push(7)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(",dmdmdmdm"));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);