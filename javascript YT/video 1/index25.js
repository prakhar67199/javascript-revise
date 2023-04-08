// important array methods

// 1). foreach
// 2). map
// 3). reduce
// 4). filter

// <-----foreach function----------->

// exemple 1

// let arr=[4,2,3,6,5,12];
// function print(number,index)
// {
//     console.log(`array index is ${index} and value is ${number}`);
// }
// arr.forEach(print);

// or
// arr.forEach(function(number,index)
// {
//     console.log(`array index is ${index} and value is ${number}`);
// });

// exemple 2
// let arr=[4,5,6,7,8,9];

// function multi(number,index)
// {
//     console.log(`index of the array is ${index} and vale is ${number*2}`);
// }
// arr.forEach(multi);
// or 

// arr.forEach(function(number,index)
// {
//     console.log(`index of the array is ${index} and vale is ${number*2}`);
// })

// exemple 3
// const users=[
//       {firstName:"prakhar",age:23},
//       {firstName:"chandra ",age:25},
//       {firstName:"maya",age:52},
//       {firstName:"denny",age:50},
// ]

// using foreach method
// users.forEach(function(user)
// {
//     console.log(user.firstName);
// })

// or using for of loop
// for(let user of users)
// {
//     console.log(user.firstName);
// }

// or using arrow function

// users.forEach((user)=>
// {
//     console.log(user.firstName);
// })

// <------------map function------------->
// it is also a callback function

// const arr=[1,2,3,45,56,78];

// const print=function(number)
// {
//     return number*number;   
// }
// const ans= arr.map(print);

// const print= arr.map((number,index)=>
// {
//     return `index is ${index},value is ${number*number}`;
// })
// console.log(print);


// <-------------filter method-------------->
// const number=[1,2,3,4,5,6,7,8,9,10,11,12,13];

// const isEven=function(number)
// {
//     return number%2==0;

// }
// const evenNumber=number.filter(isEven);
// console.log(evenNumber);

// or 

// const oddnumber=number.filter((num1)=>
// {
//     return num1%2!==0;
// })
// console.log(oddnumber);

//   <--------reduce method------------------>
// const number=[1,2,3,4,5,10];


// const ans= number.reduce((accumelator,currentValue)=>
// {
//     return accumelator+currentValue;
// });

// or
// const ans= number.reduce((accumelator,currentValue)=>
// {
//     return accumelator+currentValue;
// },100);
// console.log(ans);

// working flow
// accumelator + currentValue = return
// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15
// 15+10=25

// real life exemple

// const userCart=[
//     {productId:12, productName:"mobile", productPrice:15000},
//     {productId:15, productName:"remote", productPrice:1500},
//     {productId:18, productName:"alexa home system", productPrice:35000},
//     {productId:20, productName:"home wire", productPrice:15000},
// ];
// const totalAmount= userCart.reduce((previousValue,currentValue)=>
// {
//     return previousValue+currentValue.productPrice;
// },0);

// console.log(totalAmount);


// <----------------sort method------------->

// exemple 1
// const arr=["prakhar","maya","gupta","satish","anchal"];
// arr.sort();
// console.log(arr);

// // note-> sort method always change the actual array
// // note-> sort methode always consider array element as string even though they may be number/string etc.
// // if array constain some of element which has first letter as capital letter then they will be sort firstly (due to ascii values)


// exemple 2
// const arr1=["ABD","Prakhar","anchal","maya", "shreyansh"];
// arr1.sort();
// console.log(arr1);

// if we want to sort number in array using sort method then 
// const num=[2,8,6,1,3,4,5,45,12,34];
// num.sort((a,b)=>
// {
//     return a-b;
// });
// console.log(num);

// let consider a=2,b=8
// a-b => greater than zero------>then b,a
// a-b=>less than zero ----->then a,b



// exemple 3 real life exemple
// const product=[
//     {productId:1,productName:"soap",productPrice:200},
//     {productId:2,productName:"water bottel",productPrice:1000},
//     {productId:3,productName:"plastic bag",productPrice:1200},
//     {productId:1,productName:"soap1",productPrice:800},
//     {productId:1,productName:"soap2",productPrice:4200},
// ];

// const lowToHigh= product.slice(0).sort((product1,product2)=>
// {
//     return product1.productPrice-product2.productPrice;
// });

// const highToLow= product.slice(0).sort((product1,product2)=>
// {
//     return product2.productPrice-product1.productPrice;
// });
// console.log(lowToHigh,highToLow);


// <-----------------------------find method------------------->
// note->find function stop itself whenever codition is satisfied 1st time and return value


let arr=["prakhar","gupta","cati","dog","maya"];

// exemple 1
// 1st way
// function islength(string)
// {
//     return string.length ===3; 

// }
// const ans= arr.find(islength);
// console.log(ans);

// 2nd way
// const ans= arr.find((string)=>
// {
//     return string.length===3;
// });
// console.log(ans);

// exemple 2 
// const user= [
//     {userName:"prakhar",userlastName:"gupta",userSalery:150},
//     {userName:"maya",userlastName:"gupta",userSalery:250},
//     {userName:"satish",userlastName:"gupta",userSalery:350},
//     {userName:"shreyansh",userlastName:"gupta",userSalery:450},
//     {userName:"srishti",userlastName:"gupta",userSalery:550},
// ];
// let value=user.find((person)=>
// {
//     return person.userSalery>250;
// })
// console.log(value);


// <---------------every method------------------------->
// note->if atleast one condition is false then it return false
// const myarr=[2,4,6,8,10,12,16,18,31];

// // function isvalid(num)
// // {
// //     return num%2==0
// // }
// // const ans=myarr.every(isvalid);
// // console.log(ans);

// // or
// const ans= myarr.every((number)=>
// {
//     return number%2==0;
// })
// console.log(ans);

// exemple 2
// const userCart=[
//     {productId:1,productName:"mobile",productPrice:5000},
//     {productId:2,productName:"television",productPrice:15000},
//     {productId:3,productName:"gun",productPrice:35000},
//     {productId:4,productName:"shirt",productPrice:500},
//     {productId:5,productName:"single molt",productPrice:15000},
//     {productId:6,productName:"bacardi",productPrice:1000},
// ]
// const ans= userCart.every((items)=>items.productPrice<=40000);
// console.log(ans);


// <------------some methode---------->
// note->if atleast one condition is satisfied then it return true

// exemple 1
// const myarr=[1,2,4,6,8,10,12,14]
// const ans= myarr.some((num)=>num%2!==0);
// console.log(ans);


// exemple 2
// const product=[
//     {productId:1,productName:"applewatch",productPrice:15000},
//     {productId:2,productName:"tshirt",productPrice:5000},
//     {productId:3,productName:"jeans",productPrice:1000},
//     {productId:4,productName:"jack denial",productPrice:15000},
//     {productId:5,productName:"chivas regal",productPrice:120000},
//     {productId:6,productName:"macbook",productPrice:150000},
//     {productId:7,productName:"mobile",productPrice:25000},
// ]
// const ans= product.some((items)=>items.productPrice<5000);
// console.log(ans);


// <------------------fill method---------------->
// note -> it is used to change value from start index to desired index
// note->it takes 3 parameter as input (value,start index,end index)
// note->fill method always change original array

// usecase 1
// const myarr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// myarr.fill(0,1,9);
// console.log(myarr);

// // usecase 2
// const myarr2= new Array(10).fill(1);
// console.log(myarr2);

// <------------------splice method------------->
// note-> this method will change original array
// parameter-> start index,delete count ,insert value
// note->it also return deleted value

const myarr=[1,2,3,4,5,6,7,8,9,12,13,45,15,16,17,18];

// delete operation
// const ans=myarr.splice(2,6);
// console.log(ans);
// console.log(myarr);

// insert operation
// myarr.splice(2,0,5);
// console.log(myarr);

// insert and delete together
myarr.splice(3,2,56,29);
console.log(myarr);