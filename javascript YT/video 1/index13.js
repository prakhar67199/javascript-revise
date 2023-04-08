// objects 
// it is reference type 
// array are good but not sufficient for real world data
// object store key value pairs
// object's dont have index


// how to create object
const key="email";
let person=
{
    name:"prakhar",
    rollno:56,
    address:"type-02/04 koyal bagh colony",
    "work type":"devloper"
};
// how to print full object data
console.log(person);
// how to print specific object data
console.log(person.name);

// how to add data using dot notation
person.gender="male";
console.log(person);

// bracket vs dot notation

console.log(person["address"]);
// how to add data using bracket notation
person["pincode"]=241001;
person["company"]="google";
console.log(person);

// difference between dot vs bracket notation

// 1st use case(when key value pair name is too long and have space between name)
console.log(person.pincode);
// how to print specific object data using bracket notation
console.log(person["work type"]);

// koi value ko add krna hai using bracket notation
person[key]="prakharguptahr10@gmail.com";
console.log(person);





