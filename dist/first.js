"use strict";
let myMoney = 50;
let club = "Barcelona";
myMoney = 10;
myMoney = 0;
const isFamous = false; // as you can't set value to a const again, that's why set the value here otherwise convert it to let
let famous;
famous = true;
//===========================================================
// function add(num1: number | string, num2: number | string) {
//   return num1 + num2;
// }
// add(3, 76);
// add("Adam", "Sand");
// add(3, "Someone");
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName("Ben", "Adam");
//===========================================================
function doubleItAndConsole(num1) {
    const result = num1 * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log("output", output);
let multiply2; // structure
multiply2 = (x, y) => x * y; // value assigned
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
//===========================================================
const numbers = [2, 3, 4, 8, 12, 91, 34];
numbers.push(22);
const friends = ["George", "Jeff", "BIll", "Abdul"];
let megaName = "";
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friends.length > megaName.length) {
        megaName = friend;
    }
}
console.log("Friend with the largest name", megaName);
// --- object ---
const friend = {
    name: "Samuel David",
    age: 61,
};
friend.age = 57;
// --- player structure ---
let player;
// --- player value assigned ---
player = {
    club: "Real Madrid",
    salary: 454000,
};
// --- structure and value assigned ---
let player2 = {
    club: "Real Madrid",
    salary: 454000,
};
const messy = {
    name: "Messy",
    club: "Real Madrid",
    salary: 45000000,
    wife: "Some name",
    isPlaying: true,
};
const ronaldo = {
    name: "Ronaldo",
    club: "Liverpool",
    salary: 5100000,
    isPlaying: true,
};
// function getBonus(player: { age: number }) {
//   // here player is a object and inside player, salary is a number
//   return player.age * 0.1;
// }
function getBonus(player, friends) {
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
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + "" + this._partner;
    }
}
const sam = new Person("Samuel", "David");
console.log("name ", sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = "Ben";
console.log(sam.fatherName);
// sam.fatherName = "Ben Carson"; // fathername is readonly, that's why its unchangeable
// ************ AWESOME INFO HERE ************
// 1. public - can be accessed or changed by anyone
// 2. private - can be accessed or changed using internal things
// 3. protected - can be accessed or changed by those that will inherit
// 4. readonly - can be accessed but unchangeable
