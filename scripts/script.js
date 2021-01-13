// JavaScript Document
var menubutton =document.querySelector("div[role='menu']");

menubutton.addEventListener("click",openmenu);

function openmenu(){
	var hetmenu =document.querySelector("header nav");
	hetmenu.classList.toggle("open");

}

let section4 = document.querySelector('main section:nth-of-type(4)');
let section5 = document.querySelector('main section:nth-of-type(5)');
let section6 = document.querySelector('main section:nth-of-type(6)');
let section7 = document.querySelector('main section:nth-of-type(7)');

let observerGenericSections;

let observerConfigGenericSections = {
  /* rootMargin is niet nodig - alles 0px is de default die de observer hanteert */
  /* rootMargin: '0px 0px 0px 0px', */ 
  /* threshold: .5 betekent dat de obeserver afgaat als het element voor meer dan 0 dus 1  in beeld is */
  threshold: 0
};

observerGenericSections = new IntersectionObserver(observerFnGenericSections, observerConfigGenericSections);

  observerGenericSections.observe(section4);
  observerGenericSections.observe(section5);
  observerGenericSections.observe(section6);
  observerGenericSections.observe(section7);

  function observerFnGenericSections(sections) {
  /* het entries object bevat alle elementen waarop de observer let */
  /* dat zijn er nu dus meer */
  /* dus weer een for loop om ze allemaal te bekijken*/
  for (section of sections) {
    /* als een element minstens voor de helft in beeld is */
    if(section.isIntersecting) {
      /* dan wordt de class "revealed" aan het element toegevoegd */
      /* met css kan de styling dan aangepast worden*/
      section.target.classList.add("fadein");
    }
  }
  /* nb. er kunnen meerdere elementen tegelijk in beeld komen*/
  /* bijv. als je snel scrollt - dan gaat de observer maar 1x af voor een aantal elementen tegelijk */
  /* bijv. als de pagina geladen wordt en er zijn al meerdere elementen zichtbaar*/
}


