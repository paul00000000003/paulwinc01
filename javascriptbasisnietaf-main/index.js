
const body = document.querySelector(".body");
const colorHome = document.querySelector(".home");
const colorBlauw = document.querySelector(".blauw");
const colorGroen = document.querySelector(".groen");
const colorRood = document.querySelector(".rood");
const colorRoze = document.querySelector(".roze");
const colorGeel = document.querySelector(".geel");

menuColor.style.marginLeft = "-310px";
let menuColorStatus = false;    


    let menuBtn = document.querySelector(".menu-btn");
    let menuColor = document.querySelector(".menu-color");
    let menuColorUl = document.querySelector(".menu-color ul");
    let menuColorTitle = document.querySelector(".menu-color span");
    let menuColorLinks = document.querySelectorAll(".menu-color a");

let toggleMenu = function(){
    if (menuColorStatus===false){
        menuColor.style.marginLeft = "10px";
        menuColorLinks.style.opacity = "1";
        menuColorTitle.style.opacity = "1";
        menuColorStatus = true;
    }
    else if (menuColorStatus === true){
        menuColor.style.marginLeft = "-310px";
        menuColorLinks.style.opacity = "0";
        menuColorTitle.style.opacity = "0";
        menuColorStatus = false;
    }
}

const bodyHome = () =>{
    body.classList.remove("blauw", "groen", "rood", "roze", "geel");
    body.classList.add("home");
    menuColor.style.marginLeft = "-310px";
};
colorHome.addEventListener("click", bodyHome);
const bodyBlauw = () => {
    body.classList.remove("home", "groen", "rood", "roze", "geel");
    body.classList.add("blauw");
    menuColor.style.marginLeft = "-310px";
};
colorBlauw.addEventListener("click", bodyBlauw);
const bodyGroen = () => {
    body.classList.remove("home", "blauw", "rood", "roze", "geel");
    body.classList.add("groen");
    menuColor.style.marginLeft = "-310px";
};
colorGroen.addEventListener("click", bodyGroen);
const bodyRood = () => {
    body.classList.remove("home", "groen", "blauw", "roze", "geel");
    body.classList.add("rood");
    menuColor.style.marginLeft = "-310px";
};
colorRood.addEventListener("click", bodyRood);
const bodyRoze = () => {
    body.classList.remove("home", "groen", "rood", "blauw", "geel");
    body.classList.add("roze");
    menuColor.style.marginLeft = "-310px";
};
colorRoze.addEventListener("click", bodyRoze);
const bodyGeel = () => {
    body.classList.remove("home", "groen", "rood", "roze", "blauw");
    body.classList.add("geel");
    menuColor.style.marginLeft = "-310px";
};
colorGeel.addEventListener("click", bodyGeel);

menuBtn.addEventListener("click", toggleMenu);