function toggleMenu() {
    menuColor.innerHTML = "<ul>";
    menuColor.innerHTML += '<li class="home color">Kleurenmenu</li>';
    menuColor.innerHTML += "<li class='blauw color'>Blauw</li>";
    menuColor.innerHTML += "<li class='groen color'>Groen</li>";
    menuColor.innerHTML += "<li class='rood color'>Rood</li>";
    menuColor.innerHTML += "<li class='roze color'>Roze</li>";
    menuColor.innerHTML += "</ul>";
    pasBackgroundEnMenuAan();
}

function pasBackgroundEnMenuAan() {

    let colorLines = document.getElementsByClassName("color");
    let ColorArr = Array.from(colorLines);

    for (let i = 0; i < ColorArr.length; i++) {
        ColorArr[i].addEventListener('click', function(e) {
            console.log("punt 1");

            changecolorBack();
            switch (i) {
                case 0:
                    body.classList.add("home");
                    break;
                case 1:
                    body.classList.add("blauw");
                    break;
                case 2:
                    body.classList.add("groen");
                    break;
                case 3:
                    body.classList.add("rood");
                    break;
                case 4:
                    body.classList.add("roze");
            }
            menuColor.innerHTML = " ";
        })
    }
}


function changecolorBack() {
    if (body.classList.contains("home"))
        body.classList.remove("home");
    if (body.classList.contains("blauw"))
        body.classList.remove("blauw");
    if (body.classList.contains("groen"))
        body.classList.remove("groen");
    if (body.classList.contains("rood"))
        body.classList.remove("rood");
    if (body.classList.contains("roze"))
        body.classList.remove("roze")
}


function Changebackground(color) {
    changecolorBack();
    switch (color) {
        case "home":
            body.classList.add("home");
            break;
        case "blauw":
            body.classList.add("blauw");
            break;
        case "groen":
            body.classList.add("groen");
            break;
        case "rood":
            body.classList.add("rood");
            break;
        case "roze":
            body.classList.add("roze");
    }
}

let menuBtn = document.querySelector(".menu-btn");
console.log(menuBtn);
let menuColor = document.querySelector(".menu-color");
console.log(menuColor);
let menuColorStatus = false;
let body = document.querySelector("body");

let colorLines = document.getElementsByClassName("color");
let ColorArr = Array.from(colorLines);
menuBtn.addEventListener("click", function(e) {
    toggleMenu();
});