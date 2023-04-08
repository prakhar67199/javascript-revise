// object.create method
const obj1={
    key1:"value1",
    key2:"valu2"
};

// how to create empty object
// const obj2={};
// or 2nd method
const obj2= Object.create(obj1);

obj2.key3="value3";
obj2.key4="value4";
console.log(obj2);
console.log(obj2.key1);
console.log(obj2.__proto__);

// __proto__ is same as [[prototype]]  it is used to create relationship between two object

// 
// it is called as proto chaining

// prototype is different in javascript