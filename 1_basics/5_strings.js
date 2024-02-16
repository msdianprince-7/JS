let name = "priyansh-nandwana-"
let age = 50;

console.log(` heelo my name is ${name} & my age is ${age} thank u `)

const gameName = new String('priyansh-nand-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,7);
console.log(newString);

const anotherString = gameName.slice(-3,8);
console.log(anotherString);


const newStringOne = "   .priyansh    "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://priyansh@nandwana"

console.log(url.replace('@','-'));

console.log(url.includes('priyansh'));

console.log(gameName.split('-')); // array bana dega



