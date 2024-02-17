// Dates


let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());



let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());


let myCreatedDate2 = new Date("2023-03-10");
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2023");
console.log(myCreatedDate3.toLocaleString());




let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date();

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1); // month 0 se shuru hote hai  

console.log(`the day is ${newDate.getDay()} and the month is ${newDate.getMonth()+1}`)


newDate.toLocaleString('default',{
    weekday:"long",
})

