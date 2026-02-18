console.log("start...")

function myfunction(){
    setTimeout(() =>{
        return"my function timeout...";
    },2000);
}
console.log (myfunction());
myfunction();
console.log("end...");