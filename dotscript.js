$(document).ready(function(){

	var sides = ["top", "left", "right", "bottom"];
	var loop = 0;
	var heightRandom = Math.floor(Math.random() * window.innerHeight - 100);
	var widthRandom = Math.floor(Math.random() * window.innerWidth - 100);

	const makeRun = (x, y) => {
		$(".dot").css(
			"transform",
			"translate( "+ x +"px,"+ y +"px)"
		);
		console.log("done");
	}

	setInterval(
		function() { 
			makeRun(
				Math.floor(Math.random() * window.innerWidth - 100),
				Math.floor(Math.random() * window.innerHeight - 100)
			);
		}
	, 4000);



	/*
	Objetivos
	-Programar Cansaço
	-programar parada
	-programar procura de objetos
	-programar objetos
	-programar comportamentos inesperados
	
	*/

	
});