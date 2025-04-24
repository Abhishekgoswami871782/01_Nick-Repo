const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

                  //01

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

                  //02

//  const addTwo = (num1, num2 ) => {
//     return num1 + num2 
//  } 
                 
                   //03

// const addTwo = (num1, num2 ) =>  num1 + num2 
                    

                   //04

// const addTwo = (num1, num2 ) =>  (num1 + num2) 
              
                    //05

const addTwo = (num1, num2 ) =>  ({username: "Abhishek"})

console.log(addTwo(5, 6))


const myArray = 