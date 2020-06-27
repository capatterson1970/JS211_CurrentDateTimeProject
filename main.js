// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
//console.log(new Date)


const displayDate = () => {
  let currentDate = Date();
  console.log(currentDate)
 document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertNumStr = () => {
  let number = document.getElementById("connum").value;
  number = "" + number;
  document.getElementById("convert-number").innerHTML = number;
  //typeData(number, "convert-number");
}


//Write a JavaScript program to convert a string to the number.
const convertStrNum = () => {
  let str = document.getElementById("conStr").value;
  str = parseInt(str);
  document.getElementById("convert-string").innerHTML = str;
 //typeData(str, "convert-string");
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
// const typeData = (x, y) => {
//   if(typeOf x == 'boolean'){
//     document.getElementById(y).innerHTML = x + ' is a Boolean!'}
//   else if(typeOf x == 'null')
//   document.getElementById(y).innerHTML = x + ' is a Null!'
//   else if(typeOf x == 'underfined')
//   document.getElementById(y).innerHTML = x + ' is Undefined!'
//   else if(typeOf x == 'number')
//   document.getElementById(y).innerHTML = x + ' is a Number!'
//   else if(typeOf x == 'NaN')
//   document.getElementById(y).innerHTML = x + ' is NaN!'
//   else
//   document.getElementById(y).innerHTML = x + ' is a String'
// }
  

  
// Write a JavaScript program that adds 2 numbers together.
const addNums = () => {
  let num1 = document.getElementById("add1").value;
  let num2 = document.getElementById("add2").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  document.getElementById("addNum").innerHTML = num1 + num2
}


// Write a JavaScript program that runs only when 2 things are true.
const twoTrue = () => {
  let a = document.getElementById("t1").value;
  let b = document.getElementById("t2").value;

  a = a.trim();
  b = b.trim();

  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a === 'true' && b === 'true') {
    document.getElementById("twoT").innerHTML = "Both arguments true."
  }
  else {
    document.getElementById("twoT").innerHTML = "One or both arguments are not true"
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = () => {
  let a = document.getElementById("ot1").value;
  let b = document.getElementById("ot2").value;

  a = a.trim();
  b = b.trim();

  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a === 'true' || b === 'true') {
    document.getElementById("oneT").innerHTML = "One or both arguments true."
  }
  else {
    document.getElementById("oneT").innerHTML = "No arguments are true"
  }
}


// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
