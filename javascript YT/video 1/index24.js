// parameter destructuring
// it is mostly used in object ,ract


// let person=
// {
//     firstName:"prakhar",
//     lastName:"gupta",
//     age:56
// };


// 1st way
// function permission(obj)
// {
//     console.log(obj.firstName);
//     console.log(obj.lastName);
//     console.log(obj.age);
//     console.log(obj.midName);
// }

// 2nd way
// function permission({firstName,lastName,age})
// {
//     console.log(firstName);
//     console.log(lastName);
//     console.log(age);
// }

// permission(person);


// <------------------------callback function--------------->
// function func(a)
// {
//     console.log(a);
// }
// function myapp()
// {
//     console.log("inside me there is lot of improvmnet");
// }
// func(myapp);

// note->in callback we can send function as input parameter in any function that is known as callback function
// below this method it is more perferable method


// function sumof(callback)
// {
//     console.log("prakhar gupta");
//     callback("mayagupta");
// }

// function subof(names)
// {
//     console.log("you are doing callback functionality");
//     console.log(`my name is ${names}`);
// }
// sumof(subof);

// <-------------function returning function-------->
// note-> whenever function return function then it is called as function returning function
// we can store the function in variable and that variable wii act as a function


function nams()
{
    function lastName()
    {
        console.log("chandra");
    }

    console.log("prakhar gupta");
    return lastName;
}
const var1= nams();
// console.log(var1);
// console.log(typeof var1);
var1();

// note->when ever we accept input as function[eg.->callback function] or return as function[eg->function returning function] then it will known as higher order function.