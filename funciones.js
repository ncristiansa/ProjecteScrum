var tipo=1;
if (tipo==1) {
	scrumMaster();
}


function scrumMaster(){
	var elementotabla = document.getElementsByTagName("table")[0];
	var boton = document.createElement("button");
	var contenido = document.createTextNode("Crear proyecto");
	boton.appendChild(contenido);
	insertAfter(elementotabla,boton);
	
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