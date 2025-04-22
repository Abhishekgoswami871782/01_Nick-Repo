// let a = 10
// const b = 20
// var c = 30



var c = 300             // var scope 
if(true) {
    let a = 10           //varscope ya Blok scope 
    const b = 20       
    var c = 30          

console.log(a);
console.log(b);
console.log(c);


/**********************interesting***************** */


console.log(addone(5))
function addone(num){
    return num  + 1
}


const addTwo = function (unm){
    return unm + 2
}
addTwo(5)