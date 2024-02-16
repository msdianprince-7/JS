// data kiss basis pe memory mein store hote hai aur kiss trh se access kr sakte ho
// Primitive and Non primitive 

// primitive ; call by value hote hai 
// 7 type : String,number,boolean,null,undefined,symbol ,BigInt

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp =null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id==anotherId);


const bigNumber = 123456789097776666n;  // n lagate hi yeh big number ban gaya 

// symbol ka kaam hai uniqueness dena 

// non primitive type and reference type 

//Arrays , Objects , Functions 

const heros =["shaktimaan","priyansh","prince"]

let myObject = {
    name:"prince",
    age:22, 
    city:"kankroli",
}

const myFunction= function(){
    console.log("hello world");
}

console.log(typeof myFunction);
