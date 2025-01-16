const explorer = document.querySelector(".explorer");
const command = document.querySelector(".command")
const state = document.querySelector(".state")
const showExplorer = document.querySelector("#showExplorer")
const slides = document.querySelectorAll(".slide")
const helpDiv = document.querySelector(".help")
showExplorer.addEventListener("click", ()=>{
	showExplorer.classList.toggle("open");
	explorer.classList.toggle("open");
});

document.addEventListener("keydown", (e)=>{
	if(e.key == ":"){
		command.classList.toggle("hide");
		state.classList.toggle("hide");
		var cmd = document.querySelector("#cmd")
		cmd.focus();
		cmd.innerText= ""
	}
	if(e.key == "Escape"){
		command.classList.add("hide");
		state.classList.remove("hide");
	}
});
let currentSlide = 0

function changeSlide(step) {
	if(step == "h"){
		count = currentSlide
		while(!slides[count].classList.contains("help")) {
			count++
		}
		changeSlide(count-currentSlide)
		return
	}
	const oldSlide = slides[currentSlide];
	oldSlide.classList.remove('active');
	oldSlide.classList.add(step > 0 ? 'up' : 'down');

	currentSlide += step;

	if (currentSlide >= slides.length) {
		currentSlide = 0;
	} else if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	const newSlide = slides[currentSlide];
	newSlide.classList.add('active');
	newSlide.classList.add(step > 0 ? 'down' : 'up');

	setTimeout(() => {
		oldSlide.classList.remove('up', 'down');
		newSlide.classList.remove('up', 'down');
	}, 200);
}

document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
		changeSlide(1);
	} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
		changeSlide(-1);
	}
});

// Evento de scroll
document.addEventListener('wheel', (e) => {
	if (e.deltaY > 0) {
		changeSlide(1);	
	} else {
		changeSlide(-1);
	}
});



cmd.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		event.preventDefault(); 
		text = cmd.innerText.replace(":","");
		if(["ex", "explore"].includes(text.toLowerCase())){
		}
		switch (text) {
			case "ex":
			case "explore":
				showExplorer.classList.toggle("open");
				explorer.classList.toggle("open");
				break;
			case "help":
			case "h":
				changeSlide("h");
				break;
			default:
				break;
		}
		cmd.innerText = ""
		command.classList.add("hide");
		state.classList.remove("hide");
	}
});
