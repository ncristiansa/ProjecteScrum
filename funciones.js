var tipo=1;
var controlformu = 1;
if (tipo==1) {
	scrumMaster();
	
}else if (tipo==2){
	productOwne();
}else if (tipo==3) {
	developer();
}


function scrumMaster(){
	var elementotabla = document.getElementsByTagName("table")[0];
	var boton = document.createElement("button");
	var contenido = document.createTextNode("Crear proyecto");
	boton.appendChild(contenido);
	insertAfter(elementotabla,boton);
	boton.addEventListener("click",formulario);
	
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