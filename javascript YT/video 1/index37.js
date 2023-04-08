function basics()
{
    value1=12;
    value2=56;
    console.log("hello world");
}

// note->in javaScript function are consider as function as well as object
// so we can add our own properties
console.log(basics);
// how to add own properties in function
basics.personName="prakhar chandra gupta";
basics.salery="but kamata hai madar jaat";
console.log(basics.personName);
console.log(basics.salery);
// name property-> by this we can see the name of our function
console.log(basics.name);
// function provide more usefull properties like= prototype
// note->only function can provide prototype property, prototype is nothing but an object
basics.prototype.abc=568;
basics.prototype.value=145;
basics.prototype.sing= function()
{
    return "my name is shila shila ki javani .........";
}
console.log(basics.prototype.abc);
console.log(basics.prototype);