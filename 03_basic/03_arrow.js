const user = {
    username : "taha",
    price : 999,
    welcomeWebsite : function(){
        // console.log(`${this.username} , Welcome to website :)`);
        // console.log(this);
        
    }
}
    // IMP 
//     Object ke andar → this = wo object
// 🔵 Object ke bahar → this = global (window ya global)
//object ke andar likhu this to object right 
// object bahar likhu function bana kar console me likhu window me aahega ya
//  note.js me likhu to global 
// or bina function ke likhu direct 
// print karu console.log(this) me to output me {} empty aahega kya mai sahin hu?

// user.welcomeWebsite()
// user.username = "TMP"
// user.price = 786
// user.welcomeWebsite()

// console.log(this);


//IMP

    function chai(){
        let userName = "Taha"
        // console.log(this.userName); //==>undefined this key work nahi karta function 
                                        // ya arrow function me this object me kaam kata hai
        
    }
    chai()