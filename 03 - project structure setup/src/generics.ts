// <> - define or use generics in TypeScript

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

// Generics are like reusable boxes — you can put anything inside, and TypeScript remembers what’s inside without losing the label!
function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree("megh");

// short way to write

function identityFour<T>(val: T): T {
  return val;
}

identityFour(true);

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "Bisleri", type: 1 });

// arrays in generics
function getSearchProducrs<T>(products: T[]): T {
  // do some db operation
  const myIndex = 3;
  return products[myIndex];
}

// in arrow function using generics
const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 2;
  return products[myIndex];
};

// Using Type Parameters in Generic Constraints

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, {});

// class type in generics

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}


class Sellable<T>{
  public cart: T[]=[]

  addToCart(products: T){
    this.cart.push(products)
  }
}