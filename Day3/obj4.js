// singleton objects


// let car = new Object();


// car.name = "fortuner";
// car.company = "Toyota";
// car.type ="SUV";
// car.model="SUV Toyota ";
// car.manufactureYear = 2025;
// car.showroomPrice='45Lacs';
// car.onRoadprice='50Lacs';
// car.isRunning=true;
// // console.log(car);


// let newCar={};
// let newCar1=new Object();
// console.log(newCar);
// console.log(newCar1);


let car = {
    name:"Scorpio N",
    engineType:"Petrol & Diesel",
    price : {
        showRoomPrice:1800000,
        onRoadprice:2200000
    },
    features:{
        brake:"break: yes",
        ac:'isExist',
        slideWindow:"present"
    }
}

// console.log(car);
// console.log(car.features.brake);
// console.log(car.price.onRoadprice);
// console.log(car.price.showRoomPrice);

const user = {
    username: "ahmadmdnehal599",
    password: "hashedPasswordHere", // Replace with an actual hashed password
    userdetails: {
        fullName: {
            firstName: "Md Nehal",
            lastName: "Ahmad"
        },
        personalDetails: {
            bankName: "SBI",
            bankAccount: {
                typeOfAccount: "savings",
                accountNumber: "83737373737"
            }
        },
        address: {
            permanentAddress: ["reorha", "jale", "darbhanga", "ward 06", 847203],
            residentialAddress: ["Madipur", "Punjabi Bagh", "New Delhi", 110063]
        }
    }
};

// console.log(user);
// console.log(user.userdetails.personalDetails.bankAccount.typeOfAccount)


let obj1 = {1:'a',2:'b'};
let obj2 = {3:'c',4:'d'};
console.log(obj1);
console.log(obj2);

// let obj3 ={obj1,obj2}
let obj3 = Object.assign(obj1,obj2);
console.log(obj3);

let obj4 = {...obj1,...obj2};
console.log(obj4);

