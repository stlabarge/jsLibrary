// For IN LOOPS - for reading the vlue of the objects

let student = {name: "Sarah", awesome : true, degree : "JavaScript", week: 1}

for (let item in student)
{console.log(item)}
// console.log(student[item)]) square bracket notation


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
  //  console.log(cat);
    // this will be grabing the index of the array
console.log(catArray[cat])
}
// this will grab the actually names of the array


//challenge: write a for in loop that capitalizes the first letter of a students name

let studentName = 'auTuMn';
let capName;

for (let x in studentName) {
    if (x == 0) {
        capName = studentName[x].toUpperCase(); // this part is for Uppercasing the index 0. (which is the first letter of the name)
    } else{
        capName += studentName[x].toLowerCase(); // this part is for the rest of the index---> =+ for the other indexs
 
    }
}
console.log(capName);

//