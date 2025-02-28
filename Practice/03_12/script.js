import Trouser from "./Trouser.js";
import CargoTrouser from "./CargoTrouser.js";

let jeans = new Trouser(
    30,
    30,
    "cotton",
    "blue",
    true
);

let cargoTrousers = new CargoTrouser(
    30,
    30,
    "synthetic",
    "camouflage",
    true,
    6
);

console.log("The new jeans object before:", jeans);
console.log(jeans.zipperOpen);
jeans.openZipper(false);
console.log("The new jeans object after:", jeans);
console.log(jeans.zipperOpen);

console.log("The new cargoTrouser object from extended class:", cargoTrousers);
console.log(cargoTrousers.numberOfPockets);

// Class object - properties and methods are not directly modifiable from DevTools