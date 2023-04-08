// loops
// 1. while
// 2.for
// 3.for in
// 4.for of
// 5.do while
// break and continue


let sum=0;
let i=0;
while(i<=11)
{
    sum=sum+i;
    i++;
}
console.log(sum);

let sum1=0;
for(let i=0;i<13;i++)
{
    sum1=sum1+i;
}
console.log(sum1);

let num=0;

// in do-while loop atleast one time condiiton will be executed without condtion checking
do
{
    num=num+i;
    i++;
}while(i<=20);
console.log(num);

for(let i=0;i<25;i++)
{
    if(i==12)
    {
        break;
    }
    if(i==10)
    {
        continue;
    }
}
// if we use break keyword then immidately we came out from that loop but if we use continue keyword
// then we skip that ittiration and goes to next ittiration