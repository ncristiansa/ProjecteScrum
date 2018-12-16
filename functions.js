if(tipo==2 || tipo==3){
	showinfoProject();
}
function insertAfter(e,i){
	if(e.nextSibling){
		e.parentNode.insertBefore(i,e.nextSibling);

	} else {
		e.parentNode.appendChild(i);
	}
}
function showinfoProject(){
	var elementNav = document.getElementsByTagName("nav")[0];
	var divInfo = document.createElement("div");
	var titleH2 = document.createElement("h2");
	for (var i = 0; i < nameProjectJS.length; i++) {
		var textH2 = document.createTextNode(nameProjectJS[i]);
		titleH2.appendChild(textH2);
	}
	var nameP = document.createElement("p");
	for (var p = 0; p < nameProjectJS.length; p++) {
		var textP = document.createTextNode("Nombre: "+nameProjectJS[p]);
		nameP.appendChild(textP);
	}
	
	var descripP = document.createElement("p");
	for (var i = 0; i < descriptionProjectJS.length; i++) {
		
		var textP = document.createTextNode("Descripción: "+descriptionProjectJS[i]);
		descripP.appendChild(textP);
	}
	
	var scrumnameP = document.createElement("p");
	for (var i = 0; i < scrumMasternameJS.length; i++) {
		var textP = document.createTextNode("Scrum Master: "+scrumMasternameJS[i]);
		scrumnameP.appendChild(textP);
	}

	var productownerP = document.createElement("p");
	for (var i = 0; i < productOwnernameJS.length; i++) {
		var textP = document.createTextNode("Product Owner: "+productOwnernameJS[i]);
		productownerP.appendChild(textP);
		
	}

	/*
		Añadimos clases a los elementos creandos anteriormente.
	*/
	divInfo.setAttribute("class", "info-project");
	titleH2.setAttribute("class", "titleh2-project");

	/*
		Añadimos h2, p, br dentro de nuestro elemento DIV
	*/
	divInfo.appendChild(titleH2);
	divInfo.appendChild(nameP);
	divInfo.appendChild(descripP);
	divInfo.appendChild(scrumnameP);
	divInfo.appendChild(productownerP);
	insertAfter(elementNav, divInfo);
	
}