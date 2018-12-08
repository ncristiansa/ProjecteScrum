<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<title>Prueba 2</title>
	<meta charset="utf-8">
</head>
<body>
<?php
	/*
		Inicio esta variable para usarla más adelante almacenar el resultado de una consulta.
	*/
	$NameUser = "";
	/*
		La variable $nameusr servirá para almacenar la SESSION["Name"]
		donde tenemos almacenado el nickname del usuario que hemos obtenido
		con la SESSION iniciada en login.php
	*/
	$nameusr = $_SESSION["Name"];
	/*
		Creamos las variables $server, $user, $pass y $bbdd para pasarlas
		a la funcion mysqli_connect que ésta estará almacenada en la variable
		$connect.
	*/
	$server = "localhost";
 	$user = "Administrador";
 	$pass = "P@ssw0rd";
 	$bbdd = "DBPrueba";
 	$connect = mysqli_connect($server,$user, $pass, $bbdd);
 	/*
		En la variable $consulta lanzaremos nuestra pequeña consulta SQL
		donde obtendremos el nombre del usuario donde el nickname sea igual
		a nuestra variable $nameusr (ésta almacena la SESSION["Name"]).
 	*/
 	$consulta = ("SELECT username FROM Users WHERE nickname='$nameusr';");
 	/*
		Almacenaremos el anterior resultado en nuestra variable, valga la
		redundancia, llamada resultado.
 	*/
 	$resultado = mysqli_query($connect, $consulta);
 	/*
		Finalmente comprobaremos si tenemos algún resultado.
		En caso de que haya un resultado, en este caso sí,
		éste lo guardaremos en nuestra variable $NameUser donde almacenará
		$variable = $registro["columna"], es decir $NameUser = $registro["username"]. El nombre username es el que tenemos en nuestra tabla Users donde se guarda el nombre del usuario.
 	*/
	if($registro = mysqli_fetch_assoc($resultado)){
		$NameUser = $registro["username"];
	}
		
?>
<?php
	echo"<nav>";
		echo"<ul>";
			echo"<li class='lihorizontal'>";
				echo"<img class='imgusuario' src='https://evarejo.com/wp-content/uploads/2017/08/evarejo_homem_padrao.png'>";
				print_r($NameUser);
			echo"</li>";
			echo"<li class='liimglogout'>";
?>
				<a href='vistainicialP2.php?exituser=true'>
<?php
				echo"<img class='imglogout' src='http://www.esiam.mx/imagenes/iconos/logout%20-%20copia.png'>";
?>
				</a>
<?php
			echo"</li>";
		echo"</ul>";
	echo"</nav>";
?>

<?php
	/*
		Hemos creado una función llamada destroySession para que una vez sea llamada destruya la SESSION actual y nos redirija a login.php
	*/
	function destroySession(){
		session_destroy();
		header("Location: login.php");
	}
	/*
		Esta condición nos permite saber si el usuario ha hecho click en la imagen donde hemos añadido una especie de
		variable que estará siempre en True, activada para que cuando se haya hecho clic llame a la función destroySession.
	*/
	if(isset($_GET['exituser'])){
		destroySession();
	}
?>
<?php
	/*
		Listado de proyectos existentes, links que nos enviará a la pàgina de Administración del projecto.
	*/
	$listProjects = ("SELECT nameProject FROM Projects;");
	$resultList = mysqli_query($connect, $listProjects);
?>
<div align="center" class="div-father">
	<div class="list-projects" align="center">
			<p class="title-list">Lista de proyectos</p>
	<ul>
		<?php
			while ($QueryList = mysqli_fetch_assoc($resultList)) {
				echo"<li class='text-li'><a href='#'>".$QueryList["nameProject"]."</li></a>";
			}
		?>
	</ul>
	</div>
</div>
<?php
	$typeUser = ("SELECT type FROM Users WHERE username='$NameUser';");
	$resultTypeUser = mysqli_query($connect, $typeUser);
	if($Query = mysqli_fetch_assoc($resultTypeUser)){
		$userType = $Query["type"];
	}
	if($userType==1){
		print_r("Empieza el programa llamando a X funciones del type 1");
	}
	elseif ($userType==2) {
		print_r("Type 2");
	}
	elseif ($userType==3) {
		print_r("Type 3");
	}
?>

</body>
</html>