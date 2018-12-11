<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<script type="text/javascript" defer src="funciones.js"></script>
	<title>Prueba 2</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
 	$bbdd = "ScrumDBfinal";
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
				
			echo"</li>";
			echo"<li class='liimglogout'>";
?>
				<a href='vistainicial.php?exituser=true'>
<?php
				echo"<img class='imglogout' src='http://www.esiam.mx/imagenes/iconos/logout%20-%20copia.png'>";

?>
				</a>
<?php
				print_r($NameUser);
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
	$listProjects = ("SELECT nameProject FROM Projects WHERE scrumMasterName='$NameUser';");
	$resultList = mysqli_query($connect, $listProjects);
?>

<?php
	$typeUser = ("SELECT type FROM Users WHERE username='$NameUser';");
	$resultTypeUser = mysqli_query($connect, $typeUser);
	if($Query = mysqli_fetch_assoc($resultTypeUser)){
		$userType = $Query["type"];
	}
	if($userType==1){
		echo "<div align='center' class='div-father'>";
			echo "<div class='list-projects' align='center'>";
				echo "<p align='right' class='p-Title'>Proyecto</p>";
				echo "<p class='title-list'>Lista de proyectos</p>";
			echo "<ul>";
				while ($QueryList = mysqli_fetch_assoc($resultList)) {
					echo"<li class='text-li'><a href='#'>".$QueryList["nameProject"]."</li></a>";
				}
			echo "</ul>";
		echo "</div>";
	}elseif ($userType==2) {
		$consultaNameproject = ("SELECT nameProject FROM Projects WHERE productOwnerName='$NameUser';");
        $namesProject = mysqli_query($connect, $consultaNameproject);

		echo "<div align='center' class='div-father'>";
			echo "<div class='list-projects' align='center'>";
				echo "<p align='right' class='p-Title'>Proyecto</p>";
				echo "<p class='title-list'>Lista de proyectos</p>";
			echo "<ul>";
				while ($queryNameProject = mysqli_fetch_assoc($namesProject)) {
					echo"<li class='text-li'><a href='#'>".$queryNameProject["nameProject"]."</li></a>";
				}
			echo "</ul>";
		echo "</div>";
        
    }
    elseif ($userType==3) {
        $c= "C";
        $nameProjectC = ("SELECT nameProject FROM Projects WHERE nameGroup= '$c';");
        $resultNPC = mysqli_query($connect, $nameProjectC);

        echo "<div align='center' class='div-father'>";
			echo "<div class='list-projects' align='center'>";
				echo "<p align='right' class='p-Title'>Proyecto</p>";
				echo "<p class='title-list'>Lista de proyectos</p>";
			echo "<ul>";
				while ($consultaC = mysqli_fetch_assoc($resultNPC)) {
					echo"<li class='text-li'><a href='#'>".$consultaC["nameProject"]."</li></a>";
				}
			echo "</ul>";
		echo "</div>";
    }
	
?>

<?php
	$consultaselect = ("SELECT username FROM Users WHERE type=1;");
	$resultadoselect = mysqli_query($connect,$consultaselect);

	$arrayscrum=[];
	while($regiscrum = mysqli_fetch_assoc($resultadoselect)){
		$scrum = $regiscrum["username"];
		array_push($arrayscrum, $scrum);

	}

	$consuproduc = ("SELECT username FROM Users WHERE type=2;");
	$resultproduc = mysqli_query($connect,$consuproduc);

	$arrayproduc=[];
	while ($regiproduc = mysqli_fetch_assoc($resultproduc)) {
		$produc = $regiproduc["username"];
		array_push($arrayproduc,$produc);
	}
	
	

	$consugroup = ("SELECT nameGroup FROM Groups;");
	$resultgroup = mysqli_query($connect,$consugroup);

	$arraygroups=[];
	while( $regigroup = mysqli_fetch_assoc($resultgroup) ){
		$group = $regigroup["nameGroup"];

		array_push($arraygroups, $group);
		
	}


	$nproyecto=$_POST["nproyecto"];
	$descripcions=$_POST["descipcion"];
	$scrumaster=$_POST["scrum"];
	$nomproduc=$_POST["produ"];
	$grupos=$_POST["developers"];


	if($_SERVER["REQUEST_METHOD"] == "POST") {
			
		if(isset($_POST['btn'])){	
			if(isset($_POST['descipcion'])){
				$descripcion = $_POST['descipcion'];
			}else{
				$descripcion = null;
			}
		$insertarConDescripcion = ("INSERT INTO Projects (nameProject, description, nameGroup, scrumMasterName, productOwnerName) VALUES ('$nproyecto','$descripcion','$grupos','$scrumaster','$nomproduc');");
		if(mysqli_query($connect,$insertarConDescripcion)){
			header("Location: vistainicial.php");
		}
		}	
	}
/*
if(isset($_POST["btn"])){
	if(empty($nproyecto)){
		echo "<script type='text/javascript' >mensajeError('Campo titulo vacio.',true);</script>";
	}elseif (empty($scrumaster)) {
		echo "<script type='text/javascript' >mensajeError('Ningun Scrum Master seleccionado.',true)</script>";
	}elseif (empty($nomproduc)) {
		echo "<script type='text/javascript' >mensajeError('Ningun Produc Owner seleccionado',true)</script>";
	}elseif (empty($grupos)) {
		echo "<script type='text/javascript' >mensajeError('Ningun Grupo seleccionado',true)</script>";
	}
}
	*/





?>
<script type="text/javascript">
	var scrumjs = <?php echo json_encode($arrayscrum);?>;
	var producjs = <?php echo json_encode($arrayproduc);?> ;
	var groupjs = <?php echo json_encode($arraygroups);?> ;
	var tipo = '<?php echo $userType;?>';
</script>

</body>
</html>