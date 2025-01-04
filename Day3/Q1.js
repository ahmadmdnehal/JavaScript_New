console.log("----- Containe Duplicate -----")
let nums = [1,2,3,1]
console.log("Method 1 --- Normal Native Approach")

let containsDuplicate = function(nums){

    for(let i = 0; i<nums.length; i++){
        for(let j =i+1; j<nums.length; j++){
            if(nums[i]==nums[j]){
                return true;
            }
        }
    }
    return false;
}
console.log(containsDuplicate(nums));

// let nums1 = [1,2,3,1]
console.log("---- Method 2 -> Using map")
let containsDuplicate1 = function(nums){
    const map = new Map();
    for(let num of nums){
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num, 1);
        }
    }

    for(let [key,val] of map){
        if(val >= 2){
            return true;
        }
    }
    return false;
}
console.log(containsDuplicate1(nums));

console.log("---------- Approach 3 -> Using HashSet(Set)")

let containsDuplicate2=function(nums){
    const set = new Set();
    for(let num of nums){
        if(set.has(num)){
            return true;
        }else{
            set.add(num);
        }
    }
    return false;
}

console.log(containsDuplicate2(nums));