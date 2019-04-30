/*

Given 2 arrays:

const arrOne = [ 10, 20 , 30 , 40 , 50, 70 ];
const arrTwo = [ 5, 3, 2, 5 ];

Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them. If not of type array, return string message. 

If the first array has more values than the second, return an array with the same number of values as the shorter array.

let arrOne = [ 10, 20 , 30 , 40 , 50, 70 ];
    let arrTwo = [ 5, 3, 2, 5 ];


function multi(){
   
    for (x in arrOne){
        let x = [0];

    }

}

console.log(multi)

*/


let arrOne = [10, 20, 30, 40, 50, 60, 70];
let arrTwo = [2, 4, 6, 8, 10];

const empty = [];
contr str = 'hello';

const arrMultiplier = (arr1, arr2) => {

    let newArr = [];

    for ( let i = 0; i < arrOne.length; i++ ) {
        

        if (arrTwo [i] == undefined) {
            console.log("skipping", arrOne[i]);

        } else {
            newArr.push(arrOne[i * arrTwo[i]);

        }
    }
    return newArr;
}

let product = arrMultiplier();

console.log(product);


// I feel fucking dumb