//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives

let age: number;
age = 12;

let userName: string | string[];
userName = "Can";

let isInstructor: boolean;
isInstructor = true;

//More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

//let person: {
//    name: string;
//    age: number;
//};

//Object
person = {
  name: "Can",
  age: 29,
};

//person = {
//    isEmployee: true-
//};

//Array object
//let people: {
//    name: string;
//    age: number;
//}[];

let people: Person[];

//Type inference
let course: string | number = "React - The Complete Guide";

course = 123456;

//Functions & types

function addNumbers(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

//updatedArray[0].split("");
