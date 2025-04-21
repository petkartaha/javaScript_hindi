 const array =[1,2,3,4,true,"taha"] //=> Square brakets ke andar jo hai element bolte hai 

//  Delacre Karne ke tarike 

 const arr = [1,2,3,4,5,6]
 const arrName =["indeva  ","taha"," software "]

//  const arr1 = new array(1,2,3,4) //=new is a key word 

//  console.log(arr[2]);
 
//  Array Methods

arr.push(7);
// console.log(arr);

arr.pop()       //=>[ 1, 2, 3, 4, 5, 6 ]

arr.unshift(8) //=>[    8, 1, 2, 3,
                                4, 5, 6
                                // ]

  arr.shift ()      //=>[ 1, 2, 3, 4, 5, 6 ]
  
  
//   console.log(arr.includes(3));//=>true
//   console.log(arr.indexOf(-2));//=>-1


// JION Function
  const newarr = arr.join()
  
// console.log(arr);
// console.log(newarr);//=>1,2,3,4,5,6 {join() jo hai woo array ko string me dega agar ham typeof bhi karke dekhege to bhi}


// SLICE 

console.log("A",arr);
const arr1 = arr.slice(1,3);//=>A [ 1, 2, 3, 4, 5, 6 ] 
                                // [ 2, 3 ] 3 position nahi lega 
console.log(arr1);
console.log("B",arr);

// SPLICE 

// const arr2 = arr.splice(1,3); //=>c [ 1, 5, 6 ] position 1,2,3 nahi lega Splice me 
// console.log("c",arr);

// console.log(arr2);
