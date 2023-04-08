// <----------introduction to Object Oriented JavaScript / Prototypal Inheritance------------->
// function inside object is called as method
function personalData()
{
    console.log(`name of the person is ${this.firstName} and midname is ${this.midName} and last name is ${this.lastName} and age is ${this.age}`);
}
const person1Info={
    firstName:"prakhar",
    midName:"chandra",
    lastName:"gupta",
    age:12,
    about:personalData,
};
const person2Info={
    firstName:"shreyansh",
    midName:"chandra",
    lastName:"gupta",
    age:15,
    about:personalData,
};

const person3Info={
    firstName:"satish",
    midName:"chandra",
    lastName:"gupta",
    age:18,
    about:personalData,
};
const person4Info={
    firstName:"srishti",
    midName:"chandra",
    lastName:"gupta",
    age:15,
    about:personalData,
};
person1Info.about();
person2Info.about();
person3Info.about();
person4Info.about();


// exemple 2
const person1={
    firstName:"satish",
    midName:"chandra",
    lastName:"gupta",
    age:45,
    about: function()
    {
        console.log(`person name is ${this.firstName} ${this.midName} ${this.lastName} and person age is ${this.age}`);
    }
}
person1.about();


// <------------------this keyword---------------------------->
console.log(this);
// or 
// note->this is same as window keyword
console.log(window);

function myfunc()
{
    "use strict"
    console.log(this);
}
myfunc();
// note->if we don not use (use strict) keyword then it will print window object but if we use then it will print undefined
