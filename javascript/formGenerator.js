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