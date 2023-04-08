// arrow function
// note->if arrow function if only one parameter is passed then in that case we can remove braces like exemple3
// exemple 1
const HBD= ()=>
{
    console.log("happybirthday to you....");
}

// exemple2
const sumofthreenumber=(num1,num2,num3)=>
{
    return num1+num2+num3;
}
const ans=sumofthreenumber(1,2,3);
console.log(ans);

// exemple 3
// const iseven=num=>
const iseven=(num)=>
{
    if(num%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
const ans1= iseven(15);
console.log(ans1);

// exemple 4
const firstchar=(anystring)=>
{
    return anystring[0];
}
// we can write above function in another way
// const firstchar = anystring=> anystring[0];

let var1=firstchar("prakhar");
console.log(var1);



 


// exemple 5
const findtarget=(array,target)=>
{
    for(let i=0;i<=array.length-1;i++)
    {
        if(array[i]==target)
        {
            return i;
        } 
    }
    return-1;
}
let arr=[1,2,3,5,6]
let var2= findtarget(arr,6)
console.log(var2);