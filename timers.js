var reset = document.querySelector("#reset");
var start = document.querySelector("#start");
var pause = document.querySelector("#pause");
var timer = document.querySelector("#timer");
var counter = 0;

var startTimer = function(){
	timer.innerHTML = "Time elapsed: " + counter;
	counter++;
}

start.addEventListener("click", function(){
	if (timer.innerHTML === "Stop Watch"){
		startTimer();
		setInterval(startTimer, 1000)
	}
})

// start.addEventListener("click", function(){
// 	if (timer.innerHTML === "Stop Watch"){
// 		setInterval(function(){
// 			timer.innerHTML = "Time elapsed: " + counter; 
// 			counter++;
// 		}, 1000)
// 	}
// })

pause.addEventListener("click", function(event){

})

reset.addEventListener("click", function(event){
	counter = 0;
	timer.innerHTML = "Time elapsed: " + counter
})