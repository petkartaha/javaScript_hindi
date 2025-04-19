// Singleton

// const tinderUser = new object() => Singleton Object

const tinderUser= {}
tinderUser.name = "taha petkar"
tinderUser.email = "taha@gmail.com"
tinderUser.city = "Kalyan"
// console.log(tinderUser);

// Objects ke andar Objects

const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname :{
            firstname:"Taha",
            lastname: "Petkar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


// const obj1 = {1:"a",2:"b"}
// const obj2 = {3: "c",4:"d"}
// const obj3 = {5: "e",6:"f"}
// const obj4 ={obj1,obj2,obj3}

// console.log(obj4);


// Object Assign


// const target ={1:"a",2:"b"}
// const source ={3:"c",4:"d"}

// const obj5 = Object.assign(target,source)
// console.log(obj5);


// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"c",4:"d"}
// const obj3 ={5:"e",6:"f"}

// // const obj4 = Object.assign(obj1,obj2,obj3) 

// const obj4 = Object.assign({},obj1,obj2,obj3) //=> {}
// console.log(obj4);

// Object Assign snytax

// const target ={1:"a",2:"b"}
// const source ={3:"c",4:"d"}

// const returnTarget ={...target,...source}
// console.log(returnTarget);

// Object Array
const User=[
    {
        email:"taha@gmail.com"
    },
    {
        name:"taha",
    },
    {
        phone:12345667
    }
]
User[2].name
 

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //=>keys [ 'name', 'email', 'city' ]

console.log(Object.values(tinderUser));//=>values [ 'taha petkar', 'taha@gmail.com', 'Kalyan' ]

console.log(Object.entries(tinderUser));// => entries   [ 'name', 'taha petkar' ],
                                                        // [ 'email', 'taha@gmail.com' ],
                                                        // [ 'city', 'Kalyan' ]
                                                        //  ]


console.log(tinderUser.hasOwnProperty("email")); //=>hasOwnProperty (true)
            