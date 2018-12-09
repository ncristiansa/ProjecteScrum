var tipo=1;
var scrumusers = scrumjs;



if (tipo==1) {
	scrumMaster();

	
}else if (tipo==2){
	productOwne();
}else if (tipo==3) {
	developer();
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

function productOwne(){
  
}

function developer(){

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
	

	var pnom = document.createElement("p");
	var pdescr = document.createElement("p");
	var pscrumm = document.createElement("p");
	var pproduc = document.createElement("p");
	var pdeve = document.createElement("p");

	

	var opscrum = document.createElement("option");
	var tscrum = document.createTextNode(scrumjs);
	opscrum.appendChild(tscrum);
	scrumm.appendChild(opscrum);


	var opproduc = document.createElement("option");
	var tproduc = document.createTextNode(producjs);
	opproduc.appendChild(tproduc);
	produ.appendChild(opproduc);



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