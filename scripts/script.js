// JavaScript Document
var menubutton =document.querySelector("div[role='menu']");

menubutton.addEventListener("click",openmenu);

function openmenu(){
	var hetmenu =document.querySelector("header nav");
	hetmenu.classList.toggle("open");

}



document.getElementByName(window).scroll(function(){

      if(document.getElementByName(window).scrollTop()>100){
        document.getElementByName("#theDiv").fadeIn();

      }else{
         document.getElementByName("#theDiv").fadeOut();
      }

});

<body onload="myFunction()">


var fadein =document.querySelector();

fadein..addEventListener("scroll",fade);
function fade(){
	if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {


	}
}







function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("myImg").className = "slideUp";
  }
}
