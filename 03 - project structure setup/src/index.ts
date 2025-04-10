console.log("typescript is here still");
console.log("Hey");

// classes

class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const megh = new User("megh@megh.in", "megh");
megh.city = "mumbai";
