// static method 
class person
{
    constructor(firstName,lastName,age)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    static classInfo()
    {
        return "hello gentle man";
    }
    static press="hello man";
    get fullName()
    {
        return `${this.firstName}  ${this.lastName}`;
    }
    // setName(firstName,lastName)
    // {
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }
    set fullName(fullName)
    {
        // whenever space is found then it will autmatically convert string into [prakhar,gupta]
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
const person1= new person("prakhar chandra","gupta",26);
const info= person.classInfo();
console.log(info);
console.log(person.press);