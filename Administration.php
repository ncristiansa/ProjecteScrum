<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<script type="text/javascript" defer src="functions.js"></script>
	<title>Administración de Projecto</title>
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
 	$bbdd = "ScrumDB3.0";
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
	/*
		Obtendré la URL por el = para otbtener la posición 1 que es el nombre
	*/

		
?>
<?php
	echo"<nav>";
		echo"<ul>";
			echo"<li class='lihorizontal'>";
				echo"<img class='imgusuario' src='images\usericon.png'>";
				
			echo"</li>";
			echo"<li class='liimglogout'>";
?>
				<a href='vistainicial.php?exituser=true'>
<?php
				echo"<img class='imglogout' src='images\logout.png'>";

?>
				</a>
<?php
				print_r($NameUser);
			echo"</li>";
		echo"</ul>";
	echo"</nav>";
?>


<?php
		$host=$_SERVER["HTTP_HOST"];
		$url= $_SERVER["REQUEST_URI"];

		/*
			Separo la url mediante el = 
		*/
		
		$cutnewUrl = explode("%20", $url);
		$newutl = explode("=", $url);
		$ProjectName = $newutl[1];
		$NameProject = str_replace("%20", " ", $ProjectName);


		
		/*
			Al obtener el nombre del projecto mediante el método GET puedo realizar una consulta que me devuelva los datos de ese proyecto y enviarselo mediante un array al JS para mostrar con DOM toda la información de X projecto.
		*/
		$InfoProject = ("SELECT * FROM Projects WHERE nameProject='$NameProject';");
		$resultInfoProject = mysqli_query($connect, $InfoProject);
		$nameInfoProject = [];
		$descriptionInfoProject = [];
		$scrumMasterInfoProject = [];
		$productOwnerInfoProject = [];

		while ($info = mysqli_fetch_assoc($resultInfoProject)) {
			$NameP = $info["nameProject"];
			$idProject=$info["projectID"];
			$DescripcionP = $info["description"];
			$scrumMasternameP = $info["scrumMasterName"];
			$productOwnernameP = $info["productOwnerName"];
			array_push($nameInfoProject, $NameP);
			array_push($descriptionInfoProject, $DescripcionP);
			array_push($scrumMasterInfoProject, $scrumMasternameP);
			array_push($productOwnerInfoProject, $productOwnernameP);
		}
		$typeUser = ("SELECT type FROM Users WHERE username='$NameUser';");
		$resultTypeUser = mysqli_query($connect, $typeUser);
		if($Query = mysqli_fetch_assoc($resultTypeUser)){
			$userType = $Query["type"];
		}
		

		//Con el id del projecto buscamos los sprints de este, creando una array de arrays, para luego enviarla a javascript
		$SprintsInfo=("SELECT * FROM Sprints WHERE projectID=$idProject order by orderNumber;");
		echo "$SprintsInfo";
		$resultSprints=mysqli_query($connect, $SprintsInfo);

		$finalSprintInfoArray=[];
		$restartSprintInfoArray=[];

		while ($info=mysql_fetch_assoc($resultSprints)){
			$order=$info["orderNumber"];
			echo "$order";
			$hours=$info["hours"];
			echo "$hours";
			$startDate=$info["startDate"];
			$endDate=$info["endDate"];
			$status=$info["status"];
			$sprintID=$info["$sprintID"];
			array_push($restartSprintInfoArray, $order);
			array_push($restartSprintInfoArray, $hours);
			array_push($restartSprintInfoArray, $startDate);
			array_push($restartSprintInfoArray, $endDate);
			array_push($restartSprintInfoArray, $status);
			array_push($restartSprintInfoArray, $sprintID);

			array_push($finalSprintInfoArray, $restartSprintInfoArray);			
			$restartSprintInfoArray=[];
		}

		//Con los ids de los sprints del projecto buscamos las especificaciones de este, creando una array de arrays, para luego enviarla a javascript
		$HomeworkInfo=("SELECT * FROM `Homework` WHERE sprintID IN (SELECT  sprintID FROM Sprints WHERE projectID=$projectID order by orderNumber) ORDER BY orderHW;");
		$HomeworkResult=mysql_query($connect, $HomeworkInfo);

		$finalHWInfoArray=[];
		$restartHWInfoArray=[];

		while ($info=mysql_fetch_assoc($HomeworkResult)){
			$homeworkID=$info["homeworkID"];
			$description=$info["description"];
			$hours=$info["hours"];
			$sprintID=$info["sprintID"];
			array_push($restartHWInfoArray, $homeworkID);
			array_push($restartHWInfoArray, $description);
			array_push($restartSprintInfoArray, $hours);
			array_push($restartHWInfoArray, $sprintID);

			array_push($finalHWInfoArray, $restartHWInfoArray);	
			print_r($restartHWInfoArray);		
			$restartHWInfoArray=[];
		}
		print_r($finalSprintInfoArray);
		print_r($finalHWInfoArray);

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
<script type="text/javascript">
	var tipo = '<?php echo $userType;?>';
</script>
<script type="text/javascript">
	var nameProjectJS = <?php echo json_encode($nameInfoProject);?>;
	var descriptionProjectJS = <?php echo json_encode($descriptionInfoProject);?>;
	var scrumMasternameJS = <?php echo json_encode($scrumMasterInfoProject);?>;
	var productOwnernameJS = <?php echo json_encode($productOwnerInfoProject);?>;
	//Para crear marco de sprints y tareas
	var arraySprint = <?php echo json_encode($finalSprintInfoArray);?>;
	var arrayHW = <?php echo json_encode($finalHWInfoArray);?>;
</script>

	

</body>
</html>