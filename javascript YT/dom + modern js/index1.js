// function eventFunction()
// {
//     console.log("hello prakhar");
//     console.log("kasa ho");
// }
// document.addEventListener('click',function()
// {
//     console.log("hello prakhar");
//     console.log("kasa ho");
// });
// document.removeEventListener('click',function()
// {
//     console.log("hello prakhar");
//     console.log("kasa ho");
// });

// the event object

// const content= document.querySelector('#pcg-54');
// content.addEventListener('click',function(event) {
//     console.log(event);
// });

// the default action

// let data1 = document.querySelectorAll('a');
// // console.log(data1);
// let thirdlink=data1[2];
// // console.log(thirdlink);
// thirdlink.addEventListener('click', function(event)
// {
//     event.preventDefault();
//     console.log('hacked');
// });


// how to avoid too many events

// let myDiv= document.createElement('div');
// for(let i=0;i<100;i++)
// {
//     let newEle=document.createElement('p');
//     newEle.textContent='this is my way of doing work'+ " " + i;
//     newEle.addEventListener('click', function(event)
//     {
//         console.log('i have clicked on para');
//     })
//     myDiv.appendChild(newEle);
// }
// document.body.appendChild(myDiv);

// more optimized code-1

// let myDiv= document.createElement('div');

// function paraStatus(event)
//     {
//         console.log('i have clicked on para');
//     }
// for(let i=0;i<100;i++)
// {
//     let newEle=document.createElement('p');
//     newEle.textContent='this is my way of doing work'+ " " + i;
//     newEle.addEventListener('click',paraStatus)
//     myDiv.appendChild(newEle);
// }
// document.body.appendChild(myDiv);


// more optimized code-2

// let myDiv= document.createElement('div');

// function paraStatus(event)
//     {
//         console.log('i have clicked on para');
//     }

//     myDiv.addEventListener('click',paraStatus);
// for(let i=0;i<100;i++)
// {
//     let newEle=document.createElement('p');
//     newEle.textContent='this is my way of doing work'+ " " + i;
//     myDiv.appendChild(newEle);
// }
// document.body.appendChild(myDiv);

// more modification

// let myDiv= document.createElement('div');

//     function paraStatus(event)
//     {
//         console.log('para'+ event.target.textContent);
//     }
//     myDiv.addEventListener('click',paraStatus);
// for(let i=0;i<100;i++)
// {
//     let newEle=document.createElement('p');
//     newEle.textContent='this is my way of doing work'+ " " + i;
//     myDiv.appendChild(newEle);
// }
// document.body.appendChild(myDiv);


// ex-2

// let element=document.querySelector('#wrapper')
// element.addEventListener('click', function(event)
// {
//     console.log('span pr click kia hai' + event.target.textContent);
// })

// ex-2 modified

let element=document.querySelector('#wrapper')
element.addEventListener('click', function(event)
{
    if(event.target.nodeName === 'SPAN')
    {
        console.log('span pr click kia hai' + event.target.textContent);
    }
    
})
