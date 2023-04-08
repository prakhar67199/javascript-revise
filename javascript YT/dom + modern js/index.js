// <----------how to add element(html tag)------------>

// let value1=document.querySelector('.pcg-56');
// console.log(value1);
// let ele=document.createElement('h2');
// console.log(ele);
// value1.appendChild(ele);
// console.log(value1);

// <-------how to insert text in html tag---------->
// smart way of adding text
// let value1=document.querySelector('.pcg-56');
// console.log(value1);
// let ele= document.createElement('h3');
// ele.textContent="satish gupta";
// value1.appendChild(ele);
// console.log(value1);

// basic way
// let value2=document.querySelector(".pcg-56");
// let ele1=document.createElement('h4');
// let value3= document.createTextNode('don ko pakdna muskil hi ni namumkin hai');
// ele1.appendChild(value3);
// value2.appendChild(ele1);
// console.log(value2);

// <-------how to add data at specific position------------>

// let value4=document.querySelector(".pcg-56");
// let ele2=document.createElement('p');
// ele2.textContent="shreyansh gupta";
// value4.insertAdjacentElement("afterend",ele2);
// console.log(value4);

// <---------how to remove element (html tag)----------->

let child= document.querySelector(".name");
let parent1= document.querySelector(".pcg-56");
// console.log(parent1);
parent1.removeChild(child);
console.log(parent1);

// <---------add css using javascipt---------->

// this  method always apply single css property at a time
// let value5=document.querySelector(".pcg-56");
// value5.style.color="red";
// value5.style.backgroundColor="greenyellow";
// value5.style.fontSize="35px";
// value5.style.fontWeight="600";


// "cssText" method can do multiple changes at a time
let value6=document.querySelector(".pcg-56");
value6.style.cssText='color:green; background-color:aqua;font-size:35px; font-weight:200;';