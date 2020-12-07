// JavaScript Document
var menubutton =document.querySelector("div[role='menu']");

menubutton.addEventListener("click",openmenu);

function openmenu(){
	var hetmenu =document.querySelector("header nav");
	hetmenu.classList.toggle("open");

}
