if(tipo==2 || tipo==3){
	showinfoProject();
	showSprintInfo();
	//showHomework();


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


function showSprintInfoOneByOne(Position){
	var elementdiv = document.getElementById("infoSprints");	
	var divSprint = document.createElement("div");
	divSprint.setAttribute("class", "SprintClick");
	var clickClass=Position+"SprintDIV";
	var textSprint = document.createElement("p");
	var text = document.createTextNode("Sprint "+arraySprint[Position][0]);
	textSprint.setAttribute("class", "SprintLetters");
	textSprint.appendChild(text);
	if (arraySprint[Position][4]==1) {
		divSprint.style.backgroundColor = "green";
	}else{
		divSprint.style.backgroundColor = "grey";
		}
	textSprint.addEventListener("click", function(){
		var x = document.getElementById(clickClass);
		  if (x.style.display === "none") {
		    x.style.display = "block";
		  } else {
		    x.style.display = "none";
		  }
	}); 
	divSprint.appendChild(textSprint);

	var divPSprint = document.createElement("div");
	divPSprint.setAttribute("class", "infoSprint");
	divPSprint.setAttribute("id",clickClass)

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
			
	elementdiv.appendChild(divSprint);			
	elementdiv.appendChild(divPSprint);

}

		
	
function showHomeworkInfoOneByOne(){
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
function showHomeworks(){
	var elementh2 = document.getElementsByTagName("h2")[0];
	var elementDiv = document.createElement("div");
	var titleh2 = document.createElement("h2");
	var texth2 = document.createTextNode("Especificaciones");
	titleh2.appendChild(texth2);
	var AddButton = document.createElement("input");
	AddButton.setAttribute("id", "buttonAdd");
	var Task = document.createElement("input");

	AddButton.addEventListener("click", addTask);
	AddButton.addEventListener("click", checkInputEmpty);
	var TaskUL = document.createElement("ul");
	
	var count = 0;
	while(count!=descriptionsJS.length){
		var newLi = document.createElement("li");
		var newText = document.createTextNode(descriptionsJS[count]);
		newLi.appendChild(newText);
		TaskUL.appendChild(newLi);
		count=count+1;
	}
	elementDiv.setAttribute("class", "info-project");
	titleh2.setAttribute("class", "titleh2-project");

	AddButton.setAttribute("type", "image");
	AddButton.setAttribute("src", "images/add.jpeg");
	AddButton.setAttribute("width", "25");
	AddButton.setAttribute("height", "25");
	AddButton.setAttribute("align", "right");

	Task.setAttribute("type", "text");
	Task.setAttribute("class", "task-text");

	elementDiv.appendChild(titleh2);
	elementDiv.appendChild(TaskUL);
	elementDiv.appendChild(AddButton);
	elementDiv.appendChild(Task);

	insertAfter(elementh2, elementDiv);
}

function addTask(){

	var myListLI = document.getElementsByTagName("ul")[0];
	var contentTask = document.getElementsByTagName("input")[1].value;
	var newContentLi = document.createElement("li");
	var newContentTask = document.createTextNode(contentTask);
	newContentLi.appendChild(newContentTask);
	myListLI.appendChild(newContentLi);

}	