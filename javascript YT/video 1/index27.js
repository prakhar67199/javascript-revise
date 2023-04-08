// <--------------sets---------------->
// note-> 1). set are iterable
// 2). it is used to store data
// 3). sets also have its own methods
// 4). order is not gurnteed
// 5). it store only unique items (no duplicate are allowed)
// 6). it can store multiple datatypes value 
// 7).we can store same array in set if they are not declared only they are pushed in set line number 14,15

const myarr=["prakhar","chandra","gupta"];
const city =["hardoi","delhi","kashmir","hydrabaad"];
const value= new Set([1,2,3,5,4]);
value.add(23);
value.add(myarr);
value.add(["hardoi","delhi","kashmir","hydrabaad"]);
value.add(["hardoi","delhi","kashmir","hydrabaad"]);
// why-> because both array have different address 
value.add(city);
value.add(city);
// why->because both array have same address
console.log(value);

// has function->it is used to check that particuler element has present in set or not it also return value that will be true or false
const ans= value.has(city);
console.log(ans);

// for(let a of value)
// {
//     console.log(a);
// }

const value1=new Set([1,2,3,4,5,6,7,8,9]);
// for(let val of value1)
// {
//     console.log(val);
// }

const myarr1=[1,2,3,4,4,5,5,5,6];
const var2=new Set(myarr1);
console.log("unique element are ",var2);
// how to find length of set 
let len=0;
for(let var3 of var2)
{
    len++;
}
console.log(len);