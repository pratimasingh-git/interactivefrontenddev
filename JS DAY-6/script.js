//string methods
// split()

let sentence="I am a comma separated sentance";
console.log(sentence.length);
let words=sentence.split("a");
console.log(words);


//Q1, Count the occurance of "r" in the given string.using split() method

let str= "tu meri mai tera mai tera tu meri";
let count=str.split("r").length -1;
console.log(count);

//first class function

function test(){
    console.log("test")
    return function test2(){
        console.log("test2")
        return function test3(){
            console.log("test3")
        }
    }
}
//test()()();
let value=test()
value();
value2();

//aynonomous function



//self invoking function 
