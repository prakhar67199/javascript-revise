// string indexing
let firstname="prakharlgkjnergn";
// how to print spefic index value
// console.log(firstname[3]);
// how to find length of string
// console.log(firstname.length);
// how to find last index value without knowing index length
// console.log(firstname[firstname.length-1]);

// useful string method
let second= "     prakhargupta    ";

console.log(second.length);
// trim function is used to remove spaces and return newstring
let newstring= second.trim();   
console.log(newstring.length);
// touppeercase function  is used convert lower ot upper
let third="abhishekgupta";
console.log(third.toUpperCase());
let forth="SATISHGUPTA";
console.log(forth.toLowerCase());
// slice function is used to cut the string 
let fifth="mayagupta";
// let answer=fifth.slice(3,6);
let answer =fifth.slice(1);
console.log(answer);
