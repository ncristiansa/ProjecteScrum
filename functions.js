
	showinfoProject();
	showSprintInfo();

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
	
		var textH2 = document.createTextNode(nameProjectJS[0]);
		titleH2.appendChild(textH2);

	var nameP = document.createElement("p");

		var textP = document.createTextNode("Nombre: "+nameProjectJS[0]);
		nameP.appendChild(textP);

	
	var descripP = document.createElement("p");
		
		var textP = document.createTextNode("Descripción: "+descriptionProjectJS[0]);
		descripP.appendChild(textP);

	
	var scrumnameP = document.createElement("p");

		var textP = document.createTextNode("Scrum Master: "+scrumMasternameJS[0]);
		scrumnameP.appendChild(textP);


	var productownerP = document.createElement("p");

		var textP = document.createTextNode("Product Owner: "+productOwnernameJS[0]);
		productownerP.appendChild(textP);

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


function showSprintInfoOneByOne(Position){
	var elementdiv = document.getElementById("infoSprints");	
	var divSprint = document.createElement("div");
	divSprint.setAttribute("class", "SprintClick");
	var clickId=Position+"SprintDIV";
	var textSprint = document.createElement("p");
	var text = document.createTextNode("Sprint "+arraySprint[Position][0]);
	textSprint.setAttribute("class", "SprintLetters");
	textSprint.appendChild(text);
	if (arraySprint[Position][4]==0) {
		divSprint.style.backgroundColor = "grey";
	}else if(arraySprint[Position][4]==1){
		divSprint.style.backgroundColor = "green";
	}else if(arraySprint[Position][4]==2){
		divSprint.style.backgroundColor = "black";
		divSprint.style.color= "white";
		divSprint.style.borderColor="black";

		}
	textSprint.addEventListener("click", function(){
		var x = document.getElementById(clickId);
		  if (x.style.display === "none") {
		    x.style.display = "block";
		  } else {
		    x.style.display = "none";
		  }
	}); 
	divSprint.appendChild(textSprint);

	var divPSprint = document.createElement("div");
	divPSprint.setAttribute("class", "infoSprint");
	divPSprint.setAttribute("id",clickId)

	var hours = document.createElement("p");
	var texth= document.createTextNode("Horas: "+arraySprint[Position][1]);
	hours.appendChild(texth);
	divPSprint.appendChild(hours);

	var startDate = document.createElement("p");
	var textsd= document.createTextNode("Fecha de inicio: "+arraySprint[Position][2]);
	startDate.appendChild(textsd);
	divPSprint.appendChild(startDate);

	var endDate = document.createElement("p");
	var texteD= document.createTextNode("Fecha de fin: "+arraySprint[Position][3]);
	endDate.appendChild(texteD);
	divPSprint.appendChild(endDate);

	for (var hw = 0; hw < arrayHW.length; hw++) {
		if (arrayHW[hw][3]==arraySprint[Position][5]) {
			var elementList = document.createElement("p");
			elementList.innerText=(arrayHW[hw][4]+". "+arrayHW[hw][1]+" "+arrayHW[hw][2]+"h");
			elementList.setAttribute("class", "OneHomework");
			elementList.setAttribute("orderHW", arrayHW[hw][4]);
			divPSprint.appendChild(elementList);
		}
		
	}
	if(tipo==2){
		var AddButton = document.createElement("input");
		AddButton.setAttribute("id", "buttonAdd");
		var Task = document.createElement("input");
		AddButton.addEventListener("click", addTask);
		AddButton.setAttribute("type", "image");
		AddButton.setAttribute("src", "images/add.jpeg");
		AddButton.setAttribute("width", "25");
		AddButton.setAttribute("height", "25");
		AddButton.setAttribute("align", "right");

		Task.setAttribute("type", "text");
		Task.setAttribute("class", "input-text");
		divPSprint.appendChild(AddButton);
		divPSprint.appendChild(Task);
	}

			
	elementdiv.appendChild(divSprint);			
	elementdiv.appendChild(divPSprint);

}

function showSprint(element) {
	// Buscamos class = activo
	// if (class[activo]) = hideSprint(element)
	// Añadir element > class = activo
	// Abrimos el div
}

function hideSprint(element) {
	// Buscamos class = activo
	// Cerramos class activo
}



		
function showSprintInfo(){
	if (arraySprint!==null || arrayHW!==null){
		var elementdiv = document.getElementsByTagName("div")[0];
		var divSprints = document.createElement("div");
		divSprints.setAttribute("id", "infoSprints");
		insertAfter(elementdiv,divSprints);
		for (var i = 0; i< arraySprint.length; i++) {
			showSprintInfoOneByOne(i);

		} 
	}
}

function addTask(){

	var myListP = document.getElementsByClassName("OneHomework")[2];
	var contentTask = document.getElementsByTagName("input")[1].value;
	var newContentP = document.createElement("p");
	newContentP.setAttribute("class", "OneHomework");
	var newContentTask = document.createTextNode(contentTask);
	newContentP.appendChild(newContentTask);
	insertAfter(myListP, newContentP);

}	