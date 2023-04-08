// how to use class in more practical way
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

// basic child class
// class Dog extends Animal {};


// if we add some property in child class
class Dog extends Animal {
    constructor(name,age,hobby,speed)
    {
        super(name,hobby,age);
        this.speed=speed;
    }
    eat()
    {
        return `bhai kuch kha le bhuka soyega kya.....`;
    }
    run()
    {
        return `my pet ${this.name} is capable to run at ${this.speed}`;
    }
};
const mypet1= new Dog("chilgonja","licking",26,"45Kmph");
console.log(mypet1);
console.log(mypet1.eat());