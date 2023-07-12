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
//Dots
const bulletPoints = document.querySelector(".dots");

const imageBanner = document.querySelector(".banner-img");

const pBanner = document.querySelector("#banner p");

const bannerTag = document.querySelector("#banner");

//Flèches 
let slideIndex = 0
const leftArrowElement = document.querySelector(".arrow_left");
leftArrowElement.addEventListener("click", () => {
	slideIndex = slideIndex-1;
	
	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}
	imageBanner.src = "./assets/images/slideshow/" + slides[slideIndex].image;
	pBanner.innerHTML = slides[slideIndex].tagLine;
});

// au clic à gauche je veux qu'on revienne à la  slide précedante et quand on arrive à la premère je veux qu'on revienne à la 4ème slide
//au 4ème clic à gauche il faut afficher la dernière image et le dernière texte
const rightArrowElement = document.querySelector(".arrow_right");
rightArrowElement.addEventListener("click", () => {
	slideIndex = slideIndex + 1;
	
	if (slideIndex > slides.length - 1) {
		slideIndex = 0;
	}
	imageBanner.src = "./assets/images/slideshow/" + slides[slideIndex].image;
	pBanner.innerHTML = slides[slideIndex].tagLine;
});

//au 4ème clic à droite il faut afficher la première image et le premier texte

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

// let fruits = ["pomme", "cerise", "orange", "banane"];
// console.log(slideIndex.length-1);