<!DOCTYPE html>
<?php
function connectar(){
  //connexió dins block try-catch:
  //  prova d'executar el contingut del try
  //  si falla executa el catch
  try {
    $hostname = "localhost";
    $dbname = "ScrumDB3.3";
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
  $userID = $_GET["userID"];
  if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $pass = $_POST["contraseña"];


    $query = $pdo->prepare("UPDATE Users set passwd = SHA2('$pass',512) WHERE userID = '$userID'");
  	$query->execute();
  }
	echo "<div class='Login-Style'>";
	echo "<h2 class='h2-Style'>Recuperarción</h2>";
  echo "<h2 class='h2-Style'>de la contraseña</h2>";
	echo "<form id='formulario' class='formulario' action='password.php?userID=$userID' method='POST' align='center'>";
		echo"<label class='Label-Style'>Nueva Contraseña: </label>";
		echo "<input type='password' name='contraseña1' id='pass1'><br>";
    echo"<label class='Label-Style'>Repite la Contraseña: </label>";
    echo "<input type='password' name='contraseña' id='pass2'><br>";
    echo "<div style='color:red' id='imprError'></div>";
		echo "<input type='button' onclick='comprobar()' value='Enviar' id='btn' class='waves-effect waves-light btn-small'><br>";
	echo "</form>";
	echo "</div>";
?>
</body>
</html>
