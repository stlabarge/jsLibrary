let stWrList = document.querySelector('ul');   // this mean JS is looking into HTML to find the ul

fetch('https://swapi.co/api/people')
.then(function(response){  //  <--- then work after the fetch is resolved
    //console.log(response);

    //need to JSONafy this! 
    return response.json();
})
.then(json => getPeople(json)) // <--- calling and using a fat arrow yu dont need {} consice body. also long as it is all on OME line. if not on one line use regular funcion

function getPeople(people){
    let peeps = (people.results);

for (p of peeps) {
    // console.log(p.name);  <--- this console.logs the names
    let peepsList = document.createElement('li');
    peepsList.innerText = p.name;
    stWrList.appendChild(peepsList);
   

}

}
//.then(function(json){
    //console.log(json);  basically this is to test tht is is working or console.login'
 //   let people = json.results;
   // console.log(people);

/* .then(  (json) =>{
    getPeople(json)})

function getPeople(people){
console.log('Results: people');
} */


