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