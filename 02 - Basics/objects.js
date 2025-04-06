var User = {
    name: "megh",
    age: 18,
    email: "megh@18.dev",
    isActive: true,
};
// function createUser({ name: string, isActive: boolean }) {}
// let newUser = { name: "megh", isActive: true, email: "user@user.user"};
// createUser(newUser);
function createCourse() {
    return { name: "typescript", price: 1000 };
}
function createUser(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive,
    };
}
createUser({
    name: "megh",
    age: 19,
    email: "megh@example.com",
    isActive: true,
});
var myStudent = {
    _id: "1234",
    name: "megh",
    email: "megh@megh.com",
    isActive: false,
};
myStudent.email = "student@student.stud";
var myCard = {
    cardnumber: "1234567890",
    carddate: "12/12",
    cvv: 123,
};
