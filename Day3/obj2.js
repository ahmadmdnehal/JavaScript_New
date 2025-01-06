//singleton
//object ko declare krne ka trika
// 1. object literals
// object = key and value
let person ={
    firstName :"Nehal",
    lastName:"Ahmad",
    "fullName":"Md Nehal Ahmad",
    age:22,
    location:"New Delhi",
    email:"ahmadmdnehal599@gmail.com",
    isDeveloper:true,
    lastLoginDays:["Monday","Tuesday","Friday"]
}
console.log(person);
console.log(person.lastLoginDays);

console.log("last login : "+ person.lastLoginDays);
console.log(person["location"]);
console.log(person.fullName);

console.log(person[fullName]);


