let str = "Javascript is amzing";
let sub = str.slice(-2, 2);
console.log(sub)

const paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptatem minima eligendi iusto optio iure sint"

// indexing in string

const indexofFirst= paragraph.substr(40,3)
console.log(indexofFirst)

// concatination in string

let firstname= "Jhon";
let lastname= "Doe";
let fullname= firstname +""+ lastname
console.log(fullname)

// string literal



let university="K.R. Mangalam";
let program="BCA AI/DS"
console.log("MY name is Pratima Singh and I am pursuing"+""+program+"from"+university)

console.log("MY name is Pratima Singh and I am pursuing$ {program}+ from ${university}")

//spread operator

let arr=[1,2,3]
let arr2=[4,5,6]
let newarr=[...arr,...arr2];
console.log(newarr)