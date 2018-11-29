<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<title>Inicia Sesión</title>
	<script type="text/javascript" src="scripts.js"></script>
</head>
<body>

<?php 
echo "<h2 class='titulo'>LOGIN</h2>";
echo "<form class='formulario' action='login.php' method='POST' >";
echo "Usuario: <br>";
echo "<input type='text' name='nom'><br>";
echo "password: <br>";
echo "<input type='password' name='password'><br>";
echo "<input type='submit' value='Enviar' name='submit'><br>";
echo "</form>";
	
$nombre=$_POST["nom"];
$pass=$_POST["password"];
?>
<?php 
$log="mysql:host=localhost;dbname=DBProject1";
$conn = new PDO($log,"Administrador","P@ssw0rd");
$stmt = $conn->prepare("SELECT * FROM Users WHERE nickname=:nombre and passwd=SHA2(:pass,512)");
$stmt->bindValue(':nombre',$nombre);
$stmt->bindValue(':pass',$pass);
$stmt->execute();
$result=$stmt->rowCount();
if ($result==1) {
	echo "Hola soy: $nombre";
}else{
	addMessageError();
}

?>
	<div id="divError">Prueba div</div>
</body>
</html>