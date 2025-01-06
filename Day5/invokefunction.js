console.log("---------------   invoke function ------------------");


(function sayHello(){
    console.log("hello,-----------");
})();



let greet = (()=>{
    console.log("Hello Wolrd");
})();


let message = "hello";
let details =  {
    name:"nehal ahmad",
    location :"Delhi"
}

const sendMessage = ((message,details)=>{
    console.log(message);
    console.log(details);
})(message,details);