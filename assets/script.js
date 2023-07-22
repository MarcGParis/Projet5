const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Constantes
const bulletPoints = document.querySelector(".dots");

const imageBanner = document.querySelector(".banner-img");

const pBanner = document.querySelector("#banner p");

const bannerTag = document.querySelector("#banner");

//Flèches 
let slideIndex = 0
const leftArrowElement = document.querySelector(".arrow_left");
leftArrowElement.addEventListener("click", () => {
	bulletPoints.children[slideIndex].classList.remove("dot_selected");
	slideIndex = slideIndex-1;

	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}

	imageBanner.src = "./assets/images/slideshow/" + slides[slideIndex].image;
	pBanner.innerHTML = slides[slideIndex].tagLine;

	bulletPoints.children[slideIndex].classList.add("dot_selected");

});

const rightArrowElement = document.querySelector(".arrow_right");
rightArrowElement.addEventListener("click", () => {
	bulletPoints.children[slideIndex].classList.remove("dot_selected");
	slideIndex = slideIndex + 1;
	
	if (slideIndex > slides.length - 1) {
		slideIndex = 0;
	}
	
	imageBanner.src = "./assets/images/slideshow/" + slides[slideIndex].image;
	pBanner.innerHTML = slides[slideIndex].tagLine;
	 
	bulletPoints.children[slideIndex].classList.add("dot_selected");

});

//Bullet points
let slide = 0
while (slide < slides.length) {
	let newDot = document.createElement("div");
	if (slide===0){
		newDot.classList.add("dot_selected");
	}
	newDot.classList.add("dot");
	bulletPoints.appendChild(newDot);
    slide++
}