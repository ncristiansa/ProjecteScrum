/*Función que mostrara los errores
errorText es el texto del error i tiempo en el caso que queramos que este solo por unos segundos*/ 
function showError(errorTextI,tiempo){
	var errorComprobar=document.getElementsById("errorDiv");
	var page=document.getElementsByTagName("body")[0];
	if (errorComprobar==null) {
		var error=document.createElement("div");
		error.setAttribute("id", "errorMargin");

		var textoPadding=document.createElement("div");
		textoPadding.setAttribute("id", "errorPadding");

		var texto=document.createTextNode(errorTextI);
		texto.setAttribute("id", "TextError");

		var iconoCerrar=document.createElement("span");
		iconoCerrar.setAttribute("class","closebutton");
		iconoCerrar.addEventListener("click", error.style.display='none');
		iconoCerrar.innerText=(&times;);



		if (true==tiempo) {

		}
		textoPadding.appendChild(texto);

		error.appendChild(textoPadding);
		page.appendChild(error);
	}


} var myList=document.getElementsByTagName("ul")[0];
        var lastChildList=myList.lastElementChild;

        var nextValue=lastChildList.innerText*2;

        var nextLi=document.createElement("Li");
        var nextContentLi=document.createTextNode(nextValue);
        nextLi.appendChild(nextContentLi);
        nextLi.addEventListener("click",selected);

        myList.appendChild(nextLi);