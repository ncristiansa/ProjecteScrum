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
?>