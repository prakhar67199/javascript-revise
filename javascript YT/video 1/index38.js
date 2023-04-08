
function userData(firstName,lastName,age,address,email)
{
    const user1=Object.create(userData.prototype);
    user1.firstName=firstName;
    user1.lastName=lastName;
    user1.age= age;
    user1.address=address;
    user1.email=email;
    return user1;
}
userData.prototype.about=function()
{
    return `${this.firstName} ${this.lastName} is ${this.age} years old and their address is ${this.address}`;
};
userData.prototype.isage= function()
{
    return this.age>=18;

};
userData.prototype.singh = function()
{
    return `tu mera sanam re sanam re `;
};
const person1=userData("prakhar chandra","gupta",25,"type-02/04 koyal bagh colony","prakharguptahr10@gmail.com");
const person2=userData("satish chandra","gupta",22,"type-02/04 koyal bagh colony","prakharguptahr11@gmail.com");
const person3=userData("shreyansh chandra","gupta",20,"type-02/04 koyal bagh colony","prakharhr10@gmail.com");
console.log(person1);
console.log(person1.isage());