 
 const myArray =[1,2,3,4,5,true,"prince"];

 const myArray2 = new Array(1,2,3,4,5,6);

 console.log(myArray[3]);
 console.log(myArray2[1]);

 // *********** Array  methods ***********

//  myArray.push(7);
//  console.log(myArray);
//  myArray.pop();

// myArray.unshift(0);
//  console.log(myArray);
//  myArray.shift();


//  console.log(myArray.includes(5));
//  console.log(myArray.indexOf(5));

const newArray = myArray.join() // my array ko string mein convert kr dega 

// console.log(newArray);
// console.log(typeof (newArray))



// slice ,splice 

console.log("A",myArray);

const myn1 = myArray.slice(1,3) // 1 se leke 2 ka element dega 3ka element nhi dega 

console.log(myn1);

console.log("B",myArray)

const myn2 = myArray.splice(1,3)  // orginial array ko bhi change kr dega aur 1 se leke 3 index tk k element dega 
console.log(myn2);

console.log("C",myArray);

  
