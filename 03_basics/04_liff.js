//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB COONNECTED`);      //named IIFE
})();


( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

