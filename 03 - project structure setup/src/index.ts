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
  // private _courseCount = 1; // cannot access outside the class
  protected _courseCount = 1; // use in same class or any class which inherits

  readonly city: string = "";
  constructor(public email: string, public name: string) {}
  //  getter and setter
  get getRandomEmail(): string {
    return `random${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }

    this._courseCount = courseNum;
  }
}

// inherits
class SubUser extends User {
  isFamily:  boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }
}

const megh = new User("megh@megh.in", "megh");

console.log(megh);
// megh.city = "mumbai";
// megh.city; // i can access but can't modify

console.log(megh.city);

console.log(megh.getRandomEmail);

