// <----------map----------------------->
// note -> 1). map is iterable
// 2). it is used to store the data in ordered fashion
// 3).it store key value pairs (like object)
// 4). duplicates keys are not allowed like object
// difference between map and object are
// 1). object can store its keys in form of  string and object
// 2). in maps keys are stored in user given format
// 3). in maps you can store anything as key eg. array,number,string,object

// const var1= new Map();

// or we can write map like this
// const person= new Map([["firstname","prakhar"],["lastname","gupta"],["age",7]]);

// console.log(var1);
// var1.set("firstName","prakhar");
// var1.set("midName","chandra");
// var1.set("age",25);
// var1.set(728,"agent");
// var1.set([1,2,3,5],"nuclear code");
// var1.set("address","koyal Bagh Colony");
// console.log(var1);

// how to print particuler key value
// console.log(var1.get("firstName"));
// console.log(var1.get(728));

// how to print all the keys of map
// console.log(var1.keys());
// for(let k of var1.keys())
// {
//     console.log(k);
// }

// for(let key1 of var1)
// {
//     // console.log(key1);
//     console.log(Array.isArray(key1));
// }


// how to add data in  object using map and the data should not be saved in object 
const obj1={
    productId:456,
    productName:"momos",
    productWeight:"45gm"
};

const extraInfo= new Map();
extraInfo.set(obj1,{productcolor:"black", productData:"sestive"});
console.log(obj1);
console.log(extraInfo.get(obj1).productData);
console.log(extraInfo.get(obj1).productcolor);

