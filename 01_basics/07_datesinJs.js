// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 11, 12)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 11)
let myCreatedDate = new Date("2023-01-14 05:02:21")
// let myCreatedDate = new Date("01-14-2023  05:02:21")
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    month: "long"
}));


