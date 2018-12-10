

if (tipo==1) {
	scrumMaster();
}


function scrumMaster(){
	var elementodiv = document.getElementsByTagName("div")[0];
	var boton = document.createElement("button");
	var contenido = document.createTextNode("Crear Proyecto");
	boton.appendChild(contenido);
	boton.addEventListener("click",formulario);
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

	var butonenviar = document.createElement("input");
	butonenviar.setAttribute("type", "submit");
	butonenviar.disabled=true;
	

	



	var pnom = document.createElement("p");
	var pdescr = document.createElement("p");
	var pscrumm = document.createElement("p");
	var pproduc = document.createElement("p");
	var pdeve = document.createElement("p");


	

	var opscrum1 = document.createElement("option");
	var tscrum1 = document.createTextNode("elige una opcion");
	opscrum1.appendChild(tscrum1);
	scrumm.appendChild(opscrum1);


	for (var u = 0; u < scrumjs.length; u++) {
		var opscrum = document.createElement("option");
		var tscrum = document.createTextNode(scrumjs[u]);
		opscrum.appendChild(tscrum);
		scrumm.appendChild(opscrum);
	}




	var opproduc1 = document.createElement("option");
	var tproduc1 = document.createTextNode("elige una opcion");
	opproduc1.appendChild(tproduc1);
	produ.appendChild(opproduc1);

	for (var o = 0; o < producjs.length; o++) {
		var opproduc = document.createElement("option");
		var tproduc = document.createTextNode(producjs[o]);
		opproduc.appendChild(tproduc);
		produ.appendChild(opproduc);
	}


	var opi1 = document.createElement("option");
	var texi1 = document.createTextNode("elige una opcion");
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