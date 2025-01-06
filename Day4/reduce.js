let number = [1, 2, 3, 4, 5];

// let sum = number.reduce((acc,num)=> acc+num,0);

// console.log(sum);

let op = number.map(num => num * num)
    .map(num => num + 3)
    .map(num => num + 6)
    .map(num => num * 10)
    .filter(num => num < 250);

    console.log(op);
