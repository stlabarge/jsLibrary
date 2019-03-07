let arr=[1,2,3,4,5]
if(arr instanceof Array === true) {
    let revArr = arr.reverse()
    revArr.forEach(a => console.group(a))
}
