// Write your JS in here
let pics = [
	"imgs/SH1.jpg",
	"imgs/SH2.jpg", 
	"imgs/SH3.jpg",
	"imgs/SH4.jpg",
	"imgs/SH5.jpg",
	"imgs/SH6.jpg",
	"imgs/SH7.jpg",
	"imgs/SH8.jpg",
]

let btn = document.querySelector("button");
let img = document.querySelector("img");
let counter =1;
btn.addEventListener("click", function(){
	if(counter===6){
		(counter = 0);
	}
	img.src = pics[counter];
	counter = counter+1;
});



