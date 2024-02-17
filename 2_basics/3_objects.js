//  singleton
//Object.create 

// object literals 

const mySym = Symbol("key1");

const JsUser = {
    name:"Prince",
    "lastname":"nandwana",   // koi chanve nhi hai kya isko . laga k console log akr sake 
    age:22,
    //mySym :["mykey1"]  // abhi iska type  stringa hai 

    [mySym]:"mykey1", // symbol ko declare karne ka tarika using square brackets 

    location:"Udaipur",
    email:"prince@google.com",
    isLoggedIn:true,
    lastDay:["monday","tuesday"]
}


console.log(JsUser.email)
console.log(JsUser["email"]);  // bettert way to access objjects 
console.log(JsUser[mySym]);  // symbol ko access krne ka tariika 

console.log(JsUser["lastname"])

JsUser.name = "Prince"    // to change 
console.log(JsUser.name);

// Object.freeze(JsUser);   // iske baad koi bhi chahe krenge change nhi hoga 

JsUser.greeting = function(){
    console.log("hello priyansh ")
}

console.log(JsUser.greeting())


JsUser.greeting2 = function(){
  console.log(`hello mr ${this.name}`)
} 
console.log(JsUser.greeting2())
















