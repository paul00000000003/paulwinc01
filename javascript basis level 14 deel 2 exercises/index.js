// Inleiding function expression en function declaration
function str(NoOfChildren, PartnerName, location, jobtitle) {
    return ("You will be a " + jobtitle +
        " in " + location + " married to " + PartnerName +
        " with " + NoOfChildren + " children");
}

FortuneTeller2(3, "Mariza", "Leiden", "programmeur");

var FortuneTeller = function(NoOfChildren, PartnerName, location, jobtitle) {
    console.log(str(NoOfChildren, PartnerName, location, jobtitle));
}

function FortuneTeller2(NoOfChildren, PartnerName, location, jobtitle) {
    console.log(str(NoOfChildren, PartnerName, location, jobtitle));
}

FortuneTeller(4, "Lucy", "Amsterdam", "carpenter");

function calculateDogAge(humanYears, conversionRate) { return (humanYears * conversionRate); }

console.log(calculateDogAge(2, 7));

function calculateDiscountPrice(totalAmout, discount) {
    if (totalAmout < 25) { console.log("U krijgt korting vanaf 25 euro") } else {
        Math.round(totalAmout - discount);
        console.log("De prijs wordt:" + (totalAmount - discount));
    }
}

function berekenAantalDagen(age) {
    const maxAge = 80;
    var nu = new Date();
    var dag = nu.getDate();
    var maand = nu.getMonth() + 1;
    var jaar = nu.getYear();
    if (jaar < 1900) jaar += 1900;
    /*
    var dag2 = new Date(jaar, maand - 1, dag);
    console.log("Tweede datum is " + dag2);
    */
    let aantalDagenPerJaar = 0;
    let schrikkelJaar = false;
    if (jaar % 4 === 0) schrikkeljaar = true;

    var peildatum = new Date(jaar + 1, 0, 1);
    let aantalDagenRestJaar = 0;
    switch (maand) {
        case 1:
            if (schrikkeljaar === true)
                aantalDagenRestJaar = 32 - dag + 29 + 6 * 31 + 4 * 30;
            else aantalDagenRestJaar = 32 - dag + 28 + 6 * 31 + 4 * 30;
            break;
        case 2:
            if (schrikkeljaar === true)
                aantalDagenRestJaar = 30 - dag + 6 * 31 + 4 * 30;
            else aantalDagenRestJaar = 29 - dag + 6 * 31 + 4 * 30;
            break;
        case 3:
            aantalDagenRestJaar = 32 - dag + 5 * 31 + 4 * 30;
            break;
        case 4:
            aantalDagenRestJaar = 31 - dag + 5 * 31 + 3 * 30;
            break;
        case 5:
            aantalDagenRestJaar = 32 - dag + 4 * 31 + 3 * 30;
            break;
        case 6:
            aantalDagenRestJaar = 31 - dag + 4 * 31 + 2 * 30;
            break;
        case 7:
            aantalDagenRestJaar = 32 - dag + 3 * 31 + 2 * 30;
            break;
        case 8:
            aantalDagenRestJaar = 32 - dag + 2 * 31 + 2 * 30;
            break;
        case 9:
            aantalDagenRestJaar = 31 - dag + 2 * 31 + 30;
            break;
        case 10:
            aantalDagenRestJaar = 32 - dag + 31 + 30;
            break;
        case 11:
            aantalDagenRestJaar = 31 - dag + 31;
            break;
        case 12:
            aantalDagenRestJaar = 32 - dag;
            break;
            //default:
            // code block
    }
    var leeftijd = age + 1;
    var totAantalDagen = aantalDagenRestJaar;
    for (var i = leeftijd; i <= maxAge; i++) {
        jaar += 1;
        if (jaar % 4 === 0)
            schrikkeljaar = "true";
        else schrikkeljaar = "false";
        if (schrikkelJaar === true) {
            aantalDagenPerJaar = 366
        } else aantalDagenPerJaar = 365;
        totAantalDagen += aantalDagenPerJaar;
    }
    return totAantalDagen;
}

function calculateSupply(age, amountPerDay) {
    var totAantalDagen = berekenAantalDagen(age);
    totAmount = Math.round(amountPerDay * totAantalDagen);
    console.log("Voor de rest van uw leven moet u in het totaal " + totAmount + " eten.");
}

calculateSupply(40, 2.3);
calculateSupply(50, 1.3);
calculateSupply(35, 1.65345);

let movies = {
    title: "Puff the magic dragon",
    duration: 30,
    stars: ["Puff", "Jacky", "Living sneezes"]
};

function drukFilmInformatieAf(movies) {
    console.log(movies["title"] + " lasts for " + movies["duration"] + " Stars : " + movies["stars"]);
}

drukFilmInformatieAf(movies);