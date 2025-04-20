 const name = "taha"
 let lastName = "Petkar"
//  console.log(name + lastName + "Mohyuddin");


//** Use this syntax IMP**/
console.log(`Hello ${name} kaise ho ${lastName}`);

//METHODS 
 const gameName = new String("mohd-taha-petkar")
// console.log(gameName.__potto__);
console.log(gameName.charAt(3));        //=> a
console.log(gameName.toUpperCase()); //=>TAHA
console.log(gameName.length);       //=> 4
console.log(gameName.indexOf("a"));//=>1

// SUBSTRING
const newString = gameName.substring(0,2); //=>ta
console.log(newString);


//SLICE **IMP**
const otherString = gameName.slice(-8,3); //=> tah Slice ke andar Negative value use kar sakte hai.
console.log(otherString);


//TRIM

const newStringOne = "    Taha Petkar    "

console.log(newStringOne)

console.log(newStringOne.trim()); //=>Taha Petkar


//REPLACE 

const url = "http://tahapetkar/tah%23petkar"
console.log(url.replace("23","_"));         //=>http://tahapetkar/tah%_petkar


//INCLUDE
console.log(url.includes('petkar')); //=>true


//SPLIT String ko Array me convert karne ke liye

console.log(gameName.split("-")); //=>[ 'mohd', 'taha', 'petkar' ]

