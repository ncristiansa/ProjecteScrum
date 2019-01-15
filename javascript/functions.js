if (tipo == 1) {
	scrumMaster();
}

function scrumMaster() {
	var boton = createButton("a", "Crear Proyecto", ["id=buttonProject", "class=btn card-title", "onclick=formulario()"])
	var elementodiv = document.getElementsByClassName("list-projects")[0];
	elementodiv.appendChild(boton);
}

/**
 * Nos mostrará la información de los proyectos
 */
function showInfoProject() {
	var elementNav = document.getElementById("contenido-web");
	addElement(elementNav, "div", undefined, ["class=row info-project", "name=divInfo"]);
	var divInfo = document.getElementsByName("divInfo")[0];
	addElement(divInfo, "h3", infoProject[0], ["class=titleh3-project"]);

	var descriptionText = "Descripción: " + infoProject[1];
	var scrumMName = "Scrum Master: " + infoProject[2];
	var productOName = "Product Owner: " + infoProject[3];

	addElement(divInfo, "p", infoProject[0], ["class=descriptionInfo"]);
	addElement(divInfo, "p", descriptionText, ["class=descriptionInfo"]);
	addElement(divInfo, "p", scrumMName, ["class=descriptionInfo"]);
	addElement(divInfo, "p", productOName, ["class=descriptionInfo"]);
}

function addTask() {
	var DivID = document.getElementById("divBackLog").getElementsByTagName("p")[0];
	var contentTask = document.getElementsByTagName("input")[1].value;
	addElement(contentTask, "p", undefined, ["class=OneHomework"]);
	addEventListener(DivID, contentTask, undefined, undefined);
}


function showSprintInfoOneByOne(Position) {
	var list = document.getElementById("listForClicks");
	var elementlist = document.createElement("li");

	var divSprint = addElement(elementlist, "div", undefined, ["class=collapsible-header sprintNumber", "idSprint="+ Position + 1]);
	if (arraySprint[Position][4] == 2) {
		addElement(divSprint, "i", "lock_open", ["class=large material-icons green-text btn-hoverable", "onclick=editarSprint()"]);
	} else {
		addElement(divSprint, "i", "lock_outline", ["class=large material-icons "]);
	}
	addElement(divSprint, "p", "Sprint " + arraySprint[Position][0], ["class=SprintLetters white-text"]);
	addElement(divSprint, "i", "cancel", ["class=material-icons red-text terminateSprint", "onclick=eliminarSprint()"]);

	//Colors Sprints
	if (arraySprint[Position][4] == 0) {
		divSprint.classList.add("grey");
	} else if (arraySprint[Position][4] == 1) {
		divSprint.classList.add("green");
	} else if (arraySprint[Position][4] == 2) {
		divSprint.classList.add("black");
	}

	var divPSprint = document.createElement("div");
	divPSprint.setAttribute("class", "infoSprint");
	divPSprint.setAttribute("class", "collapsible-body");

	var hours = document.createElement("p");
	var texth = document.createTextNode("Horas: " + arraySprint[Position][1]);
	hours.appendChild(texth);
	divPSprint.appendChild(hours);

	var startDate = document.createElement("p");
	var textsd = document.createTextNode("Fecha de inicio: " + arraySprint[Position][2]);
	startDate.appendChild(textsd);
	divPSprint.appendChild(startDate);

	var endDate = document.createElement("p");
	var texteD = document.createTextNode("Fecha de fin: " + arraySprint[Position][3]);
	endDate.appendChild(texteD);
	divPSprint.appendChild(endDate);

	for (var hw = 0; hw < arrayHW.length; hw++) {
		if (arrayHW[hw][3] == arraySprint[Position][5]) {
			var elementList = document.createElement("p");
			elementList.innerText = (arrayHW[hw][4] + ". " + arrayHW[hw][1] + " " + arrayHW[hw][2] + "h");
			elementList.setAttribute("class", "OneHomework");
			elementList.setAttribute("orderHW", arrayHW[hw][4]);
			divPSprint.appendChild(elementList);
		}

	}


	elementlist.appendChild(divSprint);
	elementlist.appendChild(divPSprint);
	list.appendChild(elementlist);

}
		
function showSprintInfo(){	
	var infoProjectDiv = document.getElementsByClassName("info-project")[0];
	//Div ontanier para materialize
	var SprintandBLContrainer = document.createElement("div");
	SprintandBLContrainer.setAttribute("class", "container");
	SprintandBLContrainer.setAttribute("id", "SprintandBLContrainer");
	//Div row para materialize
	var SprintandBLRow = document.createElement("div");
	SprintandBLRow.setAttribute("class", "row");
	SprintandBLRow.setAttribute("id", "SprintandBLRow");

	SprintandBLContrainer.appendChild(SprintandBLRow);
	insertAfter(infoProjectDiv,SprintandBLContrainer);

	if (typeof arraySprint !== 'undefined' && arraySprint.length > 0){
		//Crear div para sprints
		var divSprints = document.createElement("div");
		divSprints.setAttribute("id", "infoSprints");		
		divSprints.setAttribute("class", "col s6");
		var listForClicks = document.createElement("ul");
		listForClicks.setAttribute("id","listForClicks")
		listForClicks.setAttribute("class","collapsible");
		divSprints.appendChild(listForClicks);
		
		SprintandBLRow.appendChild(divSprints);	
		//	Crear uno por uno cada sprint
		for (var i = 0; i< arraySprint.length; i++) {
			showSprintInfoOneByOne(i);			
		}
		//Crear boton si hay sprints
		if (tipo==1){	
			buttonNewSprint(divSprints);
		}
	//Crear boton añadir sprints si no los hay
	}else if (tipo==1){
		var divSprints = document.createElement("div");
		divSprints.setAttribute("id", "infoSprints");		
		divSprints.setAttribute("class", "col s6");
		SprintandBLRow.appendChild(divSprints);
		buttonNewSprint(divSprints);
	}

	//Div de BackLog
	var divBackLog = document.createElement("div");
	divBackLog.setAttribute("id", "divBackLog");		
	divBackLog.setAttribute("class", "col s6");
	var listbacklog = document.createElement("ul");
	listbacklog.setAttribute("id", "sortable1");
	
	//Espeficicaciones del Backlog
	if (typeof arrayHWnull !== 'undefined' && arrayHWnull.length > 0 ) {
		for (var i = 0; i< arrayHWnull.length; i++) {				
			var listBL = document.createElement("li");
			var elementBL = document.createElement("p");
			elementBL.innerText=(arrayHWnull[i][1]);
			elementBL.setAttribute("idTask", arrayHWnull[i][0]);
			listBL.setAttribute("name","mylistli");
			listBL.setAttribute("class", "textBL");
			
			listBL.appendChild(elementBL);
			listBL.appendChild(objectMover(true));
			listBL.appendChild(objectMover(false));
			listBL.appendChild(objectDEL());
			listbacklog.appendChild(listBL);
		}	
		divBackLog.appendChild(listbacklog);
	}

	if(tipo==2){
		NewTaskInterface(divBackLog,SprintandBLRow);
	}

	SprintandBLRow.appendChild(divBackLog);
}

//Boton añadir especificacion
function NewTaskInterface(divBackLog,SprintandBLRow){

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
	divBackLog.appendChild(AddButton);
	divBackLog.appendChild(Task); 
}

function addTask() {
	var element = document.getElementsByClassName("OneHomework");
	var pos = element.length-1;
	element = element[pos]
	var DivID = document.getElementById("divBackLog").getElementsByTagName("p")[0];
	var contentTask = document.getElementsByTagName("input")[1].value;
	if (contentTask == "") {
		return false;
	}
	addElement(DivID, "p", contentTask, ["class=OneHomework"])
}


function editarSprint() {
	alert("hola");
}

function eliminarSprint() {
	alert("que te borro el sprint");
}

function buttonNewSprint(divSprints){
	addElement(divSprints, "a", "Crear Sprint", ["name=btnAddSprint", "id=newSprintBtn", "onclick=addSprintForm()", "class=btn waves-effect center-align"])

}


//Funcion que genera el formulario para añadir un nuevo sprint.
function generateLabel(Tag, Name, Input, Type, NameInput){
	var elementLabel = document.createElement(Tag);
	var nameLabel = document.createTextNode(Name);
	elementLabel.setAttribute("class", "input-field col s10");
	elementLabel.appendChild(nameLabel);

	var elementInput = document.createElement(Input);
	elementInput.setAttribute("type", Type);
	elementInput.setAttribute("name", NameInput);
	elementInput.setAttribute("class", "input-field col s10");

	elementLabel.appendChild(elementInput);
	return elementLabel;
}

function objectMover(position){
	if (position) {
		var element = createButton("i", "keyboard_arrow_up", ["class=small material-icons", "onclick=elementUP(this)"]);
		return element;
	} else {
		var element = createButton("i", "keyboard_arrow_down", ["class=small material-icons", "onclick=elementDOWN(this)"]);
		return element;
	}
}

function objectDEL(){
	var DELelement = createButton("i", "delete", ["class=small material-icons", "onclick=elementDEL(this)"]);
	return DELelement;
}

function elementUP(element){
	var elementoAnterior = element.parentNode.previousSibling;

	var elementoClonado = element.parentNode.cloneNode(true);
	var elementoRaiz = element.parentNode.parentNode;

	
	var elementoPadre = element.parentNode;
	elementoPadre.parentNode.removeChild(elementoPadre);
	elementoRaiz.insertBefore(elementoClonado, elementoAnterior);
}

function elementDOWN(element){
	var elementoPosterior = element.parentNode.nextSibling.nextSibling;
	//Clonamos el elemento
	var elementoClonado = element.parentNode.cloneNode(true);
	//Accedemos al elemento <ul> 
	var elementoRaiz = element.parentNode.parentNode;

	var elementoPadre = element.parentNode;
	
	elementoPadre.parentNode.removeChild(elementoPadre);	
	elementoRaiz.insertBefore(elementoClonado, elementoPosterior);
}

function elementDEL(element){
	var elementoPadre = element.parentNode;
	elementoPadre.parentNode.removeChild(elementoPadre);
} 

/**
 * Funciones para mostrar efectos de Materialize
 */
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(elems, options);

	//Para hacer click en los Sprints
	var options;
	var elem = document.querySelector('.collapsible');
});

