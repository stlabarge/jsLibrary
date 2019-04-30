/* a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2
Example Object : 
const testObj = {
  language : 'JavaScript',
  library : 'React'
}; */



/*
function swap(x, y) {
    return [y, x];
}

console.log(swap(2, 3));



{
  x = x + y;
  y = x - y;
  x = x - y;
  return [x, y];
}

*///


const testObj = {
    language : 'JavaScript',
    library : 'React',
};


const propSwap = (obj, propOne, propTwo) => {
    let newObj ={};

    newObj[propOne] = obj[propTwo];
    newObj[propTwo] = obj[propOne];

    return newObj;
}

let newObj = propSwap(testObj, 'language', 'library');
console.log(newObj);
console.log(testObj);