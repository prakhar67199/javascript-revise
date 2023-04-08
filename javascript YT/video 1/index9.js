// if else condition
// nested if else condition
// if elseif condition
// switch case condition
let age=15;
if(age>19)
{
    console.log("playgame");
}
else
{
    console.log("not applicable");
}

let num=12;
let sum=num%3;
if(sum===0)
{
    console.log("yes");
}
else{
    console.log("no");
}

// <---------truthy and falsy values-------->
// falsy values

// 1. false
// 2. null
// 3. ""
// 4. undefined
// 5. 0

let var1;
if(var1)
{
    console.log("prakhar");

}
else
{
    console.log("gupta");
}

// logical operator always returns value 0 or 1
// if value is 0 then it will consider as false and remains value {value may be +ve,-ve} will consider as truth


// <-----ternery operator/conditioncal operator ------->
let var2=8;
let drink= var2>=15 ? "coffee" : "milk";
console.log(drink);

// <------AND ,OR operator------->
let var3=45;
let var4="prakhar";

if(var4[0]=="p" && var3>40)
{
    console.log("yes you are right");
}
else{
    console.log("no you are right ");
}

if(var4[3]=="k" || var3<20)
{
    console.log("yes done");
}
else
{
    console.log("not done");
}

// how to take input from user
// NOTE-> for taking input from user we use "prompt" function but always rember that promt return the answer in string format
let var6;
let userdata=+prompt("enter the number");
if(userdata>15)
{
    console.log("you are very close to answer");
}
else
{
    if(userdata<8)
    {
        console.log("you are not correct");
    }
    else
    {
        console.log("you entered wring number");
    }
}