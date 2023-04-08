// class keyword
// note->in javascript class are fake

class createUser
{
    constructor(firstName,lastName,age,email,address)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
        this.address=address;
    }
    about()
    {
        return ` my name is ${this.firstName} ${this.lastName} and my age is ${this.age} and email is ${this.email}`;
    }
    add()
    {
        return `my address is ${this.address}`;
    }
    is18()
    {
        return this.age>=18;

    }
    singh()
    {
        return `sanam re saname re tu mera sanam re ........`;
    }
}

// note->Class constructor createUser cannot be invoked without 'new'
const user1=new createUser("prakhar","gupta",18,"prakharguptahr42@gmail.com","hardoi");
console.log(user1);
console.log(user1.add());

// how to check prototype
console.log(Object.getPrototypeOf(user1));

