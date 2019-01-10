if (tipo==1) {
	scrumMaster();
}


function scrumMaster(){
	var boton = createButton("a", "Crear Proyecto", ["id=buttonProject", "class=btn card-title"])
	var elementodiv = document.getElementsByClassName("list-projects")[0];
	boton.addEventListener("click",formulario);
	boton.addEventListener("click",borrarinputs);
	elementodiv.appendChild(boton);
}


function addMessageError(errorText, status){
	var CheckError = document.getElementById("MessageError");
	var Button = document.getElementsByTagName("input")[0];

	if(CheckError==undefined){
		var Fail = document.
		Element("div");
		Fail.setAttribute("id", "MessageError");
		Fail.setAttribute("align", "left");

		var failText = document.createElement("p");
		failText.setAttribute("id", "pError");
		failText.innerText=(errorText);

		var Img = document.createElement("img");
		Img.setAttribute("id", "imgError");
		//Img.setAttribute("align", "left");
		Img.setAttribute("height","30px");
		Img.setAttribute("width", "30px");
		Img.src="images/alert.png";

		Button.appendChild(Fail);
		Fail.appendChild(Img);
		Fail.appendChild(failText);
		document.body.appendChild(Fail);

		if(true==status){
			setTimeout(function(){document.getElementById("MessageError").remove();},8000);
		}

	}else if(CheckError!=undefined){
		document.getElementById("MessageError").remove();
		addMessageError(errorText, status);
	}
	
}


/*
function formulario(){
	var elementoBoton = document.getElementsByTagName("button")[0];
	var form = document.createElement("form");
	var nproj = document.createElement("input");
	var descr = document.createElement("input");
	var scrumm = document.createElement("select");
	var produ = document.createElement("select");
	var gdeve = document.createElement("select");
	var elebr = document.createElement("br");

	form.setAttribute("method","post");
	form.setAttribute("id", "formulario");
	form.setAttribute("action","vistainicial.php");


	nproj.setAttribute("change",validar);
	scrumm.setAttribute("change",validar);
	produ.setAttribute("change",validar);
	gdeve.setAttribute("change",validar);

	nproj.setAttribute("name","nproyecto");
	descr.setAttribute("name","descripcion");
	scrumm.setAttribute("name","scrum");
	produ.setAttribute("name","produ");
	gdeve.setAttribute("name","developers");

	var butonenviar = document.createElement("input");
	butonenviar.setAttribute("id", "buttonenviar");
	butonenviar.setAttribute("type", "button");
	butonenviar.setAttribute("onclick","validar()");
	butonenviar.setAttribute("value", "Enviar");
	butonenviar.setAttribute("name", "btn");


	var pnom = document.createElement("p");
	var pdescr = document.createElement("p");
	var pscrumm = document.createElement("p");
	var pproduc = document.createElement("p");
	var pdeve = document.createElement("p");


	
	createComboBox(opscrum1, scrumjs, scrumm);
	createComboBox(opproduc1, producjs, produ);
	createComboBox(opi1, groupjs, gdeve);



	var cnom = document.createTextNode("Nombre del proyecto");
	pnom.appendChild(cnom);

	var cdescr = document.createTextNode("Descripción");
	pdescr.appendChild(cdescr);

	var cscrumm = document.createTextNode("ScrumMaster");
	pscrumm.appendChild(cscrumm);


	var cproduc = document.createTextNode("Product Owner");
	pproduc.appendChild(cproduc);

	var cdeve= document.createTextNode("Grup Developers");
	pdeve.appendChild(cdeve);



	form.appendChild(pnom);
	form.appendChild(nproj);

	form.appendChild(pdescr);
	form.appendChild(descr);

	form.appendChild(pscrumm);
	form.appendChild(scrumm);

	form.appendChild(pproduc);
	form.appendChild(produ);

	form.appendChild(pdeve);
	form.appendChild(gdeve);

	form.appendChild(elebr);

	form.appendChild(butonenviar);

	insertAfter(elementoBoton,form);	

	elementoBoton.disabled = true;

}
*/

function borrarinputs(){
	var inputnombrepro = document.getElementsByTagName("input")[0];
	var inputdesc = document.getElementsByTagName("input")[1];
	var selectScrum = document.getElementsByTagName("select")[0];
	var selectProduct = document.getElementsByTagName("select")[1];
	var selectGrupo = document.getElementsByTagName("select")[2];
	if (inputnombrepro.value != "") {
		inputnombrepro ="";
	}else if (inputdesc.value != "") {
		inputdesc="";
	}else if (selectScrum.value!=0){
		selectScrum.value="Elige una opcion";
	}else if (selectProduct.value!=0){
		selectProduct.value="Elige una opcion";
	}else if (selectGrupo.value!=0){
		selectGrupo.value="Elige una opcion";
	}
}


//esta funcion valida que los campos no esten vacios. Si no, no envia el submit
function validar(){
	var inputnombrepro = document.getElementsByTagName("input")[0];
	var selectScrum = document.getElementsByTagName("select")[0];
	var selectProduct = document.getElementsByTagName("select")[1];
	var selectGrupo = document.getElementsByTagName("select")[2];
	if (inputnombrepro.value == "" && selectScrum.value == "Elige una opcion" && selectProduct.value == "Elige una opcion" && selectGrupo.value == "Elige una opcion"){
		addMessageError("Nombre del proyecto vacio \n Ningun Scrum Master seleccionado \n Ningun Produc Owner seleccionado \n Ningun Grupo de Developers seleccionado",true);
	}else if (inputnombrepro.value == "") {
		addMessageError("Nombre del proyecto vacio",true);
	}else if (selectScrum.value == "Elige una opcion") {
		addMessageError("Ningun Scrum Master seleccionado",true);
	}else if (selectProduct.value == "Elige una opcion") {
		addMessageError("Ningun Produc Owner seleccionado",true);
	}else if (selectGrupo.value == "Elige una opcion") {
		addMessageError("Ningun Grupo de Developers seleccionado",true);
	}else{
		document.getElementById('formulario').submit();
	}
}
