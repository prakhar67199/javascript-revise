function UserData(firstName,lastName,age,address,email)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age= age;
    this.address=address;
    this.email=email;
    
}
UserData.prototype.about=function()
{
    return `${this.firstName} ${this.lastName} is ${this.age} years old and their address is ${this.address}`;
};
UserData.prototype.isage= function()
{
    return this.age>=18;

};
UserData.prototype.singh = function()
{
    return `tu mera sanam re sanam re `;
};
const person1=new UserData("prakhar chandra","gupta",25,"type-02/04 koyal bagh colony","prakharguptahr10@gmail.com");
const person2=new UserData("satish chandra","gupta",22,"type-02/04 koyal bagh colony","prakharguptahr11@gmail.com");
const person3=new UserData("shreyansh chandra","gupta",20,"type-02/04 koyal bagh colony","prakharhr10@gmail.com");
console.log(person1);
console.log(person1.isage());

for(let key in person1)
{
    if(person1.hasOwnProperty(key))
    {
        console.log(key);
    }
}