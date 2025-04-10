console.log("typescript is here still");
console.log("Hey");

// classes

// class User {
//   public email: string;
//   name: string;
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  readonly city: string = "";
  constructor(
    public email: string, public name: string
  )
     {}
}

const megh = new User("megh@megh.in", "megh");
// megh.city = "mumbai";
megh.city; // i can access but can't modify
