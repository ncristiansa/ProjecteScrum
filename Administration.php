<?php
	$tituloPagina = "Administración de Proyectos";
	include 'templates/header.php';

	/*
		Inicio esta variable para usarla más adelante almacenar el resultado de una consulta.
	*/
	$NameUser = "";
	
	$nameusr = $_SESSION["Name"];
	
	$server = "localhost";
 	$user = "Administrador";
 	$pass = "P@ssw0rd";
 	$bbdd = "ScrumDB4";
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
		include 'templates/nav.php';
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
		$infoProject=[];
		while ($info = mysqli_fetch_assoc($resultInfoProject)) {
			$NameP = $info["nameProject"];
			$idProject=$info["projectID"];
			$DescripcionP = $info["description"];
			$scrumMasternameP = $info["scrumMasterName"];
			$productOwnernameP = $info["productOwnerName"];
			array_push($infoProject, $NameP);
			array_push($infoProject, $DescripcionP);
			array_push($infoProject, $scrumMasternameP);
			array_push($infoProject, $productOwnernameP);
		}
		$typeUser = ("SELECT type FROM Users WHERE username='$NameUser';");
		$resultTypeUser = mysqli_query($connect, $typeUser);
		if($Query = mysqli_fetch_assoc($resultTypeUser)){
			$userType = $Query["type"];
		}
		
		//Con el id del projecto buscamos los sprints de este, creando una array de arrays, para luego enviarla a javascript
		$SprintsInfo = ("SELECT * FROM Sprints WHERE projectID=$idProject order by orderNumber;");
		$resultSprints = mysqli_query($connect,$SprintsInfo);
		$finalSprintInfoArray = [];
		$restartSprintInfoArray = [];
		while ($info = mysqli_fetch_assoc($resultSprints)) {
			$order=$info["orderNumber"];
			$hours=$info["hours"];
			$startDate=$info["startDate"];
			$endDate=$info["endDate"];
			$status=$info["status"];
			$sprintID=$info["sprintID"];
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
		$HomeworkInfo = ("SELECT * FROM Homework WHERE sprintID IN (SELECT  sprintID FROM Sprints WHERE projectID='$idProject' order by orderNumber) ORDER BY orderHW;");
		$HomeworkResult = mysqli_query($connect,$HomeworkInfo);
		$finalHWInfoArray=[];
		$restartHWInfoArray=[];
		while ($info = mysqli_fetch_assoc($HomeworkResult)){
			$homeworkID=$info["homeworkID"];
			$description=$info["description"];
			$hours=$info["hours"];
			$sprintID=$info["sprintID"];
			$orderHW=$info["orderHW"];
			array_push($restartHWInfoArray, $homeworkID);
			array_push($restartHWInfoArray, $description);
			array_push($restartHWInfoArray, $hours);
			array_push($restartHWInfoArray, $sprintID);
			array_push($restartHWInfoArray, $orderHW);
			array_push($finalHWInfoArray, $restartHWInfoArray);		
			$restartHWInfoArray=[];
		}
		//Buscar especificaciones en el backlog
		$HWnull=("SELECT * FROM Homework WHERE projectID='$idProject' AND sprintID=0;");
		$HWnullResult=mysqli_query($connect,$HWnull);
		$finalHWnullArray=[];
		$restartHWnullArray=[];
		while ($info = mysqli_fetch_assoc($HWnullResult)){
			$homeworkID=$info["homeworkID"];
			$description=$info["description"];
			array_push($restartHWnullArray, $homeworkID);
			array_push($restartHWnullArray, $description);
			array_push($finalHWnullArray, $restartHWnullArray);		
			$restartHWInfoArray=[];
		}	
?>


<?php
	/*
		Hemos creado una función llamada destroySession para que una vez sea llamada destruya la SESSION actual y nos redirija a login.php
	*/
	function destroySession(){
		session_destroy();
		header("Location: index.php");
	}
	/*
		Esta condición nos permite saber si el usuario ha hecho click en la imagen donde hemos añadido una especie de
		variable que estará siempre en True, activada para que cuando se haya hecho clic llame a la función destroySession.
	*/
	if(isset($_GET['exituser'])){
		destroySession();
	}
	echo "<div id='contenido-web'></div>";
	
?>
<script type="text/javascript">
	var tipo = '<?php echo $userType;?>';
</script>
<script type="text/javascript">
	var infoProject = <?php echo json_encode($infoProject);?>;
	var arraySprint = <?php echo json_encode($finalSprintInfoArray);?>;
	var arrayHW = <?php echo json_encode($finalHWInfoArray);?>;	
	var arrayHWnull = <?php echo json_encode($finalHWnullArray);?>;
</script>

<?php include 'templates/footer.php'?>
