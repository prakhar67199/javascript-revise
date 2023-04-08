// object destructuring
// 1st way
let band=
{
    bandname:"sitara",
    famoussong:"aa ja tu yha",
    year:2016,
    location:"kashmir"
};
const a=band.bandname;
const b=band.famoussong;
// console.log(a,b);
// 2nd way
const {bandname:var1,famoussong:var2,...restProps}=band;
console.log(var1,var2);
console.log(restProps);