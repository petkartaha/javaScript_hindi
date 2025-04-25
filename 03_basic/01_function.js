function myName(){       //ye pure ko defination bolte hai
    console.log("T");     // myName() //Execution jaise ()ye lag gaya to usko excution bolte hai
                        // myName  //isse refference bolte hai 
                        // () Syntax
                        // Function is a Keyword
                        // myName is a Function Name 
    console.log("A");   
    console.log("H");
    console.log("A");
}
//  myName()

//  Sum of NUMBER

// Phala tarika
// function addNumber(num1,num2){
//     console.log(num1+num2);
    
// }

// let result = addNumber(3,9)
// console.log("result:",result);
// return result;                  //return is key word


// Second Tarika

// function addNumber2(num1,num2){
//     let result = num1+ num2;
//     return result;
// }
// let result = addNumber2(8,7)
// console.log("Result:", result);

// Third Tarika

// function addNumber3(num1,num2){
//     return num1 + num2;
// }
// let result = addNumber3(4,6)
// console.log("result:",result);

// Fouth Tarika

// function userName(name){                    // without if(condition){}
//     return `${name} Just login a username.`
// }
// console.log(userName("taha"));



// function userName(name){                      
//       console.log("please enter a name");
//         return // ===> Agar yahe par rukna ho to return laga hu.
//     }
//     return `${name} Login your username `
// }
// console.log(userName("Taha"))

// Fivth Tarika

function userName(name = "Petkar"){   // ==>Petkar is default Value given.
    if(name === undefined){
        console.log("please enter a username.")
    }
    let result = name
    return result;
}
let result = userName()
console.log("Just login a Username:",result)