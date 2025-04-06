// it's help to avoid any keyword

let score: number | string = 18;

score = 44;
score = "55";

type Users = {
  id: number;
  name: string;
};

type Admin = {
  username: string;
  id: number;
};

let myName: Users | Admin = {
  name: "megh",
  id: 123,
};

myName = {
  username: "meghb",
  id: 123,
};

function getDBId(id: number | string) {
  console.log(`DB Id is: ${id}`);
}

getDBId(123);
getDBId("123");

// array

// can't do it!
// const data: number[]= [1, 2, 3, "4"];

// either all number or all string
const data: number[] | string[] = ["1", "2", "3"];
const data2: number[] | string[] = [1, 2, 3];

// both type in array

const heros: (number | string)[] = ["spiderman", 100];


//  strict check

let pi: 3.14 = 3.14;

// pi = 3.145 // this is not allowed


let seatAllotment: "aisle" |"middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" 