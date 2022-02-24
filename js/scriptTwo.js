//Animación de inicio
window.onload = function() {
  var contenedor = document.getElementById('load-charge');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
}




//ventanas
const principalUser = document.querySelector(".section--user");
const welcomeUser = document.querySelector(".section--user--");
const mailUser = document.querySelector(".section--user--mail");
const logginUser = document.querySelector(".section--user--login");
const headerMenuAside = document.querySelector(".header--menu--aside");
const mainQponea = document.querySelector("#main--qponea");
//Elements
var registerp = document.querySelector(".register-p");
var iconsRegister = document.querySelector(".main--user--body--icons");
const backBlack = document.querySelector(".bckgrndBlack");
      backBlack.addEventListener("click",close);
var menuButton = document.querySelector("#menu--on");
var menuButtonOff = document.querySelector("#menu--off");
var menuAsideCupones = document.querySelector(".menu--aside--li--cupons");
showMenuAsideCupons(menuAsideCupones);
var menuAsideCuponesShow = document.querySelector(".menu--aside--cupons");
showMenuAsideCupons(menuAsideCuponesShow);
//Botones
const buttonLoggin = document.querySelector("#login--active");
       buttonLoggin.addEventListener("click", mostrarUserSection);

var iniciarSesion = document.querySelectorAll(".loginGo");
      iniciarSesion.forEach(iniciarSesion => {iniciarSesion.addEventListener("click", goToLoggin);});

var registrarse = document.querySelectorAll(".mailGo");
      registrarse.forEach(registrarse => {registrarse.addEventListener("click", goToMail);});

var buttonRegister = document.querySelector(".register-button");
       buttonRegister.addEventListener("click", toggleRegister);

var closeButton = document.querySelectorAll(".exit");
      closeButton.forEach(closeButton => {closeButton.addEventListener("click", close);});

var backButton = document.querySelectorAll(".back");
    backButton.forEach(backButton => {backButton.addEventListener("click", back);});

var menuButton = document.querySelector(".menu--on");
  menuButton.addEventListener("click", menuAsideToggle);

var menuButtonOff = document.querySelector("#menu--off");
menuButtonOff.addEventListener("click", menuAsideToggle);

var searchInput = document.querySelector(".search--input");
var searchButton = document.querySelector(".search--button");
searchButton.addEventListener("click", searchButtonEvent);
 //Click en main qponea

 mainQponea.addEventListener("click", () => {
if (searchButton.classList.contains("search--button--onclick")) {
  searchButtonEvent();
} else if(headerMenuAside.classList.contains("header--menu--aside--on")){
    menuAsideToggle();}
 });
// Funciones
function mostrarUserSection(){
  backBlack.classList.toggle("bckgrndBlack--on");
  principalUser.classList.toggle("section--user--on");
}

function goToLoggin(){
principalUser.classList.toggle("section--user--show--loggin");
document.querySelector("#userInput").focus();
}

function goToMail(){
principalUser.classList.toggle("section--user--show--mail");
document.querySelector("#input-mail").focus();
}
function toggleRegister(){
registerp.classList.toggle("register-p-hide");
iconsRegister.classList.toggle("styleicons-show");
}
function close(){
  backBlack.classList.toggle("bckgrndBlack--on");
principalUser.classList.toggle("section--user--on");
registerp.classList.remove("register-p-hide");
iconsRegister.classList.remove("styleicons-show");
back();
}
function back(){
if(principalUser.classList.contains("section--user--show--mail")==true){
  principalUser.classList.remove("section--user--show--mail");
}else if(principalUser.classList.contains("section--user--show--loggin")==true){
  principalUser.classList.remove("section--user--show--loggin");
}
}
function menuAsideToggle(){
  headerMenuAside.classList.toggle("header--menu--aside--on");
  menuButton.classList.toggle("menu--on--hide");
if (searchButton.classList.contains("search--button--onclick")){
  searchButton.classList.remove("search--button--onclick");
  searchInput.classList.remove("search--input--onclick");
}
}
function searchButtonEvent(){
  searchInput.value="";
  searchButton.classList.toggle("search--button--onclick");
  searchInput.classList.toggle("search--input--onclick");
  searchInput.focus();
}

// Mostrar segundo menu cupones

function showMenuAsideCupons(x){
  this.x= x;
  x.addEventListener("mouseover", () => {
    menuAsideCuponesShow.classList.add("menu--aside--cupons--on")
  });
  x.addEventListener("mouseout", () => {
    menuAsideCuponesShow.classList.remove("menu--aside--cupons--on")
  });
}
