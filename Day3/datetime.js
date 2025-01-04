console.log("---------- Date & time in JavaScript ----------");



// console.log("new Date()  today current date deta hai");;
// let currentDate = new Date();
// console.log(currentDate);

// console.log("new Date('2025-01-10')  specific date deta hai");;

// let specificDate = new Date('2025-01-10');
// console.log(specificDate);


// console.log("new Date(2025,1,4, 17,45,0)  custom Date date deta hai");
// let customDate = new Date(2025,1,4, 17,45,0);
// console.log(customDate);


console.log("current date se kuch bhi nikalna ho to ");

let date = new Date();
// console.log("today date and current time: "+ date);

// console.log("only current year: "+ date.getFullYear());
// console.log("only current month: "+ date.getMonth());
// console.log("only current date: "+ date.getDay());
// console.log("only current time in hour: "+ date.getHours());

// console.log("only current minutes: "+ date.getMinutes());
// console.log("only current second: "+ date.getSeconds());
// console.log("only current millisecond: "+ date.getMilliseconds());

// console.log("only current day: "+ date.getDay());

date.setFullYear(2025); 
date.setMonth(0);
date.setDate(6);
date.setHours(18);
date.setMinutes(45);
date.setSeconds(30);

console.log(date);


date.setDate(date.getDate()+5);
console.log(date);











