// <------------------lexical scope---------------->


// const var1="chandra";
// function myapp()
// {
//     // const var1="prakhar";

//     function myprev()
//     {
//         // const var1="gupta";
//         console.log("inside me",var1);
//     }

//     console.log("hello kasia ho");
//     myprev();
// }
// myapp();


// <--------------block scope and function scope---------->

// block scope and function scope
// let ,const are block scope
// var is function scope


// {
//     let firstName="prkahar gupta";
//     const midName="chandra";
//     console.log(firstName,midName);
// }
// console.log(firstName,midName);


// {
//     var value=56;
//     console.log(value+15);

// }
// console.log(value);


// block scope-> we can aceess let,const value with in the block
// function scope-> we can access var value within the block as well as outer the block


// function myapp()
// {
//     if(true)
//     {
//         let firstname="prakhar";
//         console.log(firstname);
//     }
//     console.log(firstname);
// }
// myapp();


// function myapp()
// {
//     if(true)
//     {
//         var firstname="prakhar";
//         console.log(firstname);
//     }
//     console.log(firstname);
// }
// myapp();


// <--------------default parameter------------->
// before ES6
// function addtwo(num1,num2)
// {
//     // before ES6 we can handle undefined by a simple condition 
//     if(typeof num2 === "undefined")
//     {
//         num2=0;
//     }
//     return num1+num2;
// }

// after ES6 then we can handle undefined by a single value
// function addtwo(num1,num2=0)
// {
//     return num1+num2;
// }
// let ans=addtwo(5,8);
// console.log(ans);

// <---------------- REST Parameter---------->
function myapp(a,b,...c)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(typeof c);
}
myapp(1,2,3,5,6,9,4,2);

function summision(...num1)
{
    let total=0;
    for(let number of num1)
    {
        total=total+number;
    }
    return total;
}
const ans= summision(4,2,5,6,8,9,7,3);
console.log(ans);