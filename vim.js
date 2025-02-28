const explorer = document.querySelector(".explorer");
const command = document.querySelector(".command")
const state = document.querySelector(".state")
const showExplorer = document.querySelector("#showExplorer")
const slides = document.querySelectorAll(".slide")
const helpDiv = document.querySelector(".help")
const navbar = document.querySelector(".navbar")

const commands={
	explorer:()=>{
		showExplorer.classList.toggle("open");
		explorer.classList.toggle("open");
	},
	commandBar: ()=>{
		command.classList.toggle("hide");
		state.classList.toggle("hide");
		var cmd = document.querySelector("#cmd")
		cmd.focus();
		cmd.value=""
	},
	commandBarHide:()=>{
		command.classList.add("hide");
		state.classList.remove("hide");
	}
}
showExplorer.addEventListener("click",commands.explorer);

document.addEventListener("keydown", (e)=>{
	if(e.key == ":" || e.key == "/"){
		commands.commandBar()
	}
	if(e.key == "Escape"){
		commands.commandBarHide();
	}

});

navbar.addEventListener("click", ()=>{
	commands.commandBar()
	cmd.value=":"
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

document.addEventListener('wheel', (e) => {
	if (e.deltaY > 0) {
		changeSlide(1);	
	} else {
		changeSlide(-1);
	}
});
let startX = 0;
let startY = 0;
let isScrolling = false;

document.addEventListener('touchstart', (e) => {
	e.preventDefault(); 
	const touch = e.touches[0];
	startX = touch.clientX;
	startY = touch.clientY;
	isScrolling = false;
}, false);

document.addEventListener('touchmove', (e) => {
	e.preventDefault(); 

	const touch = e.touches[0];
	const diffX = touch.clientX - startX;
	const diffY = touch.clientY - startY;
	const threshold = 50;

	if (!isScrolling) {
		if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY)) {
			isScrolling = true;  
			if (diffX > 0) {
				changeSlide(-1);
			} else {
				changeSlide(1);
			}
		}
		else if (Math.abs(diffY) > threshold && Math.abs(diffY) > Math.abs(diffX)) {
			isScrolling = true;
			if (diffY > 0) {
				changeSlide(-1);
			} else {
				changeSlide(1);
			}
		}
	}
}, false);

document.addEventListener('touchend', () => {
	startX = 0;
	startY = 0;
}, false);
cmd.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		if(cmd.value.startsWith("/")){
			text = cmd.value.replace("/","");
			//removeHighlights()
			//searchAndHighlight(text)
			commands.commandBarHide()
		}
		if(cmd.value.startsWith(":")){
			text = cmd.value.replace(":","");
			switch (text) {
				case "ex":
				case "explore":
					commands.explorer();
					break;
				case "help":
				case "h":
					changeSlide("h");
					break;
				default:
					break;
			}
		}
		cmd.value = ""
		commands.commandBarHide();
	}
});

const searchAndHighlight =(word)=> {
	removeHighlights()

	const bodyText = document.body;

	const regex = new RegExp(`(${word})`, 'gi');
	const match = bodyText.innerHTML.match(regex);
	console.log(match)
	// Creamos un span alrededor de la palabra encontrada
	const span = document.createElement('span');
	span.className = 'highlight';
	span.textContent = match[0];
	bodyText.innerHTML = bodyText.innerHTML.replaceAll(match[0], span.outerHTML);
}
const removeHighlights = ()=>{
	const highlighted = document.querySelectorAll('.highlight');
	highlighted.forEach(element => {
		a = element.innerText
		element.classList.remove('highlight');
	});
}
