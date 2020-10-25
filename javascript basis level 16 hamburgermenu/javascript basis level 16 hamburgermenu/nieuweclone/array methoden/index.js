let myArr = [1, 2, 3, 4, 5, 6];
let companies = ['Apple', 'Google', 'Microsoft', 'Facebook'];
console.log(companies.toString());
console.log(companies.join());
companies.pop(); //haalt laatste element van de array af
console.log("na pop " + companies.toString());
companies.push("Facebook"); // voegt element aan eind van de rij toe 
companies.shift(); // haalt element aan begin array weg 
console.log(companies);
companies.unshift('Apple'); // voeg element aan begin toe 
console.log(companies);
companies.splice(0, 3, "IBM", "Philips", "Aegon");
console.log(companies);
companies.unshift("Apple", "Google", "Microsoft");
console.log(companies);
moreCompanies = ["Ernst&Jong", "Nationale Nederlanden"];
companies = companies.concat(moreCompanies);
console.log(companies);
companies2 = companies.slice(2, 5);
console.log(companies2);
companies.sort();
console.log(companies);
companies.reverse();
console.log(companies);
let numbers = [0, 1, 2, 3, 4, 5, 6];

function optelsom(element) {
    console.log((element + 2).toString());
}
numbers.forEach(function(element) { console.log(element + 2) });
let x = companies.pop();
console.log(x);


function myFunction(value, index, array) {
    return value > 2;
}

numbers.forEach(function(element) { myFunction(element, 1, numbers) });
var mapperNumbers2 = numbers.map(n => n + 2);
console.log(mapperNumbers2);
var filtered = numbers.filter(n => n > 4);
console.log(filtered);

// reduce als methode opzoeken. Kan er voor dienen om elementen makkelijk op te tellen