let foo="paras";
console.log(foo);
function getFullName(firstName,lastName)
{
    console.log(arguments);
    let myVar="my life my rule";
    console.log(myVar);
    const fullName=firstName+ " " + lastName;
    return fullName;
}
const personName= getFullName("prakhar","gupta");
console.log(personName);
console.log("prakhar");