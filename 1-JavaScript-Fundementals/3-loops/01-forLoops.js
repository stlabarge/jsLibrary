/*********For Loops */


/*takes three expressions. a variable declaratioon. an expression to be evaluated before each iteration. a
and an exresstion to be evaluated at the end of the interation. */


    for (let i = 0; i <= 10; i++) {
        console.log(i)
    }

    for ( let i = 0; i < 21; i+=2) {
        console.log(i)
    }


    for (let i = 10; i > 0; i--) {
        console.log(i)
    }

        for (let i = 0; i >= -24; i-=2) {
        console.log(i)
    }


  let name = 'Sarah'

  for (let i = 0; i < name.length; i++){
      console.log(name[i])
  }

  //challeng: make a for loop where ou add up all the numbers from 1 to 50. should equal 1275

let sum = 0;
 for(let i = 0; i <= 50; i++){
     sum += i  // this is saying sum = sum + i
 } console.log(sum);