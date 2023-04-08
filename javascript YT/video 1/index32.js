// <-------------call apply bind -------------------->

// <---------------call method----------->
// exemple 1
function hello()
{
    console.log("hello world");
}
// we can call hello function via given below 
hello();
// or like this
hello.call();



// exemple 2
const person1={
    firstName:"prakhar chandra ",
    lastName:"gupta",
    age:45,
    about: function()
    {
        console.log(`my name is ${this.firstName} ${this.lastName} and my age is  ${this.age}`);
    }
};
const person2={
    firstName:"satish chandra ",
    lastName:"gupta",
    age:50,
};
person1.about();
// we have to pass an argument inside call method if we do not so then it will return undefined
person1.about.call(person2);



// exemple -3
const person3={
    firstName:"amit ",
    lastName:"shah",
    age:46,
    about: function(hobby,favMusic)
    {
        console.log(`my name is ${this.firstName} ${this.lastName} and my age is  ${this.age}`,hobby,favMusic);
    }
};
const person4={
    firstName:"gautam ",
    lastName:"adani",
    age:51,
};
person3.about("cricket","hipop");
// we have to pass an argument inside call method if we do not so then it will return undefined
person3.about.call(person4,"running","beatMusic");
// person3.about.apply(person3,["swiming","india"]);
// person3.about.apply(person4,["playing","china"]);


// exemple 4
function about(favdish,favcon)
{
    console.log(`user name is ${this.userName} and user uses ${this.userMobile} and user age is ${this.userAge} and also she like ${favdish} and love to travel ${favcon}`);
}
const userInfo={
    userName:"jenny",
    userMobile:"Iphone",
    userAge:45,
}
about.call(userInfo,"fish","germany");
// note-> apply method is same as call method it also internally uses call method but in apply method we send extra information in array 
about.apply(userInfo,["mash potato", "USA,CANDA"]);
// note->bind method always return a function so we can print that function
const ans=about.bind(userInfo,"boli egg","nepal");
ans();

