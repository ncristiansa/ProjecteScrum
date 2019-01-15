
	showinfoProject();
	showSprintInfo();
//Para hacer click en los Sprints
var options;
var elem = document.querySelector('.collapsible');
  var instance = new M.Collapsible(elem, {
    // inDuration: 1000,
    // outDuration: 1000
  });

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
	var titleH2 = document.createElement("h3");
	
		var textH2 = document.createTextNode(infoProject[0]);
		titleH2.appendChild(textH2);

	var nameP = document.createElement("p");

		var textP = document.createTextNode("Nombre: "+infoProject[0]);
		nameP.appendChild(textP);

	
	var descripP = document.createElement("p");
		
		var textP = document.createTextNode("Descripción: "+infoProject[1]);
		descripP.appendChild(textP);

	
	var scrumnameP = document.createElement("p");

		var textP = document.createTextNode("Scrum Master: "+infoProject[2]);
		scrumnameP.appendChild(textP);


	var productownerP = document.createElement("p");

		var textP = document.createTextNode("Product Owner: "+infoProject[3]);
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

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });


 function editSprint(sprintinputs){
 	var active=document.getElementsByClassName("activeEdit");
 	if(active >0){
 		for (var i = 0; i < length.active; i++) {
 			active[i].remove("activeEdit");
 		}
		editSprint(sprintinputs);
	}else{
		var list = document.getElementsByClassName(sprintinputs+"edit");
		for (var i = 0; i < length.list; i++) {
 			list[i].disabled = true;
 			list[i].setAttribute("class","activeEdit");
 		}
	}
}

function showSprintInfoOneByOne(Position){
	var list = document.getElementById("listForClicks");	
	var elementlist = document.createElement("li");

	var divSprint = document.createElement("div");
	divSprint.setAttribute("class", "collapsible-header");


	if(tipo==1){
		//Candado se puede abrir o no
		if(arraySprint[Position][4]==0 || arraySprint[Position][4]==1){
			var icon =document.createElement("i");
			icon.innerText=	"outline";
			icon.setAttribute("class","large material-icons");
			divSprint.appendChild(icon);
		}else if(arraySprint[Position][4]==2){
			var icon =document.createElement("i");
			icon.innerText="outline";
			icon.setAttribute("class","large material-icons  green-text tooltipped");

			icon.setAttribute("data-tooltipped","Edítame!");

			divSprint.appendChild(icon);
			//icon.addEventListener("click", editSprint(Position+1));
		}	
	}



	divSprint.setAttribute("idSprint", Position+1);
	var textSprint = document.createElement("p");
	var text = document.createTextNode("Sprint "+arraySprint[Position][0]);
	textSprint.setAttribute("class", "SprintLetters");
	textSprint.appendChild(text);

	//Colors Sprints
	if (arraySprint[Position][4]==0) {
		divSprint.style.backgroundColor = "grey";
	}else if(arraySprint[Position][4]==1){
		divSprint.style.backgroundColor = "green";
	}else if(arraySprint[Position][4]==2){
		divSprint.style.backgroundColor = "black";
		divSprint.setAttribute("editable","true");
	}

	

	divSprint.appendChild(textSprint);	

	var divPSprint = document.createElement("div");
	divPSprint.setAttribute("class", "infoSprint");
	divPSprint.setAttribute("class", "collapsible-body");

	var hours = document.createElement("p");
	var texth= document.createTextNode("Horas:");

 

	//Mostrar segun el usuario
	if(tipo==1){
		var inputHours = document.createElement("INPUT");
  		inputHours.setAttribute("type", "number");
  		inputHours.setAttribute("class", Position+1+"edit");
  		inputHours.setAttribute("value", arraySprint[Position][1]);
  		inputHours.disabled = true;
	}else{
		var inputHours  = document.createElement("p");
		inputHours.innerText=(""+arraySprint[Position][1]);
  	}
	
  	
	hours.appendChild(texth);
	hours.appendChild(inputHours);

	divPSprint.appendChild(hours);
	//Fecha de inicio
	var startDate = document.createElement("p");
	var textsd= document.createTextNode("Fecha de inicio:");
	startDate.appendChild(textsd);

	//Mostrar segun el usuario
	if(tipo==1){
		var inputstartDate = document.createElement("INPUT");
  		inputstartDate.setAttribute("type", "date");
  		inputstartDate.setAttribute("class", Position+1+"edit");
  		inputstartDate.setAttribute("value", arraySprint[Position][2]);
  		inputstartDate.disabled = true;
	}else{
		var inputstartDate  = document.createElement("p");
		inputstartDate.innerText=(""+arraySprint[Position][2]);
  	}

  	startDate.appendChild(inputstartDate);
	divPSprint.appendChild(startDate);
	//fecha final
	var endDate = document.createElement("p");
	var texteD= document.createTextNode("Fecha de fin:");
	endDate.appendChild(texteD);

	//Mostrar segun el usuario
	if(tipo==1){
		var inputEndDate = document.createElement("INPUT");
  		inputEndDate.setAttribute("type", "date");
  		inputEndDate.setAttribute("class", Position+1+"edit");
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

	var listboxMove = document.createElement("ul");
	listboxMove.setAttribute("class", "TaskSprint"+Position+1);
	divPSprint.appendChild(listboxMove);
	for (var hw = 0; hw < arrayHW.length; hw++) {
		if (arrayHW[hw][3]==arraySprint[Position][5]) {
			var elementList = document.createElement("li");
			elementList.innerText=(arrayHW[hw][1]);
			elementList.setAttribute("class", "OneHomework");
			elementList.setAttribute("idTask", arrayHW[hw][4]);

			//Mostrar segun el usuario
			if(tipo==1){
				var inputHoursTask = document.createElement("INPUT");
  				inputHoursTask.setAttribute("type", "number");
  				inputHoursTask.setAttribute("class", Position+1+"edit");
  				inputHoursTask.setAttribute("value", arraySprint[Position][1]);
  				inputHoursTask.disabled = true;
			}else{
				var inputHoursTask  = document.createElement("p");
				inputHoursTask.innerText=(arraySprint[Position][1]+"h");
		  	}	

  			elementList.appendChild(inputHoursTask);
			listboxMove.appendChild(elementList);
		}
		
	}

			
	
	list.appendChild(elementlist);

}


function buttonNewSprint(divSprints){
	var btnNewSprint = document.createElement("button");	
	btnNewSprint.setAttribute("id","newSprintBtn");
	btnNewSprint.setAttribute("class","btn waves-effect center-align");
	var textbotton=document.createTextNode("Crear Sprint");
	btnNewSprint.appendChild(textbotton);
	divSprints.appendChild(btnNewSprint);
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
		divBackLog.innerText="Espeficicaciones:";
		var listbacklog = document.createElement("ul");
		listbacklog.setAttribute("id", "Backloglist");
		
//Espeficicaciones del Backlog
	if (typeof arrayHWnull !== 'undefined' && arrayHWnull.length > 0 ) {
		for (var i = 0; i< arrayHWnull.length; i++) {				
			var listBL = document.createElement("li");
			var elementBL = document.createElement("p");
			elementBL.innerText=(arrayHWnull[i][1]);
			elementBL.setAttribute("idTask", arrayHWnull[i][0]);
			listBL.appendChild(elementBL);
			listbacklog.appendChild(listBL);
		}	
	divBackLog.appendChild(listbacklog);
	}
	if(tipo==2){
		NewTaskInterface(divBackLog,SprintandBLRow);
	}
	SprintandBLRow.appendChild(divBackLog);
	
}

function addTask(){

	var DivID = document.getElementById("divBackLog");
	
	var contentTask = document.getElementsByTagName("input")[1].value;
	var newContentP = document.createElement("p");
	newContentP.setAttribute("class", "OneHomework");
	var newContentTask = document.createTextNode(contentTask);
	newContentP.appendChild(newContentTask);
	DivID.appendChild(newContentP);

}	
