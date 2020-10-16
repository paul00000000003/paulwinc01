const age = 22;
const name = "Sarah";
const totalAmount = 100;

//if (name === "Bram" || name === "Sarah") { console.log("Jij krijgt een gratis biertje"); } else console.log("Jij moet voor jouw bietje betalen");


if (age >= 18 && age <= 25) {
    if (name === "Sarah" || name === "Bram") {
        console.log("Jij krijgt een gratis biertje.");
        if (totalAmount >= 100) { console.log("Naast jouw biertje krijg je gratis bitterballen, gratis nachos en een gratis fles champagne"); } else if (totalAmount > 50) { console.log("Naast jouw biertje krijg je gratis bitterballen en gratis nachos"); } else if (totalAmount > 25) { console.log("Naast jouw biertje krijg je gratis bitterballen"); } else console.log("")
    } else {
        if (totalAmount >= 100) { console.log("Jij krijgt gratis bitterballen, gratis nachos en een gratis fles champagne"); } else if (totalAmount > 50) { console.log("Jij krijgt gratis bitterballen en gratis nachos"); } else if (totalAmount > 25) { console.log("Jij krijg gratis bitterballen"); } else console.log("Jij moet voor alles betalen")
    }
} else console.log("Jij bent niet welkom");