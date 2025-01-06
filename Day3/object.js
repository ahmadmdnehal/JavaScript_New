console.log("-------------  object in javaScript --------------");


// let obj1 = {
//     key1:"value1",
//     key2:"value2",
//     key3:"value3"
// };
// // console.log(obj1);
// console.log(obj1.key1);
// console.log(obj1.key2);
// console.log(obj1.key3);

// let person = {
//     name:"Nehal",
//     age:22,
//     isEmployee:true
// };
// // console.log(person);
// // console.log(person.name);
// // console.log(person.age);
// // console.log(person.isEmployee);


// let car = new Object();
// car.name = "Toyota";
// car.model = "safari";
// car.year = 2025;
// car.price = "45L";

// // console.log(car);
// // console.log(car.name);
// // console.log(car.model);
// // console.log(car.year);
// // console.log(car.price);


// let obj = {
//     greeting:"Hello"
// }
// let obj1 = Object.create(obj);
// console.log(obj1);

// delete obj.greeting;
// console.log(obj);




let company = {
    name:"Paynways",
    type:"Product base",
    employee:200
};

// console.log('name' in company);
// console.log('type' in company);

// for( let key in company){
//     console.log(`${key}: ${company[key]}`)
// }

let key = Object.keys(company);
for(let i = 0; i<key.length; i++){
    let keyss = key[i];
    console.log(company[key]);
}










