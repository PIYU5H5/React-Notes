"use strict";
// inference - sabse pehli baar jo data aap pass karoge uska data type wo khudko assign kar dega
// annotation - giving data type to the variable
Object.defineProperty(exports, "__esModule", { value: true });
let a = 90;
a = 5;
a = 10;
console.log(a);
//primititve data types
// string, "Piyush"
// boolean, true false 
// number, integers 
// undefined, let h: undefined = undefined
// bigint, let g: bigint = 9102412n
// symbol  let y: symbol = Symbol("hello")
// unknown,any,never
// Array and Tuple
let arr = [5, 6, 7, 8, "Hello", "Jio", true, null, undefined];
let arr2 = [56, 78];
let data = [{ name: "Piyush" }, { name: "Guddue" }, { name: "xyz" }];
// enums - options
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.ADMIN;
//union
let yolo = "rahul";
yolo = 90;
let status = "success";
//# sourceMappingURL=index.js.map