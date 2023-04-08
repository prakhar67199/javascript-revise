// more practice over class

class Animal
{
    constructor(name,hobby,age)
    {
        this.name=name;
        this.age=age;
        this.hobby=hobby;
    }
    eat()
    {
        return ` ${this.name} loves to eat nonveg`;
    }
    isfriendly()
    {
        return `name of my pet is ${this.name} and he loves ${this.hobby}`;
    }
    iscute()
    {
        return this.age<=15;
    }
}
const mypet1= new Animal("raja","running",12);
console.log(mypet1);
console.log(mypet1.isfriendly());

// make a class over dog

class dog{
    constructor(name,hobby,age)
    {
        this.name=name;
        this.age=age;
        this.hobby=hobby;
    }

    eat()
    {
        return ` ${this.name} loves to eat nonveg`;
    }
    isfriendly()
    {
        return `name of my pet is ${this.name} and he loves ${this.hobby}`;
    }
    iscute()
    {
        return this.age<=15;
    }
}
const mypet2=new dog("lodu","barking",16);
console.log(mypet2);
console.log(mypet2.isfriendly());
// cat class......