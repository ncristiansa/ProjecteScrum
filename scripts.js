/*Función que mostrara los errores
errorText es el texto del error i tiempo en el caso que queramos que este solo por unos segundos*/ 
function showError(errorTextI,tiempo){
	var errorComprobar=document.getElementById("error");
	var page=document.getElementsByTagName("body")[0];
	if (errorComprobar==null) {
		var error=document.createElement("div");
		error.setAttribute("id", "error");

		var texto=document.createElement("p");
		texto.setAttribute("id","textError");		
		texto.innerText=(errorTextI);
		var image=document.createElement("img");		
		image.setAttribute("id","imageAlert");
		image.src="images/alert.png";

		var intro=document.createElement("br");
		page.appendChild(error);
		texto.appendChild(intro);
		texto.appendChild(image);
		error.appendChild(texto);
		document.body.appendChild(error);

		if (true==tiempo) {

		}

		
	}else{
		document.getElementById("textError").innerText(errorTextI);
	}


} 