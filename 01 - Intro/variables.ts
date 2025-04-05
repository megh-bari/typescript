// string

let greetings: string = "Hello";
greetings.toLocaleLowerCase();

console.log(greetings);

// number

let userId: number = 1823;

userId.toFixed();
console.log(userId);

// boolean

let isLoggedIn: boolean = false

isLoggedIn.valueOf() // true or false


// any 
// Idk what type this is

let hero : any;

function getHeros(){
    return "Spiderman"
}

hero = getHeros()

// But be careful — using any removes all the safety TypeScript gives you. It’s like turning off TypeScript for that variable
//  but don't use any in any of your code
export {}