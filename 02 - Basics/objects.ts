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
    name: string,
    age: number,
    email: string,
    isActive: boolean
}

function createUser(user: User) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}

createUser({name: "megh", age: 19, email: "megh@example.com", isActive: true});
