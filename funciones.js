if (tipo==1) {
	scrumMaster();
}


function scrumMaster(){
	var elementodiv = document.getElementsByTagName("div")[0];
	var boton = document.createElement("button");
	var contenido = document.createTextNode("Crear Proyecto");
	boton.appendChild(contenido);
	boton.addEventListener("click",formulario);
	boton.addEventListener("click",borrarinputs);
	elementodiv.appendChild(boton);
	
}

function insertAfter(e,i){ 
	if(e.nextSibling){ 
		e.parentNode.insertBefore(i,e.nextSibling); 
		
	} else { 
		e.parentNode.appendChild(i); 
	}
}





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
	form.setAttribute("action","vistainicial.php");

	nproj.setAttribute("name","nproyecto");
	descr.setAttribute("name","descipcion");
	scrumm.setAttribute("name","scrum");
	produ.setAttribute("name","produ");
	gdeve.setAttribute("name","developers");



	var butonenviar = document.createElement("input");
	butonenviar.setAttribute("type", "submit");
	butonenviar.setAttribute("name", "btn");
	butonenviar.disabled=true;
	

	



	var pnom = document.createElement("p");
	var pdescr = document.createElement("p");
	var pscrumm = document.createElement("p");
	var pproduc = document.createElement("p");
	var pdeve = document.createElement("p");


	

	var opscrum1 = document.createElement("option");
	var tscrum1 = document.createTextNode("Elige una opcion");
	opscrum1.appendChild(tscrum1);
	scrumm.appendChild(opscrum1);


	for (var u = 0; u < scrumjs.length; u++) {
		var opscrum = document.createElement("option");
		var tscrum = document.createTextNode(scrumjs[u]);
		opscrum.appendChild(tscrum);
		scrumm.appendChild(opscrum);
	}




	var opproduc1 = document.createElement("option");
	var tproduc1 = document.createTextNode("Elige una opcion");
	opproduc1.appendChild(tproduc1);
	produ.appendChild(opproduc1);

	for (var o = 0; o < producjs.length; o++) {
		var opproduc = document.createElement("option");
		var tproduc = document.createTextNode(producjs[o]);
		opproduc.appendChild(tproduc);
		produ.appendChild(opproduc);
	}


	var opi1 = document.createElement("option");
	var texi1 = document.createTextNode("Elige una opcion");
	opi1.appendChild(texi1);
	gdeve.appendChild(opi1);





	for (var i = 0; i < groupjs.length; i++) {
		var opi = document.createElement("option");
		var texi = document.createTextNode(groupjs[i]);
		opi.appendChild(texi);
		gdeve.appendChild(opi);
	}
	nproj.addEventListener("change",validar);
	scrumm.addEventListener("change",validar);
	produ.addEventListener("change",validar);
	gdeve.addEventListener("change",validar);

	



	var cnom = document.createTextNode("Nom del projecte");
	pnom.appendChild(cnom);

	var cdescr = document.createTextNode("Descripcion");
	pdescr.appendChild(cdescr);

	var cscrumm = document.createTextNode("ScrumMaster");
	pscrumm.appendChild(cscrumm);
	

	var cproduc = document.createTextNode("product Owner");
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
	
	

}

/*
function validar(){
	var inputnombrepro = document.getElementsByTagName("input")[0];
	var selectScrum = document.getElementsByTagName("select")[0];
	var selectProduct = document.getElementsByTagName("select")[1];
	var selectGrupo = document.getElementsByTagName("select")[2];
	var inputboton = document.getElementsByTagName("input")[2];
	if (inputnombrepro.value!="") {
		document.getElementById("phola").innerText="tengo algo selecionado";
		habilitarboton = habilitarboton + 1;

	}else if (selectScrum.value != "elige una opcion"){
		document.getElementById("phola").innerText="tengo algo selecionado2";
		habilitarboton = habilitarboton + 1;
	}else if (selectProduct.value != "elige una opcion"){
		document.getElementById("phola").innerText="tengo algo selecionado3";
		habilitarboton = habilitarboton + 1;
	}else if (selectGrupo.value != "elige una opcion"){
		document.getElementById("phola").innerText="tengo algo selecionado4";
		habilitarboton = habilitarboton + 1;
	}else if (habilitarboton ==4) {
		inputboton.disabled=false;
	}
}*/

function validar(){
	var inputnombrepro = document.getElementsByTagName("input")[0];
	var selectScrum = document.getElementsByTagName("select")[0];
	var selectProduct = document.getElementsByTagName("select")[1];
	var selectGrupo = document.getElementsByTagName("select")[2];
	var inputboton = document.getElementsByTagName("input")[2];
	if (inputnombrepro.value!="" && selectScrum.value != "elige una opcion" && selectProduct.value != "elige una opcion" && selectGrupo.value != "elige una opcion") {
		inputboton.disabled=false;

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
		selectScrum.value="elige una opcion";
	}else if (selectProduct.value!=0){
		selectProduct.value="elige una opcion";
	}else if (selectGrupo.value!=0){
		selectGrupo.value="elige una opcion";
	}
}