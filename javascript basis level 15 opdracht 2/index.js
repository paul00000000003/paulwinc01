let button = document.querySelector(".btn-alert");
let backgroundButton = document.querySelector(".backgroundButton");
let pagina = document.querySelector("body");

button.addEventListener("click", function(e) { alert("Je hebt op de knop geklikt"); });

backgroundButton.textContent = "Change background to blue";
backgroundButton.addEventListener("click", toggleColor);

function toggleColor() {
    if (pagina.classList.contains("blue-background")) {
        pagina.classList.remove("blue-background");
        pagina.classList.add("red-background");
        backgroundButton.textContent = "Change background to blue";
    } else {
        if (pagina.classList.contains("red-background"))
            pagina.classList.remove("red-background");
        pagina.classList.add('blue-background');
        backgroundButton.textContent = "Change background to red";
    }
}