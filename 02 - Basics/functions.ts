// better way to write function

function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}

let myVal = addTwo(5);

function getUpper(str: string) {
  return str.toUpperCase();
}

getUpper("megh");

function signUpUser(name: string, email: string, password: number) {}

signUpUser("megh", "nothing@nothing.nothing", 1234);

let loginUser = (name: string, isPaid: boolean) => {};

loginUser("megh", false);

// more than one type in function

// function getVal(myVal: number):string{
//   if (myVal > 5) return true;
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "hello";
};

const heros = ["spiderman", "thor", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

// void coz there is no return type

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}

// handling error use never

function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}
