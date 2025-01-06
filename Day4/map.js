console.log("---------- map ------------");


let arr = [6,7,8,9,10];
// console.log(arr);

let sqrt = arr.map(num => num * num);
// console.log(sqrt);


let details = [
    { name :"Nehal",age:22},
    {name:"prateek",age:23},
    {name:"Harinandan bhai",age:25},
    {name:"Aayush sir",age : 26}
];

// console.log(details);

let fetchName = details.map(name => name.name);
// console.log(fetchName);

let fetchAge = details.map(age => age.age);
// console.log(fetchAge);


let fetchSingleDetail =details.map(detail=> detail.age<23 && detail.name.startsWith('N'));
console.log(fetchSingleDetail);