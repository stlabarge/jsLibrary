let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length)

// length is different than index!

let colors = ['blue', 'red', 'green', 'orange', 'purple'];
console.log(colors);
console.log(colors.toString());
console.log(typeof colors)

let arr=[1,2,3,4,5]
if(arr instanceof Array === true) {
    let revArr = arr.reverse()
    revArr.forEach(a => console.group(a))
}
