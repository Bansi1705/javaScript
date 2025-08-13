//nn ss bb u primitive data type
let a=10;
let b=null;
let c=true;
let d=BigInt("567");
let e="javascript";
let i="javascript";

let f=Symbol("js");
let h=Symbol("js");
let g;

console.log(a,b,c,d,e,f,g);
console.log(e==i);
console.log(f==h);

console.log(BigInt("567")+BigInt("3"));
console.log(typeof(a));
console.log("js running");

//non primitive

const arr=[1,2,3,4,5];
const arr2=["one","two"];

console.log(arr[2]);

const user={
    username:"john",
    age:25,
    isStudent:true,
    hobbies:["Reading"]["drawing"],
    "email address":"test@test.com",
};

console.log(user.age);
console.log(user["isStudent"]);
console.log(user["email address"]);

function sum(){
    return 5+5;
}

const result=sum();
console.log(result);

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
        { name: "Sara", marks: { math: 95, science: 89 } }
      ]
    },
    {
      grade: 11,
      students: [
        { name: "Rahul", marks: { math: 78, science: 85 } },
        { name: "Meena", marks: { math: 88, science: 92 } }
      ]
    }
  ]
};

for (const cls of school.classes) {
  for (const student of cls.students) {
    const marks = Object.entries(student.marks);
    console.log("Grade " + cls.grade +" - " + student.name +" : " + marks);
  }
}

school.classes.forEach(classObj => {
  const grade = classObj.grade;
  classObj.students.forEach(student => {
    const marks = student.marks;
    console.log(
      `Grade ${grade} - ${student.name}: math = ${marks.math}, science = ${marks.science}`
    );
  });
});


// 13-8-2025 task 

const users = [
  { name: 'Alice', age: 30, active: true },
  { name: 'Bob', age: 25, active: false },
  { name: 'Charlie', age: 30, active: true },
  { name: 'David', age: 25, active: true }
];

function getActiveUsers(userlist){
   for(let i=0;i<=userlist.length;i++){
    if(userlist[i].active==true)
    {
      console.log(userlist[i].name);
    }
   }
}
getActiveUsers(users);
