let userName: string = "Jack";
let hasLoggedIn: boolean = true;

userName += "Mieciu";

console.log(hasLoggedIn);

let myNumber: number = 777;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3, 4];

interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {  
    first: "Bob",
    last: "Marley",
}

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

if (ids[30] === "d") {
    
}

for (let i = 0; i < 10; i++) {
    console.log(i + " " + "tu nie trza dodawać : number po let i = 0");
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4, 5, 6].map((v) => v * 10);