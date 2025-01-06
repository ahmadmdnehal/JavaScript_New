console.log("--------   Block Scope ----------");


function helloWorld(){
    let block = "Hello World";
    console.log(block);
};
helloWorld();
console.log(helloWorld().block);