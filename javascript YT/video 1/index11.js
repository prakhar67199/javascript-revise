// <----introduction arrays------->

// it is reference data types {reference data types=object,array,string}
// in arrays all the data will be stroed in continues memory location

let fruit=["mango", "banna","jackfruit","oranges","apple"];
let numbers=[1,2,3,4,5];
let mixed=["prakhar","chandra","gupta" , 1,2,3,45]
console.log(fruit);
console.log(numbers);
console.log(mixed);
console.log(numbers);
console.log(fruit[0]);
console.log(typeof numbers);

// <-------some array methods------->

// 1. array.isarray() method -> it is used to check given object is array
console.log(Array.isArray(fruit));

// 2. push method->it is used to push element from rear side in array
fruit.push("prakhar");
console.log(fruit);

// 3. pop method -> it is used to remove the element from last in array
fruit.pop();
console.log(fruit);

// 4.unshift method->it is used to push element in array from starting
fruit.unshift("maya");
console.log(fruit);

// 5.shift method->it is used to remove the element from starting
fruit.shift();
console.log(fruit);

// note->push,pop method are fast compare to shift,unshift method



// <----------primitive vs reference data types------>
// primitive data types

// primitive type
let num1=90;
let num2=num1;
console.log(num1);
console.log(num2);
num1++;
console.log("after incremation value is ");
console.log(num1);
console.log(num2);

// reference types
let array1=["item1","item2"];
let array2=array1;
console.log(array1);
console.log(array2);
array1.push("item3");
console.log("after insert");
console.log(array1);
console.log(array2);

// how to clone array 
let array3=["prakhar","chandra","gupta"];
// 1st ways
let array4= array3.slice(0);
// 2nd waay
let array5=[].concat(array3);
// 3rd way note-> (spread operator)
let array6=[...array3];


// how to clone array and add some element
let array7=["maya","gupta","shreyansh","gupta"];
let array8=array7.slice(0).concat(["satish","gupta"]);
// or
let array9=[].concat(array7,["satish","gupta"]);
// or
let array10=[...array7,"satish","gupta"]


// how to apply for loop in array
for(let i=0;i<=array7.length-1;i++)
{
    console.log(array7[i].toUpperCase());
}
