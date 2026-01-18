 //Q1. reverse the array by using push and pop

arr=[1,2,3,4,5]
 
    new_arr=[]

    while(arr.length>0){
        new_arr.push(arr.pop())
    }

    console.log(new_arr)


// Q2. remove all the negative no.s in an array
 
let arr2 = [5, -3, 7, -1, 0, 6, 9];

let result = [];

while (arr2.length > 0) {
    let val=arr2.shift(); 

    if (val >= 0) {
        result.push(val);
    }
}

console.log("Array without negative numbers:", result);

// check if array is pellendrom or not

let arr3 =(1,2,3,4,5)
let temp=[]
let orignal=[]

while(arr3.length>0){
    result.push(arr3.pop())
}

console.log(result)