console.log("-------  Hoisting in Javascript: function hoisting  ----------");

sayHello();
function sayHello(){
    console.log("Hello, how are you!.");
};



myDetails();
function myDetails(){
    console.log("My name is: Md Nehal Ahmad");
    console.log("My age is: 22");
    console.log("Currently: I am Working as a Software Enginner in Paynways Companys;")
    
}
console.log("----------------------------------------------");

console.log("-------  Hoisting in Javascript: variable hoisting  ----------");



console.log(x);

var x = 10;
console.log(x);


// console.log(y)/\;
let y = 20;
console.log(y);


// console.log(z);
const z= 'abc';
console.log(z);



console.log(this);
