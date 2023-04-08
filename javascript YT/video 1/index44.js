// getters and setters

class person
{
    constructor(firstName,lastName,age)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
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
// console.log(person1.fullName());
console.log(person1.fullName);
// hoe to change name  
// 1st method
person1.setName("satish","gupta");
// 2nd method
person1.firstName="mohit";
person1,lastName="verma";
console.log(person1.fullName);