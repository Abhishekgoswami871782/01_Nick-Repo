//singleton

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name:  "Abhishek",
    "full name": "Abhishek Goswami",
   [mySym]: "mykey1",
    age: 25,
    location: "jaipur",
    email: "nicky@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "abhishek@chatgpt.com"
 //Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



