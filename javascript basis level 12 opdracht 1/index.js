let name = "Paul";
console.log("Mijn naam is " + name);

let getal1 = 4;
let getal2 = 4;

console.log("Optellen         : " + getal1.toString() + " + " + getal2.toString() + " is " + (getal1 + getal2).toString());
getal1 = "4";
getal2 = "4";
console.log("Optellen strings : " + getal1 + " + " + getal2 + " is " + (getal1 + getal2));
getal1 = 4;
getal2 = 4;

console.log("Aftrekken        : " + getal1.toString() + " - " + getal2.toString() + " is " + (getal1 - getal2).toString());
console.log("Vermenigvuldigen : " + getal1.toString() + " * " + getal2.toString() + " is " + (getal1 * getal2).toString());
console.log("Delen            : " + getal1.toString() + " / " + getal2.toString() + " is " + (getal1 / getal2).toString());
console.log("Modulo           : " + getal1.toString() + " mod " + getal2.toString() + " is " + (getal1 % getal2).toString());

let age = 53;
console.log("Mijn leeftijd " + age.toString() + " is van het datatype " + typeof(age));
age = "53";
console.log("Als ik dit naar een string om schrijf wordt het datatype " + typeof(age));