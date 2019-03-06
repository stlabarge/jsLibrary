/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/
Collapse




function hi() {
    console.log('Hi!');
}

hi();     //calling it'


function say() {
    console.log('dang!')
}

say();

/////
function hi() {
    return ('Hi!');
}

hi();     

console.log(hi());  //   <---  use this when usinf return in the code above


for (let i = 0; i <= 10; i++) {
    console.log(i)
}


function hi() {
    for(let x = 0; x<= 10; x++){
        console.log(x);
    }
}    

hi();


////////////////////////////

function caller() {
    let arr = ['this', 'is', 'really', 'cool']; 

    for(let x of arr){
        console.log(x);

    }
}

caller();


/**************************
PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/


function pet(animal){
    console.log(`I have a ${animal} for a pet.`);
}

pet('cat');

function name(first, last) {
    console.log(`Hello, my name is ${first} ${last}.`)
}

name('Sarah', 'LaBarge');
name('Olivia', 'LaBarge');   // you can call this parameter multiple times 

/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


will  not get hoisted unlike other fuctions ad expressions


Concice
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}
*/

function coffee(){
    console.log('Coffee is good!');
}

let coffee = () => {
    console.log('I love coffee!!!');
}


coffee(); //this will call eitherfuction

let cats = (kitten,puppy) => {
    console.log(`I have ${kitten} cats and ${puppy} dogs`);
}

cats(2,4);
 
let apples = x => console.log(`There are ${x} apples.`);  //concise has implied return
apples(10);

let apples = (x) => {console.log(`There are ${x} apples.`)} // block will not have an implied return if more than one line
apples(10);



/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

function captializeName(name) {
    let capName = '';
    for (let l in name){
      if (l == 0){
        capName += name[l].toUpperCase();
      } else {
        capName += name[l].toLowerCase();
      }
    }
 
    return capName
  }

const myNameIs =  captializeName('Autumn');

console.log(`${myNameIs} how are you doing?`);

/////////////////
 x = x *= 1.25

function tipCalc(bill) {
    let tip = (bill *0.2);
    return tip.toFixed(2);
}

let tipper = bill => (bill *0.2).toFixed(2)  //concise

let totalTip = tipCalc(19.88);
console.log(totalTip)
















