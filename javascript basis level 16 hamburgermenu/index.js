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
            achtergrondKleurWoord.textContent = "";
            break;
        case 1:
            pagina.classList.add("red");
            achtergrondKleurWoord.textContent = "red";
            break;
        case 2:
            pagina.classList.add("orange");
            achtergrondKleurWoord.textContent = "orange";
            break;
        case 3:
            pagina.classList.add("purple");
            achtergrondKleurWoord.textContent = "purple";
            break;
        case 4:
            pagina.classList.add("green"); /* laatste case geen break*/
            achtergrondKleurWoord.textContent = "green";
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
    parent.classList.add("fontDikgedrukt");
}

function menuklaptuit(tel2) {
    if (kleurenregels.classList.contains("maakOpaque"))
        kleurenregels.classList.remove("maakOpaque");
    let kleuren = document.getElementsByClassName("kleur");
    let kleurenArr = Array.from(kleuren);
    for (let i = 0; i < kleurenArr.length; i++) {
        kleurenArr[i].addEventListener('click', function(e) {
            kleurenregels.classList.add("maakOpaque");
            wijzigRadioButtons(i);
            veranderAchtergrondKleur(i);
            let hamburger = document.querySelector('.hamburger');
            hamburger.addEventListener('click', menuklaptuit);
            pasLetterBoxAan(i, letterBox);
            geklikt = false;
        });
    };
}

achtergrondKleurWoord = document.getElementById("achtergrondKleurWoord");

// hamburger met kleurenregels klik definitie 
let pagina = document.querySelector('body');
let hamburger = document.querySelector('.hamburger');
let kleurenregels = document.getElementById("kleurenregels");
let geklikt = false; // var nodig om na het klikken geen last van de mouseout functie te hebben 

hamburger.addEventListener('click', function(e) {
    menuklaptuit();
    geklikt = true;
});

// hoover definitie  
hamburger.addEventListener('mouseover', function(e) {
    geklikt = "false";
    menuklaptuit();
});

hamburger.addEventListener('mouseout', function(e) {
    if (geklikt != true)
        kleurenregels.classList.add("maakOpaque");
});

// radiobuttons definitie
let kleurKeuze = document.getElementsByClassName('radio');
let kleurenRadioArr = Array.from(kleurKeuze);
let parent = kleurenRadioArr[0].parentElement;
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


// gekozen letter definitie
let gekozenLetter = document.querySelector("input[type='text']");
let letterBox = gekozenLetter.parentElement;
gekozenLetter.addEventListener("keyup", function(e) {
    let karAscii = e.keyCode;

    if ((karAscii >= 49 && karAscii <= 53)) {
        e.preventDefault();
        let karAscii = e.keyCode;
        let karKleurString = "";
        switch (karAscii) {
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
        pasLetterBoxAan(i, letterBox);
    } else {
        e.preventDefault();
        alert("Als u op deze manier de kleur van de achtergrond wilt wijzigen moet u een getal tussen de 1 en de 5 invoeren");
    }
    gekozenLetter.value = "";
});