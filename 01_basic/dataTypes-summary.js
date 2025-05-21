// PRIMATIVE DATATYPE
//7 TYPES 

// String ,Boolean, Null, Number, Undefined, Symbol, BigInt
const name = "321"
const Name = "Taha"

const LoggedIn = false

const Number = 23

let accountCity; // const keyword undefined me nahi lagta hai  only scalar on(bool,int, float & string)

const userEmail = null

 const accountId = Symbol('123')
 const otherId = Symbol('123')

//  console.log(accountId === otherId);
 

//  Non PRIMATIVE 
//  In Non Primative rumtime we will get Object only

//Array, Object, Function
 const hero=["Taha", "Mohd", "Petkar"]

//  Object 
 const obj={
   namme :"taha",
    age:23,
 }

//  Function
 const myFunction =function(){
    console.log("Hello World");
    
 }


 //**************************************************************************************

//  Stack for Primitive it will give the copy

let myYoutubename = "life with animal"

let anOthername = myYoutubename

anOthername = "Chai ur code"
console.log(myYoutubename);

console.log(anOthername);


// Heap for Non Primitive it will give for reference

let userOne = {
   email : "tahapetkar4@gmail.com",
   upi : "taha@ybl"
}

let userTwo = userOne
userTwo.email= "petkar.mohdtaha@gmail.com"
let userThree= userTwo 
userThree.email = "mohd@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userThree.email);


