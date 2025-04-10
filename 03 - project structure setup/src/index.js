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
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; // cannot access outside the class
        this.city = "";
    }
    Object.defineProperty(User.prototype, "getRandomEmail", {
        //  getter and setter
        get: function () {
            return "random".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var megh = new User("megh@megh.in", "megh");
console.log(megh);
// megh.city = "mumbai";
// megh.city; // i can access but can't modify
console.log(megh.city);
console.log(megh.getRandomEmail);
