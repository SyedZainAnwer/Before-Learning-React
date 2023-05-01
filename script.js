//Call Back Functions
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let name = "Zain  ";
  console.log(name.toUpperCase());
});

// Promises
function addName(time, name) {
  return new Promise((resolve, reject) => {
    if (name) {
      setTimeout(() => {
        console.log(name);
        resolve();
      }, time);
    } else {
      reject("No such name");
    }
  });
}

addName(2000, "Zain")
  .then(() => addName(2000, "A"))
  .then(() => addName(2000, "B"))
  .then(() => addName(2000, "C"))
  .then(() => addName(2000, "D"))
  .catch((err) => console.log(err));

//Map
let users = [
  { firstName: "Syed", lastName: "Zain", age: 18 },
  { firstName: "Syed", lastName: "Anwer", age: 18 },
];

let singleUser = users.map((user) => {
  let fullName = user.firstName + " " + user.lastName;
  console.log(fullName);
});

//Filter
let persons = [
  { firstName: "Susan", age: 14 },
  { firstName: "Daniel", age: 16 },
  { firstName: "Bruno", age: 56 },
  { firstName: "Jacob", age: 15 },
  { firstName: "Sam", age: 64 },
  { firstName: "Dave", age: 56 },
  { firstName: "Neils", age: 65 },
];
const youngPeople = persons.filter((person) => {
  return person.age <= 15;
});
console.log(youngPeople);

//Find
const Bruno = persons.find((person) => person.firstName === "Bruno");

console.log(Bruno);

//Array Destructuring
let fruits = ["Mango", "Bananana", "Apple"];

// 1st Way to do it
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];

// 2nd Way do it
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

// Object Destructuring
const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing",
  },
};

// 1st Way to do it
// const firstName = Susan.firstName;
// const age = Susan.age;
// const hobby = Susan.hobbies.hobby1;

//2nd Way to do it
// const {
//   firstName,
//   age,
//   hobbies: { hobby1 },
// } = Susan;
// console.log(firstName, age, hobby1);

//3rd Way to do
function individualData({ firstName, age, hobbies: { hobby2 } }) {
  console.log(firstName, age, hobby2); //"Susan" 14 "singing"
}
individualData(Susan);

//Rest Operator
const { age, ...rest } = Susan;
console.log(age, rest);

// Spread Operator
const pets = ["cat", "dog", "monkey"];
const carnivorus = ["lion", "wolf", "leopard"];

const animals = [pets, carnivorus];
console.log(animals); // this will console tow arrays of pets abd carniorus

console.log(...pets, ...carnivorus); //this will console both the arrays together

let publicNames = { firstName: "John", lastName: "Doe" };
let hobbies = { hobby1: "singing", hobby2: "dancing" };
let myInfo = { ...publicNames, ...hobbies };
console.log(myInfo);

// Using Set() to get uniques values
let wildAnimals = [
  {
    name: "Lion",
    category: "carnivore",
  },
  {
    name: "dog",
    category: "pet",
  },
  {
    name: "cat",
    category: "pet",
  },
  {
    name: "wolf",
    category: "carnivore",
  },
];

let category = [...new Set(animals.map((animal)=>animal.category))];

console.log(category);


// Dynamic Oject Keys
const lionCategory = 'carnivore';
const lion = {
    baby: 'cub',
    'baby-teeth': 3,
    [lionCategory]: true,
}

console.log(lion.baby, lion['baby-teeth'], [lionCategory])