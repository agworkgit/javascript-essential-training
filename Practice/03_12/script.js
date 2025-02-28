import Trouser from "./Trouser.js";

let jeans = new Trouser(
    30,
    30,
    "cotton",
    "blue",
    true
);

console.log("This the first Trouser object:", jeans);
console.log(jeans.zipperOpen);
jeans.openZipper(false);
console.log("This the first Trouser object:", jeans);
console.log(jeans.zipperOpen);

// Class object - properties and methods are not directly modifiable from DevTools