<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<script type="text/javascript" defer src="funciones.js"></script>
	<title>Inicio</title>
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
	$idUser = "";
	$IDProject = "";
	$IDScrumM = "";
	$IDProduct = "";
	$IDDeveloper = "";

	$consultidUser = ("SELECT userID FROM Users WHERE username='$NameUser';");
	$resultUserID = mysqli_query($connect, $consultidUser);
	if($queryUserid = mysqli_fetch_assoc($resultUserID)){
		$idUser = $queryUserid["userID"];
	}

	$typeUser = ("SELECT type FROM Users WHERE username='$NameUser';");
	$resultTypeUser = mysqli_query($connect, $typeUser);
	if($Query = mysqli_fetch_assoc($resultTypeUser)){
		$userType = $Query["type"];
	}
	
	$ProjectUserList = ("SELECT p.nameProject FROM Projects p, UserBelongsToP up WHERE up.userID='$idUser' AND up.projectID=p.projectID;");
	$resultList = mysqli_query($connect, $ProjectUserList);
	
	if($userType==1){
		
		echo "<div align='center' class='div-father'>";
			echo "<div class='list-projects' align='center'>";
				echo "<p align='right' class='p-Title'>Proyecto</p>";
				echo "<p class='title-list'>Lista de proyectos</p>";
			echo "<ul>";
				while ($QueryList = mysqli_fetch_array($resultList)) {
					echo"<li class='text-li'><a id='$QueryList[0]' href='Administration.php?id=$QueryList[0]'>".$QueryList[0]."</li></a>";
				}
			echo "</ul>";
		echo "</div>";
	}elseif ($userType==2) {
		

		echo "<div align='center' class='div-father'>";
			echo "<div class='list-projects' align='center'>";
				echo "<p align='right' class='p-Title'>Proyecto</p>";
				echo "<p class='title-list'>Lista de proyectos</p>";
			echo "<ul>";
				while ($QueryList = mysqli_fetch_array($resultList)) {
					echo"<li class='text-li'><a id='$QueryList[0]' href='Administration.php?id=$QueryList[0]'>".$QueryList[0]."</li></a>";
				}
			echo "</ul>";
		echo "</div>";
        
    }
    elseif ($userType==3) {
        echo "<div align='center' class='div-father'>";
			echo "<div class='list-projects' align='center'>";
				echo "<p align='right' class='p-Title'>Proyecto</p>";
				echo "<p class='title-list'>Lista de proyectos</p>";
			echo "<ul>";
				while ($QueryList = mysqli_fetch_array($resultList)) {
					echo"<li class='text-li'><a id='$QueryList[0]' href='Administration.php?id=$QueryList[0]'>".$QueryList[0]."</li></a>";
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
	
	

	$consugroup = ("SELECT DISTINCT nameGroup FROM Groups;");
	$resultgroup = mysqli_query($connect,$consugroup);

	$arraygroups=[];
	while( $regigroup = mysqli_fetch_assoc($resultgroup) ){
		$group = $regigroup["nameGroup"];

		array_push($arraygroups, $group);
		
	}


	$nproyecto=$_POST["nproyecto"];
	$descripcion=$_POST["descripcion"];
	$scrumaster=$_POST["scrum"];
	$nomproduc=$_POST["produ"];
	$grupos=$_POST["developers"];

	$_SESSION["nameprojecto"] = $nproyecto;
	$projectoNombre = $_SESSION["nameprojecto"];

	$_SESSION["namescrum"] = $scrumaster;
	$masterNombre = $_SESSION["namescrum"];

	$_SESSION["nameproduct"] = $nomproduc;
	$productNombre = $_SESSION["nameproduct"];

	$_SESSION["namegrup"] = $grupos;
	$groupNombre = $_SESSION["namegrup"];
	print_r($projectoNombre);
	print_r($masterNombre);
	print_r($productNombre);
	print_r($groupNombre);
	if($_SERVER["REQUEST_METHOD"] == "POST") {

			if(isset($_POST['descripcion'])){
				$descripcion = $_POST['descripcion'];
			}else{
				$descripcion = null;
			}
			$insertarConDescripcion = ("INSERT INTO Projects (nameProject, description, scrumMasterName, productOwnerName) VALUES ('$nproyecto', '$descripcion', '$scrumaster', '$nomproduc');");
			$mysqli = new mysqli("localhost", "Administrador", "P@ssw0rd", "ScrumDB3.0");
			
			
			if(mysqli_query($connect,$insertarConDescripcion)){
				$searchIDProject = ("SELECT projectID FROM Projects WHERE nameProject='$projectoNombre';");
				$resultSearchIDProject = mysqli_query($connect,$searchIDProject);
				if($queryIDProject = mysqli_fetch_assoc($resultSearchIDProject)){
					$IDProject = $queryIDProject["projectID"];
				}
				print_r("ID P:".$IDProject);

				$searchIDScrumM = ("SELECT userID FROM Users WHERE username='$masterNombre';");
				$resultSearchScrumM = mysqli_query($connect, $searchIDScrumM);
				if($queryIDScrumM = mysqli_fetch_assoc($resultSearchScrumM)){
					$IDScrumM = $queryIDScrumM["userID"];
				}
				print_r("ID Scr:".$IDScrumM);
				$searchIDProduct = ("SELECT userID FROM Users WHERE username='$productNombre';");
				$resultSearchProduct = mysqli_query($connect, $searchIDProduct);
				if($queryIDProduct = mysqli_fetch_assoc($resultSearchProduct)){
					$IDProduct = $queryIDProduct["userID"];
				}
				print_r("ID Pr:".$IDProduct);
				
				$searchIDDeveloper = ("SELECT u.userID FROM Users u, Groups g WHERE u.type=3 AND u.userID=g.userID AND g.nameGroup='$groupNombre';");
				$resultSearchIDDeveloper = mysqli_query($connect,$searchIDDeveloper);
				while($queryIDDeveloper = mysqli_fetch_assoc($resultSearchIDDeveloper)){
					$IDDeveloper = $queryIDDeveloper["userID"];
					if(!$mysqli->query("INSERT INTO UserBelongsToP (projectID, userID) VALUES ('$IDProject', '$IDDeveloper');")){
					}
					print_r("ID Dev:".$IDDeveloper);
				}
				
				if(!$mysqli->query("INSERT INTO UserBelongsToP (projectID, userID) VALUES ('$IDProject', '$IDScrumM');") || !$mysqli->query("INSERT INTO UserBelongsToP (projectID, userID) VALUES ('$IDProject', '$IDProduct');") ){
					
				}
				header("Location: vistainicial.php");
				
			}
			
			
			
	}	
function searchQuerySQL($parameters,$table,$whereDo){
	$server = "localhost";
 	$user = "Administrador";
 	$pass = "P@ssw0rd";
 	$bbdd = "ScrumDBfinal2-0";
	$connect = mysqli_connect($server,$user, $pass, $bbdd);
	if ($whereDo==null) {
		$query = ("SELECT $parameters FROM $table;");
	}else{
		$query = ("SELECT $parameters FROM $table WHERE $whereDo;");
	}
	$result = mysqli_query($connect,$query);
	return $result;
}	

?>

<script type="text/javascript">
	var scrumjs = <?php echo json_encode($arrayscrum);?>;
	var producjs = <?php echo json_encode($arrayproduc);?> ;
	var groupjs = <?php echo json_encode($arraygroups);?> ;
	var tipo = '<?php echo $userType;?>';
</script>

</body>
</html>
