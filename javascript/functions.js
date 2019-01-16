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


function showSprintInfoOneByOne(Position) {
	var list = document.getElementById("listForClicks");
	var elementlist = document.createElement("li");
	

	var divSprint = addElement(elementlist, "div", undefined, ["class=collapsible-header sprintNumber", "idSprint="+ Position + 1]);
	if (tipo==1) {
		if (arraySprint[Position][4] == 2) {
			addElement(divSprint, "i", "lock_open", ["class=large material-icons green-text btn-hoverable", "onclick=editarSprint()"]);
		} else {
			addElement(divSprint, "i", "lock_outline", ["class=large material-icons "]);
		}
	}
	addElement(divSprint, "p", "Sprint " + arraySprint[Position][0], ["class=SprintLetters white-text"]);

	
	var dateSprint = new Date();
	var day = dateSprint.getDate();
	var month = ""+dateSprint.getMonth()+1;
	var year = dateSprint.getFullYear();
	var today = year+"-"+month+"-"+day;

	if(tipo==1 && today<arraySprint[Position][2]){
		
		addElement(divSprint, "i", "cancel", ["class=material-icons red-text terminateSprint", "onclick=eliminarSprint()"]);
	}

	//Colors Sprints
	if (arraySprint[Position][4] == 0) {
		divSprint.classList.add("grey");
	} else if (arraySprint[Position][4] == 1) {
		divSprint.classList.add("green");
	} else if (arraySprint[Position][4] == 2) {
		divSprint.classList.add("black");
	}

	var divPSprint = document.createElement("div");
	divPSprint.setAttribute("class", "infoSprint collapsible-body");

	var divhours = document.createElement("div");
	divhours.setAttribute("class", "divhours");
	var texth = document.createElement("p");
	texth.innerText="Horas:";

 

	//Mostrar segun el usuario
	if(tipo==1){
		var inputHours = document.createElement("INPUT");
  		inputHours.setAttribute("type", "number");
  		inputHours.setAttribute("class", (Position+1)+"edit");
  		inputHours.setAttribute("value", arraySprint[Position][1]);
  		inputHours.hidden=false;
	}else{
		var inputHours  = document.createElement("p");
		inputHours.innerText=(""+arraySprint[Position][1]);
  	}
	
  	
	divhours.appendChild(texth);
	divhours.appendChild(inputHours);

	divPSprint.appendChild(divhours);
	//Fecha de inicio
	var startDate = document.createElement("div");

	startDate.setAttribute("class", "startDate");	
	var textsd = document.createElement("p");

	textsd.innerText=("Fecha de inicio:");
	startDate.appendChild(textsd);

	//Mostrar segun el usuario
	if(tipo==1){
		var inputstartDate = document.createElement("INPUT");
  		inputstartDate.setAttribute("type", "date");
  		inputstartDate.setAttribute("class", (Position+1)+"edit");
  		inputstartDate.setAttribute("value", arraySprint[Position][2]);
  		inputstartDate.disabled = true;
	}else{
		var inputstartDate  = document.createElement("p");
		inputstartDate.innerText=(""+arraySprint[Position][2]);
  	}

  	startDate.appendChild(inputstartDate);
	divPSprint.appendChild(startDate);
	//fecha final
	var endDate = document.createElement("div");		
	endDate.setAttribute("class", "endDate");
	var texteD = document.createElement("p");
	texteD.innerText=("Fecha de fin:");
	endDate.appendChild(texteD);

	//Mostrar segun el usuario
	if(tipo==1){
		var inputEndDate = document.createElement("INPUT");
  		inputEndDate.setAttribute("type", "date");
  		inputEndDate.setAttribute("class", (Position+1)+"edit");
  		inputEndDate.setAttribute("value", arraySprint[Position][3]);
  		inputEndDate.disabled = true;
	}else{
		var inputEndDate  = document.createElement("p");
		inputEndDate.innerText=(arraySprint[Position][3]);
  	}

	
  	endDate.appendChild(inputEndDate);
	divPSprint.appendChild(endDate);
	elementlist.appendChild(divSprint);	
	elementlist.appendChild(divPSprint);


	var listboxMoveDIV = document.createElement("div");
	listboxMoveDIV.setAttribute("class", "listboxMoveDIV");

	var listboxMove = document.createElement("ul");
	listboxMove.setAttribute("class", "TaskSprint"+(Position+1));
	listboxMoveDIV.appendChild(listboxMove);
	divPSprint.appendChild(listboxMoveDIV);

	for (var hw = 0; hw < arrayHW.length; hw++) {
		if (arrayHW[hw][3]==arraySprint[Position][5]) {
			var elementList = document.createElement("li");

			var elementListDiv = document.createElement("div");
			elementListDiv.setAttribute("class", "OneHomework row");
			elementList.appendChild(elementListDiv);
			var elementListP = document.createElement("p");

			elementListP.setAttribute("class", "col 10");

			elementListP.innerText=(arrayHW[hw][1]);

			elementListP.setAttribute("idTask", arrayHW[hw][4]);
			elementListDiv.appendChild(elementListP);
;	

			//Mostrar segun el usuario
			if(tipo==1){
				var inputHoursTask = document.createElement("INPUT");
  				inputHoursTask.setAttribute("type", "number");
  				inputHoursTask.setAttribute("class", (Position+1)+"edit col 2");
  				inputHoursTask.setAttribute("value", arrayHW[hw][0]);
  				inputHoursTask.disabled = true;
			}else{
				var inputHoursTask  = document.createElement("p");
				inputHoursTask.innerText=(arrayHW[hw][0]+"h");
  				inputHoursTask.setAttribute("class", (Position+1)+"edit col 2");
		  	}	
  			elementListDiv.appendChild(inputHoursTask);
			listboxMove.appendChild(elementList);
		}
	}
	list.appendChild(elementlist);
}


function showSprintInfo(){	
	var infoProjectDiv = document.getElementsByClassName("info-project")[0];
	//Div contanier para materialize
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

	var divBackLogtext = document.createElement("p");
	divBackLogtext.innerText="Espeficicaciones:";
	divBackLog.appendChild(divBackLogtext);

	var listbacklog = document.createElement("ul");
	listbacklog.setAttribute("id", "sortable1");
	
	
	//Espeficicaciones del Backlog
	if (typeof arrayHWnull !== 'undefined' && arrayHWnull.length > 0 ) {
		for (var i = 0; i< arrayHWnull.length; i++) {				
			var listBL = document.createElement("li");
			var elementBL = document.createElement("p");
			elementBL.innerText=(arrayHWnull[i][1]);
			elementBL.setAttribute("idTask", arrayHWnull[i][0]);
			elementBL.setAttribute("class", "OneHomework");
			listBL.setAttribute("name","mylistli");
			listBL.setAttribute("class", "textBL row");
			
			listBL.appendChild(elementBL);
			if(tipo==2){				
				elementBL.setAttribute("class", "col s9 OneHomework");
				listBL.appendChild(objectMover(true));
				listBL.appendChild(objectMover(false));
				listBL.appendChild(objectDEL());
			}
			listbacklog.appendChild(listBL);
		}
		divBackLog.appendChild(listbacklog);
	}

	if(tipo==2){
		NewTaskInterface(divBackLog,SprintandBLRow);
	}

	SprintandBLRow.appendChild(divBackLog);
}

/**
 * Boton añadir especificacion 
 */
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

/**
 * Añade una tarea al backlog
 */
function addTask() {
	var element = document.getElementsByClassName("OneHomework");
	var pos = element.length-1;
	element = element[pos]
	var DivID = document.getElementById("sortable1");
	var contentTask = document.getElementsByTagName("input")[1].value;
	if (contentTask == "") {
		return false;
	}
	var elementLi = addElement(DivID, "li", undefined, ["name=mylistli", "class=textBL row"])
	addElement(elementLi, "p", contentTask, ["class=col s9 OneHomework"]);
	elementLi.appendChild(objectMover(true));
	elementLi.appendChild(objectMover(false));
	elementLi.appendChild(objectDEL());
	
}

/**
 * Función que permite editar los sprints que todavía no están activos/terminados
 */
function editarSprint() {
	//alert("hola");
}

/**
 * Funcón que añadirá un botón para poder crear formularios de sprints
 * @param {HTMLCollection} divSprints div al cual queremos añadir el botón
 */
function buttonNewSprint(divSprints){
	addElement(divSprints, "a", "Crear Sprint", ["name=btnAddSprint", "id=newSprintBtn", "onclick=addSprintForm()", "class=btn waves-effect center-align"])
}


/**
 * Funcion que genera el formulario para añadir un nuevo sprint.
 */
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
		var element = createButton("i", "keyboard_arrow_up", ["class=col s1 small material-icons", "onclick=elementUP(this)"]);
		return element;
	} else {
		var element = createButton("i", "keyboard_arrow_down", ["class=col s1 small material-icons", "onclick=elementDOWN(this)"]);
		return element;
	}
}

function objectDEL(){
	var DELelement = createButton("i", "delete", ["class=col s1 small material-icons", "onclick=elementDEL(this)"]);
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

function eliminarSprint(){
	for(var i=0; i>arraySprint.length;i++){
		var numberSprint = document.getElementsByClassName("SprintLetters white-text")[i].textContent;
		var separateText = numberSprint.split(" ");
		if(arraySprint[i][0]==separateText[1]){
			var form = document.createElement("form");
			form.setAttribute("action", "removeSprint.php");
			form.setAttribute("method", "post");
			var input = document.createElement("input");
			input.setAttribute("type", "hidden");
			input.setAttribute("name", "numSprint");
			input.setAttribute("value", separateText[1]);
			form.appendChild(input);
			form.submit();
		}
	}
}
