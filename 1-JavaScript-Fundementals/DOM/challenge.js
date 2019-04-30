// Print out negative nums in red
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let num3 = document.getElementById("number3");

let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let b4 = document.getElementById("btn4");
let b5 = document.getElementById("enter");


let opp;

b1.addEventListener('click', () => {
   b1.style.backgroundColor = 'pink';
   b2.style.backgroundColor = 'lightblue';
   b3.style.backgroundColor = 'lightgreen';
   b4.style.backgroundColor = 'lightbrown';
   opp = '+';
});

b2.addEventListener('click', () => {
   b2.style.backgroundColor = 'pink';
   b1.style.backgroundColor = 'lightblue';
   b3.style.backgroundColor = 'lightgreen';
   b4.style.backgroundColor = 'lightbrown';
   opp = '-';
});

b3.addEventListener('click', () => {
   b3.style.backgroundColor = 'pink';
   b1.style.backgroundColor = 'lightblue';
   b2.style.backgroundColor = 'lightgreen';
   b4.style.backgroundColor = 'lightbrown';
   opp = '*';
});

b4.addEventListener('click', () => {
   b4.style.backgroundColor = 'pink';
   b1.style.backgroundColor= 'lightblue';
   b2.style.backgroundColor = 'lightgreen';
   b3.style.backgroundColor = 'lightbrown';
   opp = '/';
});


b5.addEventListener('click', () => {
   switch (opp) {
       case '+':
           num3.innerText = Number(num1.value) + Number(num2.value);
           break;
       case '-':
           num3.innerText = Number(num1.value) - Number(num2.value);
           break;
       case '*':
           num3.innerText = Number(num1.value) * Number(num2.value);
           break;
       case '/':
           num3.innerText = Number(num1.value) / Number(num2.value);
           break;

       default:
           break;
   }
});




