/**
 * Función que genera el formulario para crear proyectos
 */
function formulario() {
    var elementoBoton = document.getElementById("buttonProject");
    disableButton(elementoBoton);

    var elementodiv = document.getElementsByClassName("list-projects")[0];
    addElement(elementodiv, "div", undefined, ["class=row", "id=formularioProyecto"]);
    var divFormProject = document.getElementById("formularioProyecto");
    var formProject = addElement(divFormProject, "form", undefined, ["action=vistainicial.php","method=post","id=createProject"]);

    createInputField(formProject, "nombre-proyecto", "Nombre del Proyecto", true, "nproyecto");
    createInputField(formProject, "descripcion", "Descripción", false, "descripcion");
    crearComboBox(formProject, "Scrum Master", scrumjs, "scrum");
    crearComboBox(formProject, "Product Owner", producjs, "produ");
    crearComboBox(formProject, "Grupo Developers", groupjs, "developers");

    addElement(formProject, "a", "Guardar Proyecto", ["id=saveProject", "class=btn card-title", "onclick=createProject()"]);
}


/**
 * Se le pasa un padre y crea un input text con el texto que se le pase. Permite elegir si requiere validar o no
 * @param {HTMLCollection} parent Padre al que se añadirá el elemento
 * @param {HTMLCollection} placeholder Texto del placeholder, también utilizado para el id y el for
 * @param {Text} text Texto que tendrá el input
 * @param {boolean} ifValidate Se le pasa un boleano o undefined. Si es false, no validará nada
 */
function createInputField(parent, placeholder, text, ifValidate, className) {
    var newParent = addElement(parent, "div", undefined, ["class=row"]);
    var inputField = addElement(newParent, "div", undefined, ["class=input-field"]);
    if (ifValidate === false) {
        var theInput = addElement(inputField, "input", undefined, ["placeholder="+text, "id="+placeholder, "type=text", "name="+className]);    
    } else {
        var theInput = addElement(inputField, "input", undefined, ["placeholder=" + text, "id=" + placeholder, "type=text", "class=validate", "name=" + className]);
    }
    addElement(theInput, "label", text, ["for="+placeholder]);
}

/**
 * Añade a un formulario un combobox generado dinamicamente, pasandole de qué es el formulario y las opciones que contendrá
 * @param {object} form Formulario al que vas a agregar el combobox
 * @param {text} eleccion Indicador en una string que indicará qué seleccionará
 * @param {array} nombres Array con los nombres para insertar en el comboBox 
 * @param {name} className 
 */
function crearComboBox(form, eleccion, nombres, className) {
	var div = addElement(form,"div", undefined, ["class=col s9"]);
	addElement(div,"label", eleccion, undefined);
	var select = addElement(div,"select",undefined, ["name="+className]);
	addElement(select,"option",undefined,["selected=selected","disabled=true","value="]).text = "Selecciona una opción";
	dropDownGenerator(select, nombres);
	$(select).formSelect();
}


/**
 * Crea las opciones dentro del select que se le pase. Si la array no tiene id, le asigna uno automaticamente
 * @param {object} select Select al que se le añadirán las opciones 	
 * @param {array} arrayCombo Array con objetos que pasan un nombre e id
 */
function dropDownGenerator(select, arrayCombo) {
	var opt = null;
	if (arrayCombo[0] == undefined) {
		return false;
	}

    for (var i = 0; i < arrayCombo.length; i++) {
        var opt = document.createElement("option");
        if (arrayCombo[i] !== undefined) {
            opt.value = arrayCombo[i];
            opt.innerHTML = arrayCombo[i];
        select.appendChild(opt);
        }
    }
}

/**
 * Funcion que creará el proyecto pasando los parametros indicados al php
 */
function createProject() {
    if (validation()) {
        document.getElementById("createProject").submit();
    }
}

function validation() {
    // Esto ha de buscar el formulario y las class validate
    //mirar si no están vacias, hacer un if por cada una y si está vacio pongo false y salta un error
    return true
}

function addSprintForm(){
	var elementButton = document.getElementById("newSprintBtn");
	disableButton(elementButton);

	var ContainerForm = addElement(elementButton, "div", undefined, ["class=container", "id=newSprintForm"]);

	//Genero la etiqueta form y sus respectivos atributos.
	var elementForm = document.createElement("form");
	elementForm.setAttribute("method", "post");
	elementForm.setAttribute("id", "sprintForm");
	var titleForm = document.createElement("h4");
	var textTitle = document.createTextNode("Crea un nuevo Sprint");
	titleForm.appendChild(textTitle);
	elementForm.appendChild(titleForm);

	
	var labelP = document.createElement("label");
	labelP.setAttribute("class", "input-field col s10");
	var labelText = document.createTextNode("Numero de Sprint:");
	labelP.appendChild(labelText);
	elementForm.appendChild(labelP);
	var elementP = document.createElement("p");
	var numberOrder = arrayOrderNumber[0];
	var textoInput = document.createTextNode(parseInt(numberOrder)+1);



	elementP.appendChild(textoInput);
	elementP.setAttribute("type", "text");
	elementP.setAttribute("name", "numberOrder");
	elementP.setAttribute("class", "input-field col s10");

	elementForm.appendChild(elementP);
	elementForm.appendChild(generateLabel("label", "Fecha de inicio:", "input", "date", "fechaInicio"));
	elementForm.appendChild(generateLabel("label", "Fecha de finalización:", "input", "date", "fechaFin"));
	elementForm.appendChild(generateLabel("label", "Horas totales:", "input", "number","hours"));
	
	
	elementForm.appendChild(createButton("a", "Crear", ["class=btn", "name=sendSprint", "value=Crear", "onclick=validateSprintForm(arraySprint)"]));

	ContainerForm.appendChild(elementForm);
	insertAfter(elementButton, ContainerForm);
}



function validateSprintForm(){
	var inputInitialDate = document.getElementsByTagName("input")[3];
	var inputEndDate = document.getElementsByTagName("input")[6];
	var inputHours = document.getElementsByTagName("input")[7];
	
	var DateSprint = new Date();
	var day = DateSprint.getDate();
	var month = " "+DateSprint.getMonth()+1;
	var year = DateSprint.getFullYear();
	var today = year+"-"+month+"-"+day;

	if(inputInitialDate.value == "" && inputEndDate.value == "" && inputHours.value == ""){
		addMessageError("No has las horas del Sprint. \n No has introducido una fecha inicial. \n No has introducido una fecha final. \n No has introducido el estado del Sprint.", true);
	}else if(inputInitialDate.value == ""){
		addMessageError("No has introducido ninguna fecha inicial.", true);
	}else if(inputEndDate.value == ""){
		addMessageError("No has introducido ninguna fecha final.", true);
	}else if(inputHours. value == ""){
		addMessageError("No has introducido las horas del Sprint.", true);
	}else if(inputHours.value <0){
		addMessageError("Las horas no pueden ser menores que 0.", true);
	}else if(inputHours.value == 0){
		addMessageError("Las horas no pueden ser igual a 0.", true);
	}else if(inputInitialDate.value <= today){
		addMessageError("La fecha inicial ha de ser posterior a la fecha actual.", true);
	}else if(inputEndDate.value <= inputInitialDate.value){
		addMessageError("La fecha de finalización ha de ser posterior a la fecha inicial.", true);
	}else{
		document.getElementById("sprintForm").submit();
	}
	

}