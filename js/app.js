// animazioni intro e testo da 'opacity: 0' a 'opacity:1'

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to('.slider', {y: "-100%", duration: 1.5, delay:0.5 });
tl.to('.intro', { y: "-100%", duration: 1, }, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo(".desc-gen", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

// animazione nav

const nav = document.querySelector("nav",);
const sectionOne = document.querySelector(".landing");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries, 
  sectionOneObserver
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled")
    }
  });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// animazione inutilizata per far vedere gli elementi con un delay

/* setTimeout(function(){
  document.getElementById('diva').style.visibility = "visible";
},2900); */

// animazione 'on scroll' degli elementi

window.addEventListener('scroll', reveal);

function reveal(){
var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 0;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
};

// schermo telefono

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // toggle nav
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  });
}

navSlide();