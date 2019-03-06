let weather = 75;

if(weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('no jacket needed!');
}



let myName = 'Sarah';

if(myName != 'Sarah'){
    console.log('My name is Sarah');
} else {
    console.log('Hi, what is your name?');
}


// on line 13 the != changes the answer to "hi whats your name?

let name = 'Jenny';

if('Autum' == name){
    console.log('Hello my name is', name);
} else {
    console.log('Hello what is your name', + name +'?');
}

let name = "aUTuMN"
console.log(name[0].toUpperCase())

if(name[0] == name[0].toUpperCase()){
    console.log('This is written correctly');
} else { 
    console.log ('hey this is not written correctly');

}



let name = "aUTuMN"
console.log(name[0].toUpperCase())

if(name[0] == name[0].toUpperCase()){
    console.log('This is written correctly');
} else { 
    console.log (name.substr(1).toLowerCase);

}







// ELSE IF //

let age = 24;

if(age >= 25){
    console.log('you can rent a car omg');
} else if(age >= 21) {
    console.log('you can draaaaaank!');
} else if(age >= 18){
    console.log('you can vote but you are too young for me lol');
} else {
    console.log('you are too young for me lol');
}



// SWITCH statment
/* Switch statements helps us choose between several option
*/

let friend="Bob";

switch (friend) {
    case "Autumn":
    console.log("Hey autumn, when are you going rck climbing?");
    break;
    case "Dave":
    console.log("Hey Dave how is Cooper?");
    break;
    case "Alecx":
    console.log("Hey Alecx, when are we playing DnD?");
    break;
    default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);  //string interpolation, backtiks under the escape key
}



let sweets="CupCakes"
switch (sweets){
    case "Pie":
    console.log("Pie, pie, me oh my");
    break;
    case "cake":
    console.log("Cake is great?");
    break;
    case "Icecream":
    console.log("I scream for Icecream");
    break;
    default:
    console.log(`I'm sorry, we do not have  ${sweets}.`);
}


let yep= -8;
