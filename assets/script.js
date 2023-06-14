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

const leftArrowElement = document.querySelector(".arrow_left");
leftArrowElement.addEventListener("click", () => {
	console.log("Flèche gauche");
});

const rightArrowElement = document.querySelector(".arrow_right");
rightArrowElement.addEventListener("click", () => {
	console.log("Flèche droite");
});