// hoisting
// note->in javascript we can make function call before declaration
// but it will be done in function declaration case
// .it can not be done in function expression,arrow function


hello();

function hello()
{
    console.log("happy birthday to you......");
}

// if we print variable before its creation then in that case only var type variable return undefined and remaining type of variable(let,const) gives an error
console.log(var1);
var var1="hello";


// function inside function
function calci()
{
    const add=(num1,num2)=>
    {
        return num1+num2;
    }

    const sub=(num1,num2)=>
    {
        return num2-num1;
    }

    const mul= function(num1,num2)
    {
        return num1*num2;
    }

    const mod=(num1,num2)=>
    {
        return num1%num2;
    }

    const div=(num1,num2)=>
    {
        return num1/num2;
    }
    console.log("math work completed");
    console.log(add(2,6));
    console.log(mul(2,6));
}
calci();
