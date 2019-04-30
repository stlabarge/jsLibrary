 
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