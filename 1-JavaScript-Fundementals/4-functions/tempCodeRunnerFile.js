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