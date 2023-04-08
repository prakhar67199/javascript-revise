// nested destructuring
const user=[
    {userId:12,firstName:"prakhar",salery:"15lakh",gender:"male"},
    {userId:14,firstName:"mohit",salery:"13lakh",gender:"male"},
    {userId:23,firstName:"varsha",salery:"15lakh",gender:"female"},
];
// how to print complete array element
// const [ user1, user2, user3]=user;
// console.log(user2)


// how to destructure specific object data in array
// const [{userId,salery} , , {firstName,gender}]=user;
// console.log(userId,salery);
// console.log(firstName,gender);

// how to use variable name using nested destructuring
const [{userId:var1,salery:var2,...restProps} , , {firstName:var3,gender:var4}]=user;
console.log(var1,var2,restProps);
console.log(var3,var4);