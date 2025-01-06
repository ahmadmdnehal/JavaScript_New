
//bject de-structure and JSON API

//Object de-structure

// normal object structure
// let user ={
//     name:"Nehal",
//     age:22,
//     location:"india"
// };

// // object de structure
// const{name,age}=user;
// console.log(name);
// console.log(age);


// const{location} =user;
// console.log(location);


// const user ={
//     name:"Nehal",
//     age:22,
// };


// const{name:username, age:myAge,location="Unknown"} =user;
// console.log(username);
// console.log(myAge);
// console.log(location);

// const user ={
//     name:"Nehal",
//     address:{
//         city:"Delhi",
//         country:"India"
//     },
// };

// const{address:{city,country}} =user;
// console.log(city);
// console.log(country);



// const jsonString = '{"name":"Nehal","age":25}';
// console.log(jsonString);

// const users = JSON.parse(jsonString);
// console.log(users);

// console.log(users.name);









const user ={name:"Nehal",age:23,location:"Noida"};

let jsonString = JSON.stringify(user);
console.log(jsonString);
console.log(jsonString.name);
console.log(jsonString.age);
console.log(jsonString.location);











