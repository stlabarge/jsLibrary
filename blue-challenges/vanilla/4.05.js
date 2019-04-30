/* 
    BRONZE :: 
      Write a function that takes an object as a parameter. Return the total number of keys in the object.

      For example:
          Given: {
            gold: 'Vanilla',
            blue: 'React',
            red: 'Angular'
//           }

//         Should return 3, since there are three keys in the object.

//     SILVER ::
//       Modify the function to return the total number of characters in the objects keys.

//       For example:
//         Given: {
//           gold: 'Vanilla',
//           blue: 'React',
//           red: 'Angular'
//         }

//         Should return 11. Since there are 11 characters in the words 'gold', 'blue' and 'red'.

//       GOLD ::
//         Modify the function to alternate between adding and subtracting the length of they keys.
//         Start by getting the length of the first key, then subtract, then add, subtract, add so and and so forth.

//       For example:
//         Given: {
//           gold: 'Vanilla',
//           blue: 'React',
//           red: 'Angular'
//         }
        
//         Should return 3, since the first key is four characters(+4), the second is four characters(-4), and the third is three(+3)
// */

    



// // const driver = {
// //     chicken: 'waffles',
// //     katie: 'LAME',
// //     Sarah: 'BALLER'
// //  }
 
 
// //  function jesusTakeTheWheel(obj) {
// //     var wheels = Object.keys(obj).length;
// //     return wheels;
 
// //  }
 
// //  console.log(jesusTakeTheWheel(driver))


 const driver = {
    chicken: 'waffles',
    katie: 'LAME',
    Sarah: 'BALLER'
 }
 
 
 
 function jesusTakeTheWheel(obj) {
    var wheels = Object.keys(obj);
    var meals = wheels.join("").split("");
    var davidRules = meals.length
    return (davidRules)
 
 }
 
 console.log(jesusTakeTheWheel(driver))
  
//  function jesusTakeTheWheel(obj) {
//     var wheels = Object.keys(obj);
//     var meals = wheels.join("").split("");
//     var davidRules = meals.indexOf('');
//     return (davidRules)
 
//  }
 
//  console.log(jesusTakeTheWheel(driver))


// const driver = {
//     chicken: 'waffles',
//     katie: 'LAME',
//     Sarah: 'BALLER'
//   }
  
  
//   function jesusTakeTheWheel(obj) {
//     var wheels = Object.keys(obj).length;
//     console.log(wheels)
  
//   }
  
//   console.log(jesusTakeTheWheel(driver))