if (tipo==1) {
	scrumMaster();
}


function scrumMaster(){
	var boton = createButton("a", "Crear Proyecto", ["id=buttonProject", "class=btn card-title", "onclick=formulario()"])
	var elementodiv = document.getElementsByClassName("list-projects")[0];
	//boton.addEventListener("click",borrarinputs);
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
