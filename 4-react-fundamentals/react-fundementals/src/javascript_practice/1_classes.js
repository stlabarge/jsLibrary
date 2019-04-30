class User {
    constructor(name){
        this.name = name;
        this.type ="Trail User"
    }


//Method 1
greet () {
    console.log('Welcomeback,' + this.name);
}

//method 2

status() {
    console.log ('Current status' + this.type);
}
}

let anonDude = new User("Anonymous dude");

 //we can now use the instance and the . operator 
  // to access the 2 methods

  anonDude.greet();
  anonDude.status();
  
//Another instance of the class  

let anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

 //Another instance of the class
 var jeff = new User("Jeff");
 jeff.greet();
 jeff.status();

