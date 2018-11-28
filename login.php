<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<title></title>
</head>
<body>
<?php 
echo "<h2 class='titulo'>LOGIN</h2>";
echo "<form class='formulario' action='loginBueno.php' method='POST' >";
echo "Usuario: <br>";
echo "<input type='text' name='nom'><br>";
echo "password: <br>";
echo "<input type='password' name='password'><br>";
echo "<input type='submit' value='Enviar' name='submit'><br>";
echo "</form>";
$nombre=$_POST["nom"];
$pass=$_POST["password"];


$log="mysql:host=localhost;dbname=login";
$conn = new PDO($log,"marcos","marcos123");
$stmt = $conn->prepare("SELECT * FROM USERS WHERE USER=:nombre and PASSWD=SHA2(:pass,512)");
$stmt->bindValue(':nombre',$nombre);
$stmt->bindValue(':pass',$pass);
$stmt->execute();
$result=$stmt->rowCount();
if ($result==1) {
	echo "Hola soy: $nombre";
}





?>
</body>
</html>