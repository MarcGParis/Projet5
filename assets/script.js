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

let slideIndex = 0
//Flèches 
const leftArrowElement = document.querySelector(".arrow_left");
leftArrowElement.addEventListener("click", () => {
	slideIndex = slideIndex-1;
	console.log(slideIndex);
});


const rightArrowElement = document.querySelector(".arrow_right");
rightArrowElement.addEventListener("click", () => {
	slideIndex = slideIndex+1;
	console.log(slideIndex);
});

//Bullet points
// for (let i = 0; i < slides.length; i++) {
// 	console.log(slides[i]);
// }

// const imageElement = document.createElement("banner-img");
// imageElement.src = slides.image;

// const pElement = document.createElement("#banner p");
// pElement.innerText = slides.p;

// const sectionSlide = document.querySelector("#banner");
// sectionSlide.appendChild(imageElement);
// sectionSlide.appendChild(pElement);

//Dots
const bulletPoints = document.querySelector(".dots");

const bannerTag = document.querySelector("#banner");
//console.log(bannerTag)
const imageBanner = document.querySelector(".banner-img");
// console.log(imageBanner)

const pBanner = document.querySelector("#banner p");

//console.log(pBanner)
pBanner.innerHTML = "coucou";

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

let rightClick = true;
if (rightClick){
	
	console.log();
} else{
	console.log();
}