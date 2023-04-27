/*



*/

//Global Variables
var line = "This is Changed";

function press(){
	let temp = " ";
	temp = document.getElementById("btn-grid").value;
	alert(temp);
	//document.getElementById("screen").innerHTML = temp + " " + line;
}

function myFunction(){
	document.getElementById("screen").innerHTML = "";
}

$('button').click(function(){
  //var data='hello inside';
  $(this).data('button').option1(data); // should alert 'hello outside'
});


//Slideshow Script!
	let slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	showSlides(slideIndex = n);
	}

	function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	}
