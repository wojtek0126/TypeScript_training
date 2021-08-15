// First day of TypeScript. 
// With it dev can restrict data types etc. for variables, arrays, objects and so on.
// It is keeping an eye on the code on the go and throw errors wherever orphan data appears,
// It will prevent mix of data types and these bugs

// declare data types including regex
let userName: string = "Jack";
let hasLoggedIn: boolean = true;

userName += "Szczobrzążczyńskikiewiszczyński";

console.log(hasLoggedIn);

let myNumber: number = 777;
let myRegex: RegExp = /foo/;

// string[] and usage
const names: string[] = userName.split(" ");

// Array<> and usage
const myValues: Array<number> = [1, 2, 3, 4];

// interface and usage
interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {  
    first: "Bob",
    last: "Marley",
}

// Record<> and usage
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

if (ids[30] === "d") {
    
}

// for loop, no need to declare let i
for (let i = 0; i < 10; i++) {
    console.log(i + " " + "tu nie trza dodawać : number po let i = 0");
}

//forEach loop no need to declare number
[1, 2, 3].forEach((v) => console.log(v));

//number[] for map function restricts numbers only
const out: number[] = [4, 5, 6].map((v) => v * 10);

// map function without number[] can return string too
const out2 = [4, 5, 6].map((v) => `${v * 10}`);