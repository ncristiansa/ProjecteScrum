<?php
	session_start();
	include 'functions.php';
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title><?php echo $tituloPagina; ?></title>

	<!-- Materialize -->
    <meta name = "viewport" content = "width = device-width, initial-scale = 1">      
    <link rel = "stylesheet" href = "https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css">
    <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/css/materialize.min.css">
	<script type = "text/javascript" src = "https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>

	<!-- Own stuff -->
	<!-- CSS archives -->
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<!-- Js archives -->
	<script type="text/javascript" src="javascript/errores.js"></script>
	<script type="text/javascript" src="javascript/formGenerator.js"></script>
	<script type="text/javascript" src="javascript/helpers.js"></script>
	<script type="text/javascript" src="javascript/functions.js"></script>
	<script type="text/javascript" defer src="javascript/_init.js"></script>



</head>