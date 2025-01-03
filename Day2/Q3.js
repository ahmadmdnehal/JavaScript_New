console.log("Best time to buy And Sell Stock ");

let prices=[7,1,5,3,6,4,14];

let buyAndSell = function(prices){

    let profit = 0;
    let minprice = 1000000000;
    for(let i =0; i<prices.length; i++){
        if(prices[i]<minprice){
            minprice=prices[i];
        }
        if(prices[i]-minprice>profit){
            profit = prices[i]-minprice;
        }
    }
    return profit;
}

console.log(buyAndSell(prices));
console.log("-------------------------------------");
console.log("Q-Remove Element")

let nums =[0,0,4,2,5,0,5,0,2,4];
let val = 0;

let removeElement = function(nums,val){
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}

let newLength = removeElement(nums, val);
console.log(nums.slice(0, newLength)); 
console.log("New Length:", newLength); 
