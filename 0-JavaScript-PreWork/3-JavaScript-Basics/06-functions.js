
function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(x){
    console.log("The number you entered was: ", x);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function subtractAnyTwoNumbers(x, y){
    console.log(x - y);
}

subtractAnyTwoNumbers(4, 5);
subtractAnyTwoNumbers(6, 11);
subtractAnyTwoNumbers(5, 7);

function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);

function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Paul", "O'Connor");

function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Bella", "Persian Himalayan");