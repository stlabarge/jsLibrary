//group 1
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'b2e02612e179494c9f1f57577b582a0a';
let url; // <-- declaring

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

nav.style.display = 'none'; // <--- before you serch you don ee anything

let pageNumber = 0;

let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
 
  e.preventDefault();
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  console.log('URL:', url);

  if (startDate.value !== '') {
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
  }
  
  if (endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + endDate.value;
  }
// group 2
  fetch(url)
    .then(function(result) {
      console.log(result)
      return result.json();
    })
    .then(function(json) {
      console.log(json);
      displayResults(json);
    })
}

function displayResults(json) {


  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  let articles = json.response.docs;


  if (articles.length === 0) {
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) {
     
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');
// group 3 
      let current = articles[i];
      console.log('Current:', current);

      link.href = current.web_url;
      link.textContent = current.headline.main;

      para.textContent = 'Keywords: ';

      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
//group 4
  if (articles.length === 10) {     //<--- how many on a page
    nav.style.display = 'block';   //  <--block = 10 items on page
  } else {
    nav.style.display = 'none';
  }
}

function nextPage(e) {    //<-- event listener
  
  pageNumber++;  // <-- as we click it wil go to next page
  fetchResults(e); 
  console.log('Page Number:', pageNumber);
}

function previousPage(e) { 
 
  if (pageNumber > 0) {  //<--- will keep it from going into negative pages.
    pageNumber--;  // <-- will not allow you to go into negative pages
    fetchResults(e);
  } else {
    return;
  }
  fetchResults(e);   // <-- if pag number is is not 0. deincrement page number. fetch results
  console.log('Page:', pageNumber);
}




















////My shitty code


/* const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'MqAEUWTB5ZGLZ3F0xBi10Xx8WBTQTNhe'; //2
let url; //3









//SEARCH FORM
const searchTerm = document.querySelector('.search');


const startDate = document.querySelector('.start-date');


const endDate = document.querySelector('.end-date');


const searchForm = document.querySelector('form');


const submitBtn = document.querySelector('.submit');


//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');


const previousBtn = document.querySelector('.prev');


const nav = document.querySelector('nav');


nav.style.display = 'none'; //    <----------ask what is happening . com back to this. under Variables tab in gitbook
let pageNumber = 0;
let displayNav = false;


//RESULTS SECTION
const section = document.querySelector('section');

// event listener

searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); 
previousBtn.addEventListener('click', previousPage);
function fetchResults(e){
    console.log(e);
}

  //1
                                     //1
    function fetchResults(e) {
    e.preventDefault(); //1
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; 


    if(startDate.value !== '') {
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };
    

                                        
    fetch(url)
    .then(function(result) {
    console.log(result);
    return result.json(); //2
    }).then(function(json) {
    console.log(json); //3
    });

    }

    function displayResults(json) {
      let articles = json.response.docs;
      while (section.firstChild) {
        section.removeChild(section.firstChild); //this will clear out any articles before new searched
      }
     
     //navigation
      
        let articles = json.response.docs;
        console.log(json.response.docs);
      
        if(articles.length === 10) {
          nav.style.display = 'block'; //shows the nav display if 10 items are in the array
        } else {
          nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
        }
      
      };

    //Link Display not really working? ---> not show headlinners on the side.....
      if(articles.length === 0) {
        console.log("No results");
      } else {
        for(let i = 0; i < articles.length; i++) {
          let article = document.createElement('article');
          let heading = document.createElement('h2');
          let link = document.createElement('a'); 

          let para = document.createElement('p');   //
      let clearfix = document.createElement('div'); 
    
          let current = articles[i]; //2
          console.log("Current:", current); //3
    
          link.href = current.web_url; //4
          link.textContent = current.headline.main; //5


      para.textContent = 'Keywords: '; 

  //4
  for(let j = 0; j < current.keywords.length; j++) {
    //5
    // let span = document.createElement('span');   
    let span = document.createElement('span'); 
    //6
    span.textContent += current.keywords[j].value + ' ';   
    //7
    para.appendChild(span);
  }

  //8
  clearfix.setAttribute('class','clearfix');




         //5
         let span = document.createElement('span');   
         //6
         span.textContent += current.keywords[j].value + ' ';   
         //7
         para.appendChild(span);
       }
    
          article.appendChild(heading);
          heading.appendChild(link); //6
          article.appendChild(para);
          article.appendChild(clearfix);
        section.appendChild(article);
      }
    ;
// above is the link display. not working?? will continue to work ahead and come back




/// stopped at images....... :(






      
///////////////

                      
    function nextPage(){
    console.log("Next button clicked");
    } //5
                      
    function previousPage(){
    console.log("Next button clicked");
    } 

    */