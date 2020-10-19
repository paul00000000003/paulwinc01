let naam = prompt("Welkom. Wat is jouw naam : ");
alert("Hey " + naam);

let mingetal = prompt("Geef het kleinste getal van de range aan waarvoor u wilt raden");
let maxgetal = prompt("Geef het grootste getal van de range aan waarvoor u wilt raden");

let getal = prompt("Voer een getal tussen de " + mingetal + " en " + maxgetal + " in om te beginnen met raden (0 breekt programma af). Je mag 5 keer raden ");
let fractie = Math.random();
let range = maxgetal - mingetal;
let deel1 = fractie * range;
let getal2 = deel1;
getal2 += parseInt(mingetal);
if (getal2 - Math.floor(getal2) >= 0.5)
    getal2 = Math.ceil(getal2);
else getal2 = Math.floor(getal2);

let aantalKeerGeraden = 1;
if (Math.floor(getal) === Math.floor(getal2)) { alert("Gefeliciteerd. Je hebt gewonnen"); }


let geraden = "N";
while (geraden == "N" && (aantalKeerGeraden <= 5)) {
    if (getal === 0) { alert("U breekt het programma af. Tot de volgende keer"); } else {
        alert("Dat is niet correct");
        if (aantalKeerGeraden == 5)
            alert("U heeft 5 keer geraden en mag niet meer. Dag " + naam);
        else {
            let getal = prompt("Voer een getal tussen de 1 en 25 in om te beginnen met raden (0 breekt programma af) ");
            if (Math.floor(getal) === Math.floor(getal2)) {
                alert("Gefeliciteerd. Je hebt gewonnen.");
                geraden = "J";
            }
        }
        aantalKeerGeraden++;
    }
}