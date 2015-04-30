var reset = document.querySelector("#reset");
var start = document.querySelector("#start");
var pause = document.querySelector("#pause");
var timer = document.querySelector("#timer");
var counter = 0;
var itIsWorking = 0;

var startTimer = function(){
	timer.innerHTML = "Time elapsed: " + counter;
	counter++;
}

start.addEventListener("click", function(){
	if (itIsWorking === 0){
		interval = setInterval(startTimer, 1000);
		itIsWorking = 1
	}
})

pause.addEventListener("click", function(){
	clearInterval(interval);
	itIsWorking = 0
})

reset.addEventListener("click", function(){
	clearInterval(interval);
	counter = 0;
	timer.innerHTML = "Stop Watch";
	itIsWorking = 0
})