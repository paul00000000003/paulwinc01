function radioButtonsDefinitie() {


}

function pasLetterBoxAan(kleurtel, letterBox) {
    if (letterBox.classList.contains("letterKeuzeGrey"))
        letterBox.classList.remove("letterKeuzeGrey");
    if (letterBox.classList.contains("letterKeuzeRed"))
        letterBox.classList.remove("letterKeuzeRed");
    if (letterBox.classList.contains("letterKeuzeGreen"))
        letterBox.classList.remove("letterKeuzeGreen");
    if (letterBox.classList.contains("letterKeuzeOrange"))
        letterBox.classList.remove("letterKeuzeOrange");
    if (letterBox.classList.contains("letterKeuzePurple"))
        letterBox.classList.remove("letterKeuzePurple");

    console.log(letterBox);
    switch (kleurtel) {
        case 0:
            i = 0;
            letterBox.classList.add("letterKeuzeGrey");
            break;
        case 1:
            i = 1;
            letterBox.classList.add("letterKeuzeRed");
            break;
        case 2:
            letterBox.classList.add("letterKeuzeOrange");
            break;
        case 3:
            letterBox.classList.add("letterKeuzePurple");
            break;
        case 4:
            letterBox.classList.add("letterKeuzeGreen");
    }
    console.log(letterBox);
}

function zetKleurTerug() {
    if (pagina.classList.contains("lightgrey"))
        pagina.classList.remove("lightgrey");
    if (pagina.classList.contains("orange"))
        pagina.classList.remove("orange");
    pagina.classList.remove("orange");
    if (pagina.classList.contains("purple"))
        pagina.classList.remove("purple");
    if (pagina.classList.contains("green"))
        pagina.classList.remove("green");
    if (pagina.classList.contains("red"))
        pagina.classList.remove("red")
}

function veranderAchtergrondKleur(tel2) {
    zetKleurTerug();
    switch (tel2) {
        case 0:
            pagina.classList.add("lightgrey");
            /*achtergrondText.innerHTML = "";*/
            break;
        case 1:
            pagina.classList.add("red");
            /*achtergrondText.innerHTML = "red";*/
            break;
        case 2:
            pagina.classList.add("orange");
            /*achtergrondText.innerHTML = "orange";*/
            break;
        case 3:
            pagina.classList.add("purple");
            /*achtergrondText.innerHTML = "purple";*/
            break;
        case 4:
            pagina.classList.add("green"); /* laatste case geen break*/
            /*achtergrondText.innerHTML = "green";*/
    }
    pasLetterBoxAan(tel2, letterBox);
}

function wijzigRadioButtons(tel) {
    for (let j = 0; j < kleurenRadioArr.length; j++) {
        parent = kleurenRadioArr[j].parentElement;
        if (parent.classList.contains('fontDikgedrukt'))
            parent.classList.remove('fontDikgedrukt');
        kleurenRadioArr[j].checked = "false";
    }
    parent = kleurenRadioArr[tel].parentElement;
    kleurenRadioArr[tel].checked = "true";
    console.log('de waarde wordt : ' + kleurenRadioArr[tel].value);
    parent.classList.add("fontDikgedrukt");
}


function maakschermschoon(tel) {
    kleurenregels.innerHTML = "";
    console.log("voor Radio buttons");
    wijzigRadioButtons(tel);
    console.log("na radiobuttons");
    veranderAchtergrondKleur(tel);
    console.log("na achtergrondkleur");
    let hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', menuklaptuit);
    console.log('maak scherm schoon : ' + tel.toString());
    pasLetterBoxAan(tel, letterBox)
    geklikt = false;
}


function menuklaptuit() {
    console.log("binnen menu klapt uit");
    kleurenregels.innerHTML = "<ul>";
    kleurenregels.innerHTML += "<li class='home kleur'>home</li>";
    kleurenregels.innerHTML += "<li class='red  kleur'>red</li>";
    kleurenregels.innerHTML += "<li class='orange kleur'>orange</li>";
    kleurenregels.innerHTML += "<li class='purple kleur'>purple</li>";
    kleurenregels.innerHTML += "<li class='green kleur'>green</li>";
    kleurenregels.innerHTML += "</ul>"
    let kleuren = document.getElementsByClassName("kleur");
    let kleurenarr = Array.from(kleuren);
    for (let i = 0; i < kleuren.length; i++) {
        kleurenarr[i].addEventListener('click', function(e) { maakschermschoon(i) });
    };
}

let pagina = document.querySelector('body');
let hamburger = document.querySelector('.hamburger');
let kleurenregels = document.getElementById("kleurenregels");
let geklikt = false; // var nodig om na het klikken geen last van de mouseout functie te hebben 

hamburger.addEventListener('click', function(e) {
    menuklaptuit();
    geklikt = true;
});

// Hieronder de twee hoover functies : naar het icoontje toe en er van af 
hamburger.addEventListener('mouseover', function(e) {
    geklikt = "false";
    menuklaptuit();
});

hamburger.addEventListener('mouseout', function(e) {
    if (geklikt != true)
        kleurenregels.innerHTML = "";
});

radioButtonsDefinitie();

let kleurKeuze = document.getElementsByClassName('radio');
let kleurenRadioArr = Array.from(kleurKeuze);
let parent = kleurenRadioArr[0].parentElement;
console.log("aantal radiobuttons : " + kleurKeuze.length);
for (let i = 0; i < kleurenRadioArr.length; i++) {
    kleurenRadioArr[i].addEventListener('click', function(e) {
        parent = kleurenRadioArr[i].parentElement;
        for (let j = 0; j < kleurenRadioArr.length; j++) {
            parent = kleurenRadioArr[j].parentElement;
            if (parent.classList.contains('fontNormaal'))
                parent.classList.remove('fontNormaal');
            if (parent.classList.contains('fontDikgedrukt'))
                parent.classList.remove('fontDikgedrukt');
        }
        parent = kleurenRadioArr[i].parentElement;
        parent.classList.add('fontDikgedrukt');
        console.log("De gekozen waarde is " + i);
        veranderAchtergrondKleur(i);
    })
}

let gekozenLetter = document.querySelector("input[type='text']");
let letterBox = gekozenLetter.parentElement;
gekozenLetter.addEventListener("keyup", function(e) {
    let karAscii = e.keyCode;

    if ((karAscii >= 49 && karAscii <= 53)) {
        e.preventDefault();
        let karAscii = e.keyCode;
        let karKleurString = "";
        switch (e.keyCode) {
            case 49:
                i = 0;
                karKleurString = "Default";
                break;
            case 50:
                i = 1;
                karKleurString = "Red";
                break;
            case 51:
                i = 2;
                karKleurString = "orange";
                break;
            case 52:
                i = 3;
                karKleurString = "purple";
                break;
            case 53:
                karKleurString = "green";
                i = 4;
        }

        alert("Backgroundcolor will be changed to  " + karKleurString);
        gekozenLetter.value = "";
        wijzigRadioButtons(i);
        veranderAchtergrondKleur(i);
        console.log("pas letterbox aan");
        pasLetterBoxAan(i, letterBox);
    } else {
        e.preventDefault();
        alert("Als u op deze manier de kleur van de achtergrond wilt wijzigen moet u een getal tussen de 1 en de 5 invoeren");
    }
    gekozenLetter.value = "";
});