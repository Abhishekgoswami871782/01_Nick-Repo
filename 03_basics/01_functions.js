 function sayMyname () {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");

}
//sayMyname()

function addTwoNumbers(number1,  number2){
   // let result = number1 + number2
    return  number1 + number2

}

const result= addTwoNumbers(3, 5)
//console.log("result", result)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("plese enter a username")
        return
    }
    return `${username} just logged in `
}

//console.log(loginUserMessage("Abhishek"))


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 600, 700, 800))


const user = {
    username: "Abhishek",
    price: 199
}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))