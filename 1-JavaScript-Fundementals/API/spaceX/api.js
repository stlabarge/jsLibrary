/* const baseURL = 'https://api.spacexdata.com/v2/rockets'; //end point whee our data lives
const seachForm = document.querySelector('form');
const spaceShips = document.querySelector('table');


seachForm.addEventListener('submit', fetchSpace); //call back!

function fetchSpace(e){
    e.preventDefault();
    
    fetch(baseURL)  // ONLY fetches information. the () tells where its supposed t go
    .then( results => {    // promise resolver
        return results.json();   // json --> jacascript  ojbect notatiom
    })
    .then ( json => {
        displayRockets(json)
      
    })
}

function displayRockets(data){
 //   console.log(data);
//for (let x of data) {
  //  console.log(x.name);
    //console.log(x.cost_per_launch);
   // }
//}


let rockets = data.forEach(r => {


    let tabRow = document.createElement('tr');
    let tabName = document.createElement('th');
    let tabCost = document.createElement('th');


    let rocket = document.createElement('table')
    let cost= document.createElement('table'); // this will create a new element yooooooooooooo
    rocket.innerText = r.name;
    cost.innerText = r.cost_per_launch;
    spaceShips.appendChild(rocket);
    spaceShips.appendChild(cost);
})


}

//seachForm.addEventListener('submit', (e) => {


 //   e.preventDefault(); //prevents from rerendering
 //   console.log('event is working');
//} );
// call back - function as a parameter
// ascronyze programming
*/

const baseURL = 'https://api.spacexdata.com/v2/rockets';// endpoint where our data lives
​
const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');
​
searchForm.addEventListener('submit',fetchSpace);
​
function fetchSpace(e) {
  e.preventDefault();
  
  fetch(baseURL)
​
  .then( results => {
    return results.json();
  })
  .then( json => {
    displayRockets(json)
  })
}
​
function displayRockets(data){
  //console.log(data);
  // for( let x of data){
  //   console.log(x.name)
  //   console.log(x.cost_per_launch)
  // }
  let tabRow = document.createElement('tr'); 
  let tabName = document.createElement('th');
  let tabCost = document.createElement('th'); 
  tabCost.innerText = 'Cost';
  tabName.innerText = 'Name'; 
  tabRow.appendChild(tabName);
  tabRow.appendChild(tabCost);
  spaceShips.appendChild(tabRow);
  let rockets = data.forEach(r => {
    let tabRowe = document.createElement('tr'); 
    let rocket = document.createElement('td');// create a new element
    let cost = document.createElement('td');
    rocket.innerText = r.name; 
    cost.innerText = r.cost_per_launch; 
    tabRowe.appendChild(rocket);
    tabRowe.appendChild(cost);
    spaceShips.appendChild(tabRowe);
  } )
}



