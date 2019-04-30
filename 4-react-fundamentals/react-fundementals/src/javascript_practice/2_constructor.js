class User {
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User ("Sarah", "LaBarge", "sarahtoshi714@gmail.com");
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne.email);
console.log(userOne);