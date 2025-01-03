console.log("print sub Array")
let arr = [1,2,3,4,5];

function printSubArr(arr){
    for(let s = 0; s<arr.length; s++){
        for(let e = s; e<arr.length; e++){
            let subArrays = [];
            for(let k = s; k<=e; k++){
                subArrays.push(k);
            }
            console.log(subArrays);
        }
    }
}

printSubArr(arr);

console.log("---------------------------------------")
console.log("print merge sorted Array");
let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3

const merge = function(nums1,m,nums2,n){
    let i = m-1;
    let j =n-1;
    let k = m+n-1;
    while(i>=0 && j>=0){
        if(nums1[i]<nums2[j]){
            nums1[k]=nums2[j];
            j--;
        }else{
            nums1[k]=nums1[i];
            i--;
        }
        k--;
    }

    while(j>=0){
        nums1[k]= nums2[j];
        j--;
        k--;
    }
}

merge(nums1,m,nums2,n);
console.log(nums1);