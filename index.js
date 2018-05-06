// JavaScript File
let lastAction; //add, sub, multi, division
function setAction(action){
    lastAction = action;
}

const input = document.createElement("input");
input.style.width = "240px";
input.style.height = "30px";
document.body.appendChild(input);


const buttons = [
    {title:"c", handler: function(){}},
    {title:"+/-", handler: function(){}},
    {title:"%", handler: function(){}},
    {title:"/", handler: () => setAction("division")},
    {title:"7", handler: clickOnDigit},
    {title:"8", handler: clickOnDigit},
    {title:"9", handler: clickOnDigit},
    {title:"*", handler: () => setAction("division")},
    {title:"4", handler: clickOnDigit},
    {title:"5", handler: clickOnDigit},
    {title:"6", handler: clickOnDigit},
    {title:"-", handler: () => setAction("division")},
    {title:"1", handler: clickOnDigit},
    {title:"2", handler: clickOnDigit},
    {title:"3", handler: clickOnDigit},
    {title:"+", handler: function(){}},
    {title:"0", handler: clickOnDigit},
    {title:",", handler: function(){}},
    {title:"=", handler: function(){}},
    ];
let div;



for(let i = 0; i < buttons.length; i++) {
    if(i % 4 === 0) {
        div = document.createElement("div");
        document.body.appendChild(div);
    }
    const button = document.createElement('button');
    button.textContent = buttons[i].title;
    button.onclick = buttons[i].handler.bind(buttons[i]);
    button.style.width = "60px";
    button.style.height = "35px";
    div.appendChild(button);
}

function clickOnDigit() {
    console.log(this.title);
}



// let func

// func = function(){
//     console.log(2);
// }

// func = () => {
//     console.log(2);
// }