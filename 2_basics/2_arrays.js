const marvel =["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc); // array k andar array aa jayega 
// // not a good practice
// console.log(marvel);


// const newArray=marvel.concat(dc); // concat return new array 
// console.log(newArray);

const allHeroes = [...marvel,...dc]  // spread operator 
console.log(allHeroes);


const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];


const real_another_array = another_Array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Prince"))
console.log(Array.from("Prince"))

console.log(Array.from({name:"Prince"}))  // interesting case hai agar convert nhi kar paya to empoty arraya de dega 

let score1= 100;
let score2=200;
let score3 =300;

console.log(Array.of(score1,score2,score3))
