// clone the object using object.assign
const obj=
{
    key1:"value1",
    key2:"value2",
    key3:"value3",
}

// method -1
// if we create object like this then if we change some value in actual object it will be reflected in new object
// const obj2=obj;
// make obj2 object as seprate object so that if we change some value in obj then there will be no effect over obj2
const obj2={...obj};
obj.personName="prakhar";
console.log(obj);
console.log(obj2);

// method-2 by this method it will clone actual object into new object and if any change happen in actual object then there will be no effect on new object
const obj3=Object.assign({},obj);
obj.key4="chandra";
console.log(obj3);