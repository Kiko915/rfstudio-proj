const btn = document.querySelector("#main-cta");

document.addEventListener('DOMContentLoaded', ()=> {
	setTimeout(()=> {
		btn.innerHTML = "Say Hi";
	}, 1000)
})

//navbar fixed customization
const navbar = document.querySelector(".navbar");
//set threshold for a good length
let threshold = 150;

window.addEventListener('scroll', ()=> {
	let scrollValue = window.scrollY;
	if (scrollValue >= threshold) {
		console.log(scrollValue + " = " + threshold);
		navbar.classList.add("scrolled");
		navbar.classList.remove('bg-transparent');
	} else {
		navbar.classList.remove('scrolled');
	}




	console.log(scrollValue + "px");
})

console.log(navbar)

