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
}

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
//    isEmployee: true
//};



//Array object
//let people: {
//    name: string;
//    age: number;
//}[];   

let people : Person[];

//Type inference
let course: string | number = 'React - The Complete Guide';

course = 123456;



