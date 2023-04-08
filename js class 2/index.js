console.log('lets start gh');

// object creation
let rectangle={
    length:1,
    breadth:4,
    
    // method
    draw:function()
    {
        console.log('prakhar');
    }
};

// factory function
function createRectangle()
{
    let rectangle={
        length:1,
        breadth:4,
    
        draw:function()
        {
            console.log('prakhar');
        }

        // or 

        // draw()
        // {
        //     console.log('prakhar');
        // }
    };
    return rectangle;

    
}
let obj=createRectangle();


// factory function 2
function createrc(a,b)
{
    return rectangle={
        length:a,
        breadth:b,
    
        draw()
        {
            console.log('prakhar');
        }
    };
}

let obj1=createrc(56,25);

// constructor function 1
function Rectangle()
{
    this.length=10;
    this.breadth=26;
    this.draw=function()
    {
        console.log('drawing');
    }
}

let obj2=new  Rectangle();

// constructor function 2
function Rectangle(len,brea)
{
    this.length=len;
    this.breadth=brea;
    this.draw=function()
    {
        console.log('drawing');
    }
}
let obj3 =new  Rectangle(12,58);

// dynamic nature of object(how to add property dynamically)
obj3.color='blue';
// how to delete property dyanmically
delete obj3.color;
console.log(obj3);

let obj4=new Function('length', 'breadth',
`this.length=length;
this.breadth=breadth;
this.draw=function()
{
    console.log('drawing');
}`
);

let rect= new obj4(45,26);
console.log(rect);
