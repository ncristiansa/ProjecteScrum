var tipo=1;
if (tipo==1) {
	scrumMaster();
}


function scrumMaster(){
	var elementotabla = document.getElementsByTagName("table")[0];
	var boton = document.createElement("button");
	var contenido = document.createTextNode("Crear proyecto");
	boton.appendChild(contenido);
	elementotabla.appendChild(boton);
}


function productOwne(){

}

function developer(){

}