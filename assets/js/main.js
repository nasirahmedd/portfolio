$('#nav').onePageNav({
	scrollSpeed: 0,
	scrollThreshold: .5,
});

$('.nav-link').click(function() {
	$('.navbar-collapse').collapse('hide');
});
var typed = new Typed('.typed', {

	strings: ['Full Stack Web Developer.', 'Web Desginer.', 'Web Developer.', 'Freelancer.'],
	typeSpeed: 60,
	backSpeed: 40,
	loop: true,
	smartBackspace: false,
});

document.addEventListener('contextmenu',function(e) {
	e.preventDefault();
})

const nav = document.querySelector('.navbar');
const scrollUp = document.querySelector('.scroll-up');


window.addEventListener('scroll', () => {
	const scrollHeight = window.pageYOffset;
	const navHeight = nav.getBoundingClientRect().height;
	if (scrollHeight > navHeight) {
		nav.classList.add('fixed-nav')
	} else {
		nav.classList.remove('fixed-nav')
	}
	if (scrollHeight > 500) {
		scrollUp.classList.add('show-link');
	} else {
		scrollUp.classList.remove('show-link');

	}
});
const linksContainer = document.querySelector("#navbarNav");
const navbar = document.querySelector(".navbar");
const scrollLinks = document.querySelectorAll(".nav-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
        left: 0,
        top: position,
      });
  });
});

const navLink = document.querySelectorAll('.nav-item');
navLink.forEach(function (nav) {
	nav.addEventListener('click', function () {
			navLink.forEach((e) => {
			e.classList.remove('active');
			this.classList.add('active');
		})
	})
});
$(window).on("load", function () {
	$(".preloader").fadeOut();
});

document.querySelector('.send-btn').addEventListener('click',function (e) {
	e.preventDefault();
	var input = document.querySelector('#fname').value;
	if(input===""){
		alert('Fill-up-field')
	}else{
		alert('Thanks for your messages: '+input)
	}
});