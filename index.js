//nn ss bb u primitive data type
let a = 10;
let b = null;
let c = true;
let d = BigInt("567");
let e = "javascript";
let i = "javascript";

let f = Symbol("js");
let h = Symbol("js");
let g;

console.log(a, b, c, d, e, f, g);
console.log(e == i);
console.log(f == h);

console.log(BigInt("567") + BigInt("3"));
console.log(typeof a);
console.log("js running");

//non primitive

const arr = [1, 2, 3, 4, 5];
const arr2 = ["one", "two"];

console.log(arr[2]);

const user = {
  username: "john",
  age: 25,
  isStudent: true,
  hobbies: ["Reading"]["drawing"],
  "email address": "test@test.com",
};

console.log(user.age);
console.log(user["isStudent"]);
console.log(user["email address"]);

// operatores:

// let a=10;
// let b=20;
// const c=30;

a = "hello";
b = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(a + b);
console.log(typeof a + b);

let x = 5;
let y = 10;

if (x > 2 && y < 20) {
  console.log("true");
} else {
  console.log("false");
}

let isStudent = "true";
if (isStudent != false) {
  console.log("true");
}

// string methods

// let a = "UltraJavaScriptLanguage";
// let b = a.slice(9,15);
// console.log(b);

const srt = "hello world";
let length = srt.length;
let at = srt.at(5);
let charat = srt.charAt(5);
console.log(at);
console.log(charat);
console.log(length);

let text = "HELLO WORLD";
let codeat = text.charCodeAt(0);
let code = text.codePointAt(0);
console.log(codeat);
console.log(code);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

let slice = text3.slice(-4, -3);
console.log(slice);

let str = "Apple,Banana, Kiwi";
let part = str.substring(6, 13);
console.log(part);

let text4 = "5";
let padded = text4.padEnd(4, "b");
console.log(padded);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let splice = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(splice);
let myList = fruits.at(2);
fruits.copyWithin(2, 0, 2);
console.log(fruits);
fruits.length = 2;
console.log(fruits);
console.log(myList);

// array methods:

//  let arr = [1, 2, 3, 4, 5];

// let sliced = arr.slice(1, 3);
// let spliced = arr.splice(1, 3);

// console.log(sliced);
// console.log(spliced);
// console.log(arr);

// functions :

// function sum(){
//     return 5+5;
// }
// const result=sum();
// console.log(result);

// function greet()
// {
//     console.log("hello");
// }

// greet();

// const person={
//     name:"bansi",

//     greet : function(){
//         console.log("hello World");
//     }
// }

// person.greet();

// const person = {
//    name:"bansi",
//    age:17,
//    address:{
//     street:"abc",
//     city:"keshod",
//     state:123,
//    },
//    status:"student",
// };

// console.log(person.address.city);

// const array =[
//    ["alice",22,"math"],
//    ["bob",22,["History","Physics"]],
//    ["Chalie",22,"Science"],
// ]
// console.log(array[1][2][1]);

//loops:

// for(let i=0;i<5;i++)
// {
//     console.log(i);
// }

// // interview question
// let j=0;
// while(j<10){
//     console.log(j);
//     j++;
// }

// do{
//     console.log("Do block runs...",j);
// }while(j<5);

// for(let i=1;i<=10;i++)
// {
//     console.log("5 x " + i + " = " + (5 * i));
// }

// const students = [
//   { name: "Ayaan", marks: 75 },
//   { name: "Sara", marks: 92 },
//   { name: "Rahul", marks: 68 },
//   { name: "Meena", marks: 88 }
// ];

// for(let i=0;i<students.length;i++){
// if(students[i].marks>=80)
// {
//     console.log(students[i].name);
// }
// }

// for(let i=10;i>0;i--){
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   let row = "";
//   for (let j = 0; j < 3; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }
const users = [
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 25, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "David", age: 25, active: true },
];

function getActiveUsers(userlist) {
  for (let i = 0; i < userlist.length; i++) {
    if (userlist[i].active === true) {
      console.log(userlist[i].name);
    }
  }
}
getActiveUsers(users);

// const students = [
//   { name: "Ayaan", scores: { math: 78, science: 85, english: 90 } },
//   { name: "Sara",  scores: { math: 88, science: 82, english: 95 } },
//   { name: "Rahul", scores: { math: 92, science: 78, english: 88 } },
//   { name: "Meena", scores: { math: 85, science: 90, english: 85 } }
// ];
// Loop through school to print each student’s name, grade, and subject marks in a clear, formatted way.
//  The output should look like:
// Grade 10 - Ayaan: math = 82, science = 76
// Grade 10 - Sara: math = 95, science = 89
// Grade 11 - Rahul: math = 78, science = 85
// Grade 11 - Meena: math = 88, science = 92

const school = {
  name: "Sunrise High School",
  address: {
    city: "Junagadh",
    state: "Gujarat",
  },
  classes: [
    {
      grade: 10,
      students: [
        { name: "Ayaan", marks: { math: 82, science: 76 } },
        { name: "Sara", marks: { math: 95, science: 89 } },
      ],
    },
    {
      grade: 11,
      students: [
        { name: "Rahul", marks: { math: 78, science: 85 } },
        { name: "Meena", marks: { math: 88, science: 92 } },
      ],
    },
  ],
};

for (const cls of school.classes) {
  for (const student of cls.students) {
    const marks = Object.entries(student.marks);
    console.log("Grade " + cls.grade + " - " + student.name + " : " + marks);
  }
}

// given by sir
school.classes.forEach((classObj) => {
  const grade = classObj.grade;
  classObj.students.forEach((student) => {
    const marks = student.marks;
    console.log(
      `Grade ${grade} - ${student.name}: math = ${marks.math}, science = ${marks.science}`
    );
  });
});

// destructure:

// const user = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     country: "Fantasy",
//   },
// };

// let {address : {city}} = user;
// console.log(city);

// 23-08-2025 live session

// function firstLetter(str) {
//   let str2 = str.split(" ");
//   let arr = [];
//   for (let i = 0; i < str2.length; i++) {
//     let capital = str2[i].charAt(0).toUpperCase();
//     arr.push(capital);
//   }
//   let result = arr.join("");
//   console.log(result);
// }
// let str = "hello world bansi mirali";
// let a = firstLetter(str);

// function firstLetter(str) {
//   return str
//     .split(" ")
//     .map((upper) => upper.charAt(0).toUpperCase())
//     .join("");
// }

// let str = "hello world bansi mirali";
// let a = firstLetter(str);
// console.log(a);

// second task
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

let Age = input.map((a) => a.age);
console.log(Age);

let Max = Math.max(...Age);
console.log(Max);

let Min = Math.min(...Age);
console.log(Min);


let dif = Max - Min;
console.log(dif);

// third task
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];

let output = students.map((a) => {
  let total = a.scores.reduce((sum, scores) => sum + scores, 0);
  return { name: a.name, total: total };
});

let result = output.filter((a) => a.total > 250);

console.log(result);
