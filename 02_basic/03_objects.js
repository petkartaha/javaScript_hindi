// Object literals


const symbol=Symbol("mySym")

const jsUser={
    "full name": "taha petkar",
    name:"taha",
    email:"taha@gmail.com",
    age: 23,
    city:"Delhi",
    [symbol]: "myKey",
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser["symbol"]);

// Object ko change

jsUser.email = "petkar@gmail.com"


// Object.freeze (jsUser)
jsUser.email = ("mohd@gmail.com")
// console.log(jsUser);

// Functions ko Object me variable ke tarha treat ki jiye 

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello Taha,${this.name}`); //=>`` isko bolte hai String Interpolation
    }
console.log(jsUser.greetingTwo());
