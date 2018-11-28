<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<title></title>
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


<<<<<<< HEAD
$log="mysql:host=localhost;dbname=DBProject1";
$conn = new PDO($log,"Administrador","P@ssw0rd");
$stmt = $conn->prepare("SELECT * FROM Users WHERE nickname=:nombre and passwd=SHA2(:pass,512)");
echo $stmt;
=======
$log="mysql:host=localhost;dbname=DBProject";
$conn = new PDO($log,"marcos","marcos123");
$stmt = $conn->prepare("SELECT * FROM Users WHERE nickname=:nombre and passwd=SHA2(:pass,512)");
>>>>>>> 03712dc4ce8ac48b65dde561913b52c769ed7e52
$stmt->bindValue(':nombre',$nombre);
$stmt->bindValue(':pass',$pass);
$stmt->execute();
$result=$stmt->rowCount();
if ($result==1) {
	echo "Hola soy: $nombre";
}else{
	echo"NO existe";
}





?>
</body>
</html>