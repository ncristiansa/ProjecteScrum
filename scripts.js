/*Función que mostrara los errores
errorText es el texto del error i tiempo en el caso que queramos que este solo por unos segundos
function showError(errorTextI,tiempo){

*/
function addMessageError(errorText, status){
	var CheckError = document.getElementById("MessageError");
	var Button = document.getElementsByTagName("input")[0];

	if(CheckError==undefined){
		var Fail = document.createElement("div");
		Fail.setAttribute("id", "MessageError");
		Fail.setAttribute("align", "left");

		var failText = document.createElement("p");
		failText.setAttribute("id", "pError");
		failText.innerText=(errorText);

		var Img = document.createElement("img");
		Img.setAttribute("id", "imgError");
		//Img.setAttribute("align", "left");
		Img.setAttribute("height","30px");
		Img.setAttribute("width", "30px");
		Img.src="images/alert.png";

		Button.appendChild(Fail);
		Fail.appendChild(Img);
		Fail.appendChild(failText);
		document.body.appendChild(Fail);

		if(true==status){
			setTimeout(function(){document.getElementById("MessageError").remove();},8000);
		}

	}else if(CheckError!=undefined){
		document.getElementById("MessageError").remove();
		addMessageError(errorText, status);
	}
	
}




function displayDiv(div) {
  var x = document.getElementById("div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}