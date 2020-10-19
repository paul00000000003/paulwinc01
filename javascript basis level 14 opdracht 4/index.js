let colors = [];
colors = ["yellow", "blue", "red", "orange"];

let i = 0;
console.log("Eerst de while loop");
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}
console.log("en nu de for loop");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);

}
console.log("en nu met de forEach method");
colors.forEach(color => console.log(color));

let getallen = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (i in getallen) { console.log(`${i} is gelijk aan ${getallen[i]}`) };