<!DOCTYPE html>
<?php
	//Inicio de session para los usuarios que accedan
	session_start();
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<title>Inicia Sesión</title>
	<script type="text/javascript" src="scripts.js"></script>
	<!-- Materialize -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="padding: 2%;">

<?php
	echo "<div class='Login-Style'>";
	echo "<h2>Gestor de projectes SCRUM<h2>";
	echo "<h2 class='h2-Style'>Login</h2>";
	echo "<form class='formulario' action='login.php' method='POST' align='center'>";
		echo"<label class='Label-Style'>Usuario: </label>";
			echo "<input type='text' name='nom'><br>";
		echo "<label class='Label-Style'>Contraseña: </label>";
			echo "<input type='password' name='password'><br>";
		echo "<input type='submit' value='Enviar' name='submit' id='btn' class='waves-effect waves-light btn-small'><br>";
	echo "</form>";
	echo "<br><a href='recuperar.php'>He olvidado mi contraseña</a>";
	echo "</div>";
	$nombre=$_POST["nom"];
	$pass=$_POST["password"];
?>
<?php
	//Variables de session
	$_SESSION["Name"] = $nombre;
	$_SESSION["Pass"] = $pass;
?>
<?php

	$log="mysql:host=localhost;dbname=ScrumDBfinal";
	$conn = new PDO($log,"Administrador","P@ssw0rd");

	$queryUser = $conn->prepare("SELECT nickname FROM Users WHERE nickname=:nombre");
	$queryUser->bindValue(':nombre',$nombre);
	$queryUser->execute();
	$resultUser=$queryUser->rowCount();

	$queryPass = $conn->prepare("SELECT passwd FROM Users WHERE passwd=SHA2(:pass,512)");
	$queryPass->bindValue(':pass', $pass);
	$queryPass->execute();
	$resultPass=$queryPass->rowCount();

	/*
		Esta condición nos permite controlar si el usuario ha hecho click en el botón "Enviar".
	*/
	if(isset($_POST['submit'])){

		if(empty($nombre) && empty($pass)){
			echo '<script type="text/javascript">addMessageError("Introduzca un nombre usuario y una contraseña.", true);</script>';
		}elseif (empty($nombre)) {
			echo '<script type="text/javascript">addMessageError("Introduzca un nombre de usuario.", true);</script>';
		}elseif (empty($pass)) {
			echo '<script type="text/javascript">addMessageError("Introduzca una contraseña.", true);</script>';
		}else{
			if ($resultUser==0 && $resultPass==0) {
			echo '<script type="text/javascript">addMessageError("Usuario y contraseña incorrecta.", true);</script>';
			}elseif ($resultUser==0) {
			echo '<script type="text/javascript">addMessageError("Usuario incorrecto.", true);</script>';
			}elseif ($resultPass==0) {
			echo '<script type="text/javascript">addMessageError("Contraseña incorrecta.", true);</script>';
			}
		}
		/*
			Si ambas condiciones se cumplen nos enviará a la web
		*/
		if($resultUser==1 && $resultPass==1){
			header("Location: vistainicial.php");
		}
	}

?>
</body>
</html>
