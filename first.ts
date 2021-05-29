let myMoney: number = 50;
let club: string = "Barcelona";
myMoney = 10;
myMoney = 0;

const isFamous: boolean = false; // as you can't set value to a const again, that's why set the value here otherwise convert it to let
let famous: boolean;
famous = true;

//===========================================================

// function add(num1: number | string, num2: number | string) {
//   return num1 + num2;
// }

// add(3, 76);
// add("Adam", "Sand");
// add(3, "Someone");

function fullName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

const user = fullName("Ben", "Adam");

//===========================================================

function doubleItAndConsole(num1: number): void {
  const result = num1 * 2;
  console.log(result);
}

const output = doubleItAndConsole(10);
console.log("output", output);

let multiply2: (x: number, y: number) => number; // structure
multiply2 = (x, y) => x * y; // value assigned

const multiply = (x: number, y: number): number => x * y;

console.log(multiply(25, 6));

//===========================================================

const numbers: number[] = [2, 3, 4, 8, 12, 91, 34];
numbers.push(22);

const friends: string[] = ["George", "Jeff", "BIll", "Abdul"];
let megaName: string = "";
for (let i = 0; i < friends.length; i++) {
  const friend: string = friends[i];
  if (friends.length > megaName.length) {
    megaName = friend;
  }
}
console.log("Friend with the largest name", megaName);

// --- object ---
const friend: {
  name: string;
  age: number;
} = {
  name: "Samuel David",
  age: 61,
};

friend.age = 57;

// --- player structure ---
let player: {
  club: string;
  salary: number;
};

// --- player value assigned ---
player = {
  club: "Real Madrid",
  salary: 454000,
};

// --- structure and value assigned ---
let player2: {
  club: string;
  salary: number;
} = {
  club: "Real Madrid",
  salary: 454000,
};

//===========================================================

interface Player {
  club: string;
  name: string;
  salary: number;
  wife?: string;
  isPlaying: boolean;
}

const messy: Player = {
  name: "Messy",
  club: "Real Madrid",
  salary: 45000000,
  wife: "Some name",
  isPlaying: true,
};

const ronaldo: Player = {
  name: "Ronaldo",
  club: "Liverpool",
  salary: 5100000,
  isPlaying: true,
};

// function getBonus(player: { age: number }) {
//   // here player is a object and inside player, salary is a number
//   return player.age * 0.1;
// }

function getBonus(player: Player, friends: string[]) {
  // here player is a object and inside player, salary is a number
  return player.salary * 0.1;
}

// --- way 1 ---
// const poorPlayer = { age: 50, salary: 10000 };
// getBonus(poorPlayer);

// // --- way 2 ---
// getBonus({ salary: 10000 });

// // --- way 3 ---
// getBonus(messy);

const poorPlayer = { age: 50, salary: 10000 };
// getBonus(poorPlayer); // will not work
// getBonus(ronaldo);
// getBonus(messy, [1, 45]); // will not work as [1, 45] is not string
getBonus(messy, ["Sam", "Tam"]);

//===========================================================

class Person {
  name: string;
  //   #partner: string; // private writing style is JS - partner is private
  private _partner: string; // private writing style is ES6 - partner is private
  readonly fatherName: string;
  constructor(name: string, father: string) {
    this.name = name;
    this._partner = name;
    this.fatherName = father;
  }
  getName(): string {
    return this.name + "" + this._partner;
  }
}

const sam = new Person("Samuel", "David");
console.log("name ", sam.name, sam.fatherName);

const samName: string = sam.getName();
sam.name = "Ben";
console.log(sam.fatherName);
// sam.fatherName = "Ben Carson"; // fathername is readonly, that's why its unchangeable

// ************ AWESOME INFO HERE ************
// 1. public - can be accessed or changed by anyone
// 2. private - can be accessed or changed using internal things
// 3. protected - can be accessed or changed by those that will inherit
// 4. readonly - can be accessed but unchangeable

// private, protected isn't included in JS, as JS can't handle these
