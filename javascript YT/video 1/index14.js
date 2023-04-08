// how to iterate oobjects
let person=
{
    name:"prakhar",
    rollno:56,
    address:"type-02/04 koyal bagh colony",
    "work type":"devloper",
    gender:"male",
    pincode:241001,
    company:"google"
};

// we can iterate objects useing 1). for in loop 2). object.keys

// 1). how to print key values  using for in loops

// for(let key in person)
// {
    // wrong way-> console.log(person.key);
    // use bracket notation
    // below this method we can print only values not key pair
    //  console.log(person[key]);
    // given below method can be used to print key pair values
    //1st method-> console.log(`${key} : ${person[key]}`);
    //2nd method-> console.log(key," : ",person[key]);
// }

// 2nd method-> object.keys

console.log(Object.keys(person));

for(let i of Object.keys(person))
{
    // given below method only givs object keys not key values
    // console.log(i);
    // below technique give key values
    console.log(person[i]);
}