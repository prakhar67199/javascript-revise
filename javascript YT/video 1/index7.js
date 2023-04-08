// typeof operator
// data types(primitive) => string,number,boolean,null,undefined,bigint,symbol
let h=22;
let firtName="prakhar";
console.log(typeof h);
console.log(typeof firtName);
// another way to use typeof operator
console.log(typeof 45);
console.log(typeof "prak");


// how to convert number to string
let age=45;
console.log(typeof age);
// convert number to string
// 1st way
age=age+ "";
// another way
// age=String(age);
console.log(typeof age);



// how to convert string to number
let names="34";
console.log(typeof names);
// 1st way
names=+names;
// second way
// names = Number(names)
console.log(typeof names)

// string concatnation
let string1= "prakhar";
let string2="gupta";
let total=string1+" "+string2;
console.log(total);

// small basic question
let pcg1="15";
let pcg2="58";
let t= +pcg1 + +pcg2;
console.log(t);

// <-----------------template string---------->
let age1=90;
let aboutMe= `my name is ${string1} and my age is ${age1}`;
console.log(aboutMe);

// <------undefined, null,bigint------->


// exwmple of undefined
let var3;
console.log(var3);
var var4;
console.log(var4);
// NOTE-> undefined is not possible with const


// exemple of NULL
let var5=null;
console.log(var5);
console.log(typeof null);

// exemple of bigint
// 1st way
let var6=BigInt(14528555222222222222222888888888888);
console.log(var6);
// 2nd way
let var7=152n;
console.log(typeof var7);



