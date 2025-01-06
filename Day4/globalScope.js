console.log("---------  Global Scope -------------");


let globalvar = "i am am Global Scope";


function global(){
    console.log(globalvar)
};

global();

function globalShow(globalvar){
    console.log(globalvar);
}
globalShow(globalvar);

console.log(globalvar);

