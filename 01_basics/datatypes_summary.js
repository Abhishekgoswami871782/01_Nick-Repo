 //   #primetive types 

 // 7 types :-
 // string,
 // number,
 // boolearn,
 // null, 
 // undefined,
 // Symbol
 // BigInt


 const score = 100
 const scoreValeue = 100.3


 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId )

 const bigNumber = 9454896464654684658468n
 


// Reference (Non primitive)


// arry,
// objects,
// Functions,

//arry
const heros = ["shaktiman", "naagraj", "doga"]

//objects
let myObj ={
 name: "htesha",
 age: 25,
}

//function
const myFunction = function (){

console.log("hello world");
}

console.log(typeof outsideTemp);

console.log(typeof scoreValeue)

console.log(typeof myFunction);


//**************************************************//
//****************** Stack, Heap, * ****************//


//stack (primitive )
//Heap (non primitive)

let myYOutubename = "hiteshchoudharydotcom"

let anothername = myYOutubename
anothername = "chaiaurcode"

console.log(myYOutubename);
console.log(anothername);

 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.emil = "hitesh@google.cm"

console.log(userOne.email);
console.log(userTwo.email);


