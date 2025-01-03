

let a = 10;
console.log(a);

function call(){
    let a = 40;
    console.log(a);
    if(a>20){
        console.log(a);
        a = 50;
        if(a>30){
            console.log(a)
             a = 80;
            console.log(a);
        }
        console.log(a);
    }
    console.log(a);
}
call();

console.log(a);
