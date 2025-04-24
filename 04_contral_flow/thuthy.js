const userEmail = []


if(userEmail){
    console.log("Got user emial");
}else{
    console.log("Don'have user email");
}

/******************truthy values****************** */
 

//false, 0, -0, bighIndt, on, "", null, undefined, NaN,


/********************truthy values***************** */

//"0", 'false', " ", [], {}, function(){}



//Nullish Coalescing Operator (??): null nudefined

let vall; 

// vall = 5 ?? 10 
// vall = null ?? 10 
// vall = undefined ?? 15

//console.log(vall); 

//Terniary Operator

//condition ? true: false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

