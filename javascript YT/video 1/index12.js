// for of loop
const fruits=["mango","banana","papaya"];
for(let fruit of fruits)
{
    console.log(fruit.toUpperCase());
}
// exemple-2
let var1=["prakhar","chandra","gupta"];
const var2=[];
for(let var1s of var1)
{
    var2.push(var1s.toUpperCase());
}
console.log(var2);


// for in loop 
for(let index in var1)
{
    console.log(index);
    console.log(var1[index].toUpperCase());
}

// array destructuring

const myAraay=["maya","gupta","satish","gupta"];

// 1st way
let myvar1=myAraay[0];
let myvar2=myAraay[1];
console.log(myvar1);
console.log(myvar2);


// 2nd way
let [ var3, var4]=myAraay;
console.log(var3);
console.log(var4);



// note-> for of loop work over index data / key values of reference data
// note-> for in loop works over index / properties of reference data 