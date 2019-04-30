class User {
    constructor(name){
        this.name= name;
        this.type = "Trail User";
    }


greet(){
    console.log('Welcome back,' + this.name);
  }

status(){
    console.log('Current status: ' + this.type);
  }  
}

class TrialUser extends User{
    trialEnding() {
        console.log('Your trial is ending soon,' +  this.name + '.' +'Would you like to join?');
    }
}

let anonDude = new User("Anonymous");
  anonDude.greet();
  anonDude.status();

let trialUser = new TrialUser("Paul");
  trialUser.greet();
  trialUser.trialEnding();
  trialUser.status();