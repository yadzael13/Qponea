



//Funcionamiento de login
var loginButton = document.querySelector("#login--active");
var userSection = document.querySelector('.section--user');

var userSectionMail = document.querySelector(".section--user--mail");
var registerButton = document.querySelector('#register-button');

const iniciarSesion = document.querySelectorAll(".loginGo");
var icons = document.querySelector(".styleicons");
const goMail = document.querySelectorAll(".goMail");

var principalWindow = document.querySelector(".section--user--");
var logginWindow = document.querySelector(".section--user--login");
var emailWindow = document.querySelector(".section--user--mail");

var buttonBack = document.querySelectorAll(".back");


const exit = document.getElementsByClassName('exit');
loginButton.addEventListener("click", () =>{showUserSection()});


registerButton.addEventListener("click", () =>{showpregister()});

iniciarSesion.forEach(iniciarSesion => {iniciarSesion.addEventListener("click", mostrarLoggin)});

buttonBack.forEach(buttonBack => {buttonBack.addEventListener("click", goBack)});
//Funciones para mostrar

function showUserSection(){

userSection.classList.toggle("section--user--on");



}


function showpregister(){
var register = document.querySelector('.register-p');

register.classList.toggle("register-p-hide");
icons.classList.toggle("styleicons-show");

}
function mostrarRegistrarse(){
  principalWindow.classList.remove("section--user--");
  principalWindow.classList.add("section--user--");
  logginWindow.classList.toggle("section--user--login--on");
}
function mostrarLoggin(){
  principalWindow.classList.toggle("section--user--off");

  logginWindow.classList.toggle("section--user--login--on");

}
function goBack(){
// if (principalWindow.classList.contains("section--user--off")){
// principalWindow.classList.remove("section--user--off");
//   principalWindow.classList.add("section--user--");
// }
}
