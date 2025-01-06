console.log("------ function ---------");


function add(a, b){
    return a+b;
};

let ans =add(10,89);
console.log(ans);


//

const substraction=function(a,b){
    return a - b;
}

let anss = substraction(77,30);
console.log(anss);



const greet = ()=>{
    console.log("hello World");
}

greet();


const hello=(message,descriptions)=>{
    console.log(message);
    console.log(descriptions);
}

hello("hello how are you", "what blout you");


console.log("-----------------------------------")

let addition = (num)=>{
    let sum = 0;
    for(let i =0; i<=num; i++){
        sum = sum +i;
    }

    return sum;
}

console.log(addition(5));



let arr = [1,2,3,4,5];

let reverse=(arr) =>{
    let i = 0;
    let j = arr.length-1;
    while(i<j){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}
console.log(reverse(arr));