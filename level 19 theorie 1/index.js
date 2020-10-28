let button = document.getElementById("mybutton");
let button2 = document.getElementById("2ndbutton");
let navlijstje = document.getElementById("main-nav");
let menu = navlijstje.getElementsByTagName("ul")[0];

console.log(menu);
let regels = document.getElementsByClassName("regel");
button.addEventListener('click', function(e) { voegItemToe("eind") });
button2.addEventListener('click', function(e) { voegItemToe("begin") });
let removed = null;

function voegItemToe(begineind) {
    console.log("Probeer regel toe te voegen");
    const listElement = document.createElement("li");
    const aref = document.createElement("a");
    aref.innerHTML = "Toegevoegd item in de list aan het " + begineind + " Klik hierop om te verwijderen";
    aref.setAttribute("href", "#");
    listElement.classList.add("maakrood");
    aref.classList.add("regel");
    listElement.appendChild(aref);
    regels = document.getElementsByClassName("regel");
    if (begineind == "eind")
        menu.appendChild(listElement);
    else {
        if (typeof(regels[0]) == "undefined")
            alert("Er moet minimaal een regel staan om dit te doen");
        else {
            let parent = regels[0].parentElement;
            menu.insertBefore(listElement, parent);
        }
    }
    let regelsArr = Array.from(regels);
    for (let i = 0; i < regels.length; i++) {
        regels[i].addEventListener(
            'click',
            function(e) {
                console.log("element :" + i);
                if (typeof(e.target) == "undefined") {} else {
                    console.log("a ?" + regels[i]);
                    parent = e.target.parentElement;
                    console.log("parent " + parent);
                    let grandParent = parent.parentElement;
                    console.log("grandparent " + grandParent);
                    removed = grandParent.removeChild(parent);
                    regelsArr = Array.from(regels);
                    e.preventDefault();
                }
            }
        )
    }
    //regelsArr.forEach(element => element.addEventListener('click', function(e) { verwijderRegel(element) }));
}