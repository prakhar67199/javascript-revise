// spread operator in array

// we can use spread operator to copy data
let var1=[1,2,3];
let var2=[5,6,8];
let total=[...var1,...var2];
console.log(total);
// we can use spread operator as for string spreading in array
let final=[..."abc",..."124528"];
console.log(final);


// spread operator in object
let obj1={
    name1:"prakhar",
    age:"12"
};
let obj2={
    rollno:5626,
    address:"hardoi"
};
//how to use spread operator in object 
let obj3={...obj1,...obj2};
console.log(obj3);
// how to add key using spread operator
let des={...obj1,...obj2,gender:"male"};
console.log(des);
// in a single object same name of two key is not possible if we write then complier overwrite the value by itself



