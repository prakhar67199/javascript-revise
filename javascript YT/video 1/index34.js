// previous checkpoin on object

const userMethods={
    about: function()
    {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and their address is ${this.address}`;
    },
    isage: function()
    {
        return this.age>=18;

    }
}

function userData(firstName,lastName,age,address,email)
{
    const user1={};
    user1.firstName=firstName;
    user1.lastName=lastName;
    user1.age= age;
    user1.address=address;
    user1.email=email;
    user1.ab=userMethods.about;
    user1.bc=userMethods.isage;
    return user1;
}
const person1=userData("prakhar chandra","gupta",25,"type-02/04 koyal bagh colony","prakharguptahr10@gmail.com");
const person2=userData("satish chandra","gupta",22,"type-02/04 koyal bagh colony","prakharguptahr11@gmail.com");
const person3=userData("shreyansh chandra","gupta",20,"type-02/04 koyal bagh colony","prakharhr10@gmail.com");
console.log(person1.ab());
console.log(person1.bc());
console.log(person3.ab());