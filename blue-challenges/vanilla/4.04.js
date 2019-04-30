/*
  BRONZE ::
    Create a function that takes in the string

    const stringCheck = '  Welcome to eleven fifty   ';

    The function should remove extra whitespace before or after 
    the characters is trimmed, and should change the string so that the 
    the first 'e' and 'f' in 'eleven fifty' is capitalized. 

  SILVER ::
    Add typechecking and make sure the string parameter is a string.
    Also check to make sure the length is greater than zero, but less than
    30. If the string is invalid, return a message for an invalid argument.

  GOLD ::
    Create a callback function that prints a parameter to the console.
    Add a second parameter to the string function from Silver and Bronze for a callback function.
    Instead of returning the data, pass it callback function, and log it to the console.
*/

//below this is FUCKED RICKY

const stringCheck = '  Welcome to eleven fifty   ';
    console.log(stringCheck.trim());

  function word1150(words){
    const stringCheck.trim() = '  Welcome to eleven fifty   ';
    console.log(stringCheck.trim());
 
   for (let l in stringCheck){
     if (l == 13 && l == 19){
       stringCheck += words[l].toUpppercase();
     } else {
      stringCheck != words[l].toLowerCase();
     }
   }
 
   return word115
 
 }

 console.log(word1150)


 //below is a solution to the problem


 /*
  BRONZE ::
    Create a function that takes in the string

    const stringCheck = '  Welcome to eleven fifty   ';

    The function should remove extra whitespace before or after 
    the characters is trimmed, and should change the string so that the 
    the first 'e' and 'f' in 'eleven fifty' is capitalized. 

  SILVER ::
    Add typechecking and make sure the string parameter is a string.
    Also check to make sure the length is greater than zero, but less than
    30. If the string is invalid, return a message for an invalid argument.

  GOLD ::
    Create a callback function that prints a parameter to the console.
    Add a second parameter to the string function from Silver and Bronze for a callback function.
    Instead of returning the data, pass it the callback function, and log it to the console.
*/

const stringCheck = '  Welcome to eleven fifty   ';

// function stringFixer(string) {

//     words = string.split(" ")
//     final = []
 
//     if (typeof (string) == 'string' && string.length > 0 && string.length < 30) {
 
//         for (word in words) {
 
//             var testup = parseInt(word) + 1;
//             var testdown = parseInt(word) - 1;
 
//             if (words[word] === 'eleven' && words[testup] == 'fifty') {
//                 final.push('Eleven');
//             }
 
//             else if (words[word] === 'fifty' && words[testdown] === 'eleven') {
//                 final.push('Fifty');
//             }
 
//             else if (words[word] != '') {
//                 final.push(words[word]);
//             }
//         }
 
//         returnval = final.join(' ');
//         return (returnval);
//     }
 
//     else{
//         console.log("Please make sure the parameter you give this function is a string that has a length greater than zero and less than 30.")
//     }
 
//  }

function strChk (str) {
    str = stringCheck.trim();
    str = str.toLowerCase().split(' ');
    for (let i = 2; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    str = str.join(' ');
 
    if (typeof(str) === 'string' && str.length > 0 && str.length < 30) {
        console.log('This is valid!');
    } else {
        console.log('Invalid Argument');
    }
 
    return(str);
 
 }
 
//  let fStr = strChk();
//  console.log(fStr);

const logger = data => {
    console.log(data);
}

const gold = (str, callback) => {
    if (typeof str !== 'string' || str.length < 1 || str.length > 30) {
      callback('Invalid argument');
      return
    };
  
    let formattedString = str.replace('eleven fifty', 'Eleven Fifty').trim()
    callback(formattedString);
  };
  
gold(stringCheck, logger);

// Method Chaining Test

let newString = '    word word word word word word word word word word word word word word word    '

let testString = newString.trim().split(' ');
console.log(testString);

