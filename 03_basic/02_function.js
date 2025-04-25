 
 //REST METHOD
function usingRest(...num){ //===> EK PARAMETER SAB LEGA ARGUMENTS JITNA BHI HAI
    let result = num
    console.log(result);
    
}
// usingRest(200,300,400,5000)

//  FUNCTION SE KAISE CALL KARE OBJECT KO
 const user = {
    Name: "Taha Petkar",
    Price: 199
 }
 function addUserName(anyObj){
    let result = (`Name is ${anyObj.Name} and Price is ${anyObj.Price}`)
    console.log(result)
 }
//  addUserName(user)

// OBJECT KO CALL KARNE KA SECOND TARIKA 
// addUserName({
//     Name: "Akif",
//     Price: 399
// })

// SHORT CODE
function handleObject(anyobj){
    return `Name is ${anyobj.Name} and price is ${anyobj.Price}`
}
// console.log(handleObject(user));

// FUNCTION SE KAISE CALL KARE ARRAY KO

const myArray = [200,300,400,500,660,700]

function handleArray(anyArray){
    return anyArray[3]
}
// console.log(handleArray(myArray));

// FUNCTION KO CALL KARNE KA SECOND TARIKA 
console.log(handleArray([500,400,300,4000,500,600]))