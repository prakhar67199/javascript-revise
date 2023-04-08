//<--------------------------change the style of the Element------------------------------------------------> 

const ans= document.querySelector("#main-heading");
console.log(ans.style);
ans.style.color="red";
ans.style.backgroundColor="yellow";




// <------------------------get and set the attribute----------------------------------> 
// exemple 1
const ans1= document.querySelector(".form-todo input");
console.log(ans1.getAttribute("type"));
// exemple
const ans2= document.querySelector(".nav-item a");
console.log(ans2);
console.log(ans2.getAttribute("href"));
// how to set attribute
ans2.setAttribute("href","https://www.northropgrumman.com/what-we-do/sea/?utm_source=google&utm_campaign=fy23framework&utm_medium=kw&utm_audience=list_g&utm_content=null_null&utm_format=copy&utm_code=OTH-13321&source=OTH-13321");
console.log(ans2.getAttribute("href"));