
function tipCalc(bill) {
    let tip = (bill *0.2);
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.88);
console.log(totalTip)