// how to iterate array like object (getElementsByTagName,querySelectorAll,getElementsByClassName etc.)
// "getelementsbytagname" select the data on the basis of tag
// array like object has two properties -> length,indexing
let value= document.getElementsByTagName("a"); // it also return array like object
// console.log(value);
// console.log(typeof value);
// console.log(value.length);
// console.log(Array.isArray(value));

// on array like object we cant use foreach loop so we can use 
// only  for loop ,forof loop

// // iterate using for loop
// for(let i=0;i<value.length;i++)
// {
//     let temp=value[i];
//     temp.style.backgroundColor="pink";
//     temp.style.color="green";
//     temp.style.fontWeight="bold";
// }


// // iterate using forof loop
// for(let values of value)
// {
//     values.style.backgroundColor="yellow";
//     values.style.color="red";
//     values.style.fontWeight="bold";
// }

// note->we can not use foreach loop because of array like object but if we 
// convert array like object into array then we can use foreach loop

value=Array.from(value);
console.log(Array.isArray(value));

// iterate using foreach loop
value.forEach((value1)=>
{
    value1.style.backgroundColor="white";
    value1.style.color="red";

})