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
// bannerTag.appendChild(imageBanner)
// bannerTag.appendChild(pBanner)

//Flèches 
let slideIndex = 0
const leftArrowElement = document.querySelector(".arrow_left");
leftArrowElement.addEventListener("click", () => {
	slideIndex = slideIndex-1;
	console.log(slideIndex);
});

const rightArrowElement = document.querySelector(".arrow_right");
rightArrowElement.addEventListener("click", () => {
	slideIndex = slideIndex+1;
	console.log(slideIndex);
	pBanner.innerHTML = slides[slideIndex].tagLine;

});



//Bullet points
while (slideIndex < slides.length) {
	let newDot = document.createElement("div");
	if (slideIndex===0){
		newDot.classList.add("dot_selected");
	}
	newDot.classList.add("dot");
	bulletPoints.appendChild(newDot);
    slideIndex++
}

//Fonction 
function newSlide(slides){
	// imageBanner.src = document.createElement (".banner-img");
	// pBanner.innerText = ``
}