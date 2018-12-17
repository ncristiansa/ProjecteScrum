if(tipo==2 || tipo==3){
	showinfoProject();
	showSprintInfo();
	showHomework();
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


function displayText(clase) {
  var clase = document.getElementsByClassName(clase);
  if (clase.style.display === "none") {
    clase.style.display = "block";
  } else {
    clase.style.display = "none";
  }
}

function showSprintInfo(){
	var elementdiv = document.getElementsByTagName("div")[0];
	var divSprints = document.createElement("div");
	divSprints.setAttribute("id", "infoSprints");
	//Posicion Array Sprints
	var PAS=0;
	while (PAS<=arraySprint.length){
		var divSprint = document.createElement("div");
		divSprint.setAttribute("class", "SprintClick");
		var clickClass=PAS+"SprintDIV";
		var textSprint = document.createTextNode("Sprint "+arraySprint[PAS][0]);
		textSprint.setAttribute("class", "SprintLetters");
		textSprint.addEventListener("click",displayText(clickClass));
		if (arraySprint[PAS][4]==1) {
				textSprint.style.backgroundColor = "green";
		}else{
				textSprint.style.backgroundColor = "grey";
			}
		divSprint.appendChild(textSprint);

		var hours= document.createTextNode("Horas: "+arraySprint[PAS][1]);
		hours.setAttribute("class", clickClass);
		hours.setAttribute("class", "infoSprint");
		divSprint.appendChild(hours);

		var startDate= document.createTextNode("Fecha de inicio: "+arraySprint[PAS][2]);
		startDate.setAttribute("class", clickClass);
		startDate.setAttribute("class", "infoSprint");
		divSprint.appendChild(startDate);

		var endDate= document.createTextNode("Fecha de fin: "+arraySprint[PAS][3]);
		endDate.setAttribute("class", clickClass);
		endDate.setAttribute("class", "infoSprint");
		divSprint.appendChild(endDate);
		PAS++;
		//POstion Array Homework
		var PAHW=0;
		while(PAHW<=arrayHW.length){
			if (arraySprint[PAS][5]==arrayHW[PAHW][3]) {
				var task= document.createTextNode(arrayHW[PAHW][1]+" "+arrayHW[PAHW][2]+"h");
				task.setAttribute("class", clickClass);
				task.setAttribute("class", "infoSprint");
				divSprint.appendChild(task);

			}
			PAHW++;
		}
		divSprints.appendChild(divSprint);

	}
	document.body.appendChild(divSprints);

}

function showHomework(){
	var elementdiv = document.getElementsByTagName("div")[0];
	var divTasks = document.createElement("div");
	divTasks.setAttribute("id", "infoHomework");
	var list = document.createElement("ul");
	list.setAttribute("id", "listHW");
	var PAHW=0;
	while(PAHW<=arrayHW.length){
		var elementList = document.createElement("li");
		elementList.innerText=(arrayHW[PAHW][4]+". "+arrayHW[PAHW][1]);
		elementList.setAttribute("class", "OneHomework");
		elementList.setAttribute("orderHW", arrayHW[PAHW][4]);
		list.appendChild(elementList);
		PAHW++;
	}	
	divTasks.appendChild(list);
	document.body.appendChild(divTasks);	
}





