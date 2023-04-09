// performance (how to write fast and efficient code )

// adding 100 para ex-1
// let t3= performance.now();
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent= "hello this is me"+i;
//     document.body.appendChild(newElement);
// }
// let t4= performance.now();
// console.log("first program take" + (t4-t3) +"ms");


// more modification 
// let t1 = performance.now()
// let myDiv= document.createElement('div');
// for(let i=1;i<=100;i++)
// {
//     let element = document.createElement('p');
//     element.textContent = 'kasa ho sb mst hai '+ i
//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// let t2=performance.now();
// console.log("this is taking " + (t2-t1) + "ms");
// if((t2-t1)>(t4-t3))
// {
//     console.log("first progrm is faster");
// }
// else{
//     console.log("second program is faster");
// }


// <----------document fragment------------->
let frag = document.createDocumentFragment();
for(let i=1;i<=100;i++)
{
    let newElement = document.createElement('p');
    newElement.textContent="kuch to pdh lo paper aa gya hai makkar "+i;
    frag.appendChild(newElement);
}
document.body.appendChild(frag); // 1 reflow,1 repaint



// <---------------Event Lopp------------------------>
console.log("hellow world");
Element.addEventListener('click', function()
{
    console.log("tumna screen prr click kiya kya ");
});
console.log("bhhag dk boss");