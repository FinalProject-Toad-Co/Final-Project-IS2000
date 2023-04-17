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

