/*alert('Im.working. Im js. Im fuck.');
console.log('Im.working. Im js. Im fuck.');

var a = 221;
var b = a - 5; 

a = 4;
console.log(b, a);
*/

/*String
const what = "Nicolas";
console.log(what);
*/

//Boolean
/*const what = true;
console.log(what);
*/

//float
/*const what = 1.04;
console.log(what);
*/

//Array
/*const dayOfweek = ["Mon","Tue","Wed","Thu","Fri"];
console.log(dayOfweek);

for(var i = 0; i<dayOfweek.length; i++){
  console.log(dayOfweek[i]);
}
*/
/*
const nicoInfo = {
  name:"Nico",
  age:33,
  gender:"Male",
  isHandsome:true,
  favFood:["Kimchi", "Pizza", "chicken"],
  favFod:[{name : "Kimchi", fatty : false},
  {name : "cheese burger", fatty : true}]
};

nicoInfo.gender = "Female";

console.log(nicoInfo.gender);
console.log(nicoInfo.favFood[0]);

console.log(nicoInfo.favFod[1].name);
*/

//console.log(alert);

/*
function sayHello2(asd){
  console.log(asd + "hi")
}

var sayHello = function(asd){
  console.log(asd, "Hello");
}

sayHello2("Nicolas");

function sayHello3(name, age){
  return `Hello ${name} you are ${age} years`;
}

const greet = sayHello3('nicolas', 25);

console.log(greet);

const calculator = {
  plus:function(a,b){
    return a + b;
  }
}

const plus = calculator.plus(5,7);
console.log(plus);
*/
/*
const title = document.getElementById("title");
title.innerHTML = "Hi From JS";
title.style.color = "red";
console.dir(title);
document.title = "Hi";

const ti = document.querySelector("#title");
console.log(ti);

resize
submit

function handleResize(){
  c oin
}

window.
*/
/*
let test = [1,2,3,4,[5]];
console.log(test[4][0]);

const nicoInfo = {
  name:"Nico",
  age:33,
  gender:"Male",
  test = {
    hi:"hi"
  }
  };
  console.log(nicoInfo.test.hi);
  */


//const title = document.
//console.dir(title);
//title.innerHTML = "Hello";

//title.style.color = "red";

//document.querySelector('body').style.backgroundColor="black";

//

const header = document.createElement('h2'); 
let textNode = document.createTextNode('Hello');
header.appendChild(textNode);
document.body.appendChild(header);

const superEventHandler = {
  handleResize:function(){
    header.innerHTML="You just resized!";
    header.style.color="yellow";
  },
  handleMouseOver:function(){
    header.innerHTML="The mouse is here!";
    header.style.color="red";
  },
  handleMouseOut:function(){
    header.innerHTML="The mouse is gone!";
    header.style.color="blue";
  },
  handleRightClick:function(){
    header.innerHTML="The mouse is here!";
    header.style.color="green";
  },
  superEventHandler:function(){
    header.addEventListener("resize", handleResize);
    header.addEventListener("mouseover", handleMouseOver);
    header.addEventListener("mouseout", handleMouseOut);
    header.addEventListener("contextmenu", handleRightClick);
  }
};

superEventHandler.superEventHandler();