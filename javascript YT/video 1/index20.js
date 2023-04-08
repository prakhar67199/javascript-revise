// <-----------------function introduction------------->
// function HBD()
// {
//     console.log("happy birthday to you.....");
// }
// HBD();

// function sumOfTwoNumber(num1,num2)
// {
//     return num1+num2;
// }
// let returnvalue=sumOfTwoNumber(12,15);
// console.log(returnvalue);

// create function to check given number is odd or even
// function oddoreven(num)
// {
//     if(num%2==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// 


// find value in array
function find(Array1,target)
{
    for(let i=0;i<=Array1.length-1;i++)
    {
        if(Array1[i]===target)
        {
            return i;
        }
    }
    return -1;
}
const var1=[1,2,3,4,15,19];
const ans= find(var1,19);
console.log(ans);


// function expression
const baby= function(Array1,target)
{
    for(let i=0;i<=Array1.length-1;i++)
    {
        if(Array1[i]===target)
        {
            return i;
        }
    }
    return -1;
};