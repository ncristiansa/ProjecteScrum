function scrumMaster() {
	var boton = createButton("a", "Crear Proyecto", ["id=buttonProject", "class=btn card-title", "onclick=formulario()"])
	var elementodiv = document.getElementsByClassName("list-projects")[0];
	elementodiv.appendChild(boton);
}

if (tipo == 1) {
	scrumMaster();
}