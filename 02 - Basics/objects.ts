const User = {
  name: "megh",
  age: 18,
  email: "megh@18.dev",
  isActive: true,
};

// function createUser({ name: string, isActive: boolean }) {}

// let newUser = { name: "megh", isActive: true, email: "user@user.user"};
// createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 1000 };
}

//* Type Aliases

type User = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};

function createUser(user: User) {
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

// READONLY and Optional

type Student = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardNumber?: number; // optional
};

let myStudent: Student = {
  _id: "1234",
  name: "megh",
  email: "megh@megh.com",
  isActive: false,
};

myStudent.email = "student@student.stud";
// myStudent._id = "2983r" // read only, you can't change

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myCard: cardDetails = {
  cardnumber: "1234567890",
  carddate: "12/12",
  cvv: 123,
};
