<!DOCTYPE html>
<?php
function connectar(){
  //connexió dins block try-catch:
  //  prova d'executar el contingut del try
  //  si falla executa el catch
  try {
    $hostname = "localhost";
    $dbname = "ScrumDBfinal";
    $username = "Administrador";
    $pw = "P@ssw0rd";
    $pdo = new PDO ("mysql:host=$hostname;dbname=$dbname","$username","$pw");
  } catch (PDOException $e) {
    echo "Failed to get DB handle: " . $e->getMessage() . "\n";
    exit;
  }
  return $pdo;
}
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<title>Recuperación de la contraseña</title>
	<script type="text/javascript" src="scripts.js"></script>
	<!-- Materialize -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="padding: 2%;">

<?php
  $pdo = connectar();
  $titulo = "Recuperación de la contraseña";
  if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $correo = $_POST["email"];
  }


  $query = $pdo->prepare("SELECT userID, email FROM Users WHERE email = '$correo'");
  $query->execute();
  $datosUser = $query->fetch();

  $mensaje = "http://http://skadilux.tk/ProjecteScrum/password.php/?userID=".$datosUser["userID"];
  mail($datosUser["email"], $titulo, $mensaje);

  //print_r($datosUser["email"]);
  //print_r($datosUser["userID"]);


	echo "<div class='Login-Style'>";
	echo "<h2 class='h2-Style'>Recuperarción</h2>";
  echo "<h2 class='h2-Style'>de la contraseña</h2>";
	echo "<form class='formulario' action='recuperar.php' method='POST' align='center'>";
		echo"<label class='Label-Style'>Correo: </label>";
			echo "<input type='text' name='email'><br>";
		echo "<input type='submit' value='Enviar' name='submit' id='btn' class='waves-effect waves-light btn-small'><br>";
	echo "</form>";
	echo "</div>";
?>
</body>
</html>
