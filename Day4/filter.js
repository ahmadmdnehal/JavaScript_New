console.log("-----------  filter in js -------------");

let arr = [1,2,3,4,5,6];

let evenNum = arr.filter(num => num %2 ===0);
console.log(evenNum);


let oddNum = arr.filter(num => num % 2 !== 0);
console.log(oddNum);


let poeples = [
    {name:"Neha",age:22,role:"Java developer"},
    {name:"Nasim", age:30,role:"full stack developer"},
    {name:"Anshum",age:25,role:"Java developer"},
    {name:"Prateek",age:22,role:"fronend developer"}
];



let filterPeople  = poeples.filter(person => person.age >=22 && person.name.startsWith('N') && person.role.match('Java developer') || person.role.match('full stack developer'));
console.log(filterPeople);

