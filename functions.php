<?php
	// Función que hace el Isset para eliminar errores con el post
	function checkIsset(&$variable, &$argumentPost) {
		if (isset($argumentPost)) {
			$variable = $argumentPost;
		}
		else {
			$variable = null;
		}
    }
    
    // Hemos creado una función llamada destroySession para que una vez sea llamada destruya la SESSION actual y nos redirija a login.php
	
	function destroySession(){
		session_destroy();
		header("Location: login.php");
	}
?>