// iterables
// on iterable we can apply for of loop
// eg->string,array

// on string
// const firstName="prakhar";
// for(let name of firstName)
// {
//     console.log(name);
// } 

// on array
// const arr=["prakhar","chandra","gupta","maya","srishti","shreyansh","satish","saraswati"];
// for(let value of arr)
// {
//     console.log(value);
// }

// on object
// let obj={
//     productId:1524,
//     productName:"gun powder",
//     productmakingcost:1526,
//     productSellingCost:1900,
//     productrating:"unsafe",
// }

// for(let data of obj)
// {
//     console.log(data);
// }
// note->so object are not iterable



// <---------array like object---------->
// jinke pass length property hoti hai,and jinko ham index ke through access krr skte hai   they will consier under array like object
// eg->array,string


// exemple 
const mystr="saraswati vidhya mandir";
console.log(mystr.length);
console.log(mystr[15]);


// exemple
const myarr=[1,15,62,34,57];
console.log(myarr.length);
console.log(myarr[3]);