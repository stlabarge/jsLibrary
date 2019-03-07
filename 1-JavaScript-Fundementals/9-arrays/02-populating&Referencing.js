/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/

let list = [ 'item1', 'item2', 'item3'];
console.log(typeof list);

let list2 = ['orange', 'banana', 'oreos'];  // helps find the datatye in js
console.log(typeof list2);

let list2 = ['orange', 'banana', 'oreos']; // square brackets indicatedthe index location of item in an array
console.log(list2 [1]);

let students = ['Tony', 'Marsha', 'Rhys', 23, true, ['Ryan', 'Iesha',['Randy', 'Trevor'], 'Amira']];
// console.log(typeof students);
// console.log(students instanceof Array);
// console.log(students[2]);
console.log(students [6][1]);   //  <---- this goes into the array within the array
console.log(students [6])
//this was essing up? weird

let students = ['Tony', 'Marshall', 'Rhys', 
'Ray', 23, true, ['Ryan', 'Iesha',['Randy','Trevor'], 'Amira']];
// console.log(typeof students);
// console.log(students instanceof Array);
// console.log(students[2]);
//console.log(students[6][1]);
// console.log(students [6][2][1]) //  <--- array within a array within arrray
 // back ticks ----> string interpulation

//let myFriend = students [6][2][1]
//console.log(`Hello ${myFriend}, you look nice today`);

// let myFriend = students [6][1]
//console.log(`Hello ${myFriend}, you look nice today`);

let myFriend = students [6][3]
console.log(`Hello ${myFriend}, you look nice today`);


let food = ['Pecan Pie', 'Shrimp', "Quesadilla", 'Cheese cake', 'Hotdog'];
for (let item in food)
console.log(item)

// this si willist the item INDEX

let food = ['Pecan Pie', 'Shrimp', "Quesadilla", 'Cheese cake', 'Hotdog'];
// for (let item in food)
// console.log(food[item])   //  <--- this si will show the actual word


//let pizza = 'pizza';
//food.push(pizza);

// console.log(food);

//food.splice(1,1,'Bananas'); // <--- wentz to first index. second #---> deletes that number and then replace it with banananaaaaas
//food.splice(2,0, 'Sweet Potato Pie');
C
food.pop();   // <--- this always say empty. will will delete last item

// splice it up


let food = ['Pecan Pie', 'Shrimp', "Quesadilla", 'Cheese cake', 'Hotdog'];

food.forEach((food,number, arr) => {
    console.log(number);
    console.log(food);
    console.log(arr)
})



let movies = ['Easy A', 'Black Panther', 'Spirited Away', 'Book of Eli'];
movie.splice(4,0, 'Kill Bill')
movies.forEach((movies,number) => {
    console.log(number);
    console.log(movies);
   
})

// ^^^^^ come back to this shit. the challenge is in slack for fututere ref

