// create your own object

// no use 
// const user=
// {
//     firstName:"prakhar",
//     lastName:"gupta",
//     age:56,
//     address:"House Number, colony, pincode, state",
//     email:"prakharguptahr10@gmail.com",
//     about: function()
//     {
//         return `${this.firstName,this.lastName} is ${this.age} years old and their address is ${this.address}`;
//     },
//     is18: function()
//     {
//         return this.age>=18;

//     }
// }

// create a function to create object

function userData(firstName,lastName,age,address,email)
{
    const user1={};
    user1.firstName=firstName;
    user1.lastName=lastName;
    user1.age= age;
    user1.address=address;
    user1.email=email;
    user1.about= function()
    {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and their address is ${this.address}`;
    };
    user1.is18=function()
    {
        return this.age>=18;

    };
    return user1;
}
const person1=userData("prakhar chandra","gupta",25,"type-02/04 koyal bagh colony","prakharguptahr10@gmail.com");
console.log(person1);
const value= person1.about();
const value1=person1.is18();
console.log(value1);
// console.log(value);