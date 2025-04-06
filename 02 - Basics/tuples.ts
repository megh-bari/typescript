// const user: (string | number)[] = ["megh", 1];

// using tuples

let tUser: [string, number, boolean];

tUser = ["hc", 1, true]; // here you can't reverse order, order matters

let rgb: [number, number, number];

rgb = [255, 123, 112];

type newUser = [number, string];

const newUser: newUser = [11, "megh"];

newUser[1] = "hehe";
newUser[0] = 1;

newUser.push("hey")

// why this happend: https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
