function insertAfter(e,i){
	if(e.nextSibling){
		e.parentNode.insertBefore(i,e.nextSibling);

	} else {
		e.parentNode.appendChild(i);
	}
}
/**
 * Nos mostrará la información de los proyectos
 */
function showInfoProject() {
	//var infoDiv = document.getElementById("divInfo").getElementsByClassName("info-Project")[0];
	var elementNav = document.getElementsByTagName("nav")[0];
	addElement(elementNav, "div", undefined, ["class=row info-project", "name=divInfo"]);
	var divInfo = document.getElementsByName("divInfo")[0];
	addElement(divInfo, "h3", infoProject[0], ["class=titleh2-project"]);

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

	var divSprint = document.createElement("div");
	divSprint.setAttribute("class", "collapsible-header");

	divSprint.setAttribute("idSprint", Position + 1);
	var textSprint = document.createElement("p");
	var text = document.createTextNode("Sprint " + arraySprint[Position][0]);
	textSprint.setAttribute("class", "SprintLetters");
	textSprint.appendChild(text);

	//Colors Sprints
	if (arraySprint[Position][4] == 0) {
		divSprint.style.backgroundColor = "grey";
	} else if (arraySprint[Position][4] == 1) {
		divSprint.style.backgroundColor = "green";
	} else if (arraySprint[Position][4] == 2) {
		divSprint.style.backgroundColor = "black";
	}

	divSprint.appendChild(textSprint);

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
		
function showSprintInfo() {
	var lastdiv = document.getElementsByClassName("info-project")[0];

	var sprintCont = addElement(lastdiv, "div", undefined, ["class=container", "name=SprintandBLContrainer"])
	addElement(sprintCont, "div", undefined, ["class=row", "id=SprintandBLRow"])

	if (typeof arraySprint !== 'undefined' && arraySprint.length > 0 && typeof arraySprint !== 'undefined' && arraySprint.length > 0) {
		var divSprints = addElement(SprintandBLRow, "div", undefined, ["id=infoSprints", "class= col s6"]);
		addElement(divSprints, "ul", undefined, ["id=listForClicks", "class=collapsible"]);

		for (var i = 0; i < arraySprint.length; i++) {
			showSprintInfoOneByOne(i);

		}
		var divBackLog = document.createElement("div");
		divBackLog.setAttribute("id", "divBackLog");
		divBackLog.setAttribute("class", "col s6");
		var listbacklog = document.createElement("ul");
		listbacklog.setAttribute("id", "sortable1");


		//Backlog
		if (typeof arrayHWnull !== 'undefined' && arrayHWnull.length > 0) {
			for (var i = 0; i < arrayHWnull.length; i++) {
				var listBL = document.createElement("li");
				var elementBL = document.createElement("p");
				elementBL.innerText = (arrayHWnull[i][1]);
				elementBL.setAttribute("idTask", arrayHWnull[i][0]);
				listBL.appendChild(elementBL);
				listbacklog.appendChild(listBL);
			}
		}

		divBackLog.appendChild(listbacklog);
		//Boton añadir especificacion
		if (tipo == 2) {

			var AddButton = addElement(divBackLog, "input", undefined, ["id=buttonAdd", "type=image", "src=images/add.jpeg", "align=right", "class=inputImage"])
			AddButton.addEventListener("click", addTask);
			
			addElement(divBackLog, "input", undefined, ["type=text", "class=input-text"])
		}
		//Boton añadir especificacion

		SprintandBLRow.appendChild(divBackLog);
	}
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


//Para hacer click en los Sprints
var options;
var elem = document.querySelector('.collapsible');
var instance = new M.Collapsible(elem, {
	// inDuration: 1000,
	// outDuration: 1000
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(elems, options);
});
