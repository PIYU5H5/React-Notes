// inference - sabse pehli baar jo data aap pass karoge uska data type wo khudko assign kar dega
// annotation - giving data type to the variable


let a: number = 90
a = 5
a = 10
console.log(a)


//primititve data types

// string, "Piyush"
// boolean, true false 
// number, integers 
// undefined, let h: undefined = undefined
// bigint, let g: bigint = 9102412n
// symbol  let y: symbol = Symbol("hello")

// unknown,any,never

// Array and Tuple

let arr: any[] = [5, 6, 7, 8, "Hello", "Jio", true, null, undefined];

let arr2: [number, number] = [56, 78]

let data: [{ name: string }, { name: string }, { name: string }] = [{ name: "Piyush" }, { name: "Guddue" }, { name: "xyz" }]



// enums - options

enum Role {
    ADMIN,
    SUP_ADMIN,
    USER,
}

let role: Role = Role.ADMIN;

//union

let yolo: string | number = "rahul";
yolo = 90


type Status = "pending" | "success" | "error";

let status: Status = "success"