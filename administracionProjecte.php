<?php
	$tituloPagina = "Inicio";
	include 'templates/header.php';
?>
<body>
<?php
	/*
		Inicio esta variable para usarla más adelante almacenar el resultado de una consulta.
	*/
	$NameUser = "";
	/*
		La variable $nameusr servirá para almacenar la SESSION["Name"]
		donde tenemos almacenado el nickname del usuario que hemos obtenido
		con la SESSION iniciada en index.php
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
 	$bbdd = "ScrumDBfinal2-0";
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
	include 'templates/nav.php';
	/*
		Hemos creado una función llamada destroySession para que una vez sea llamada destruya la SESSION actual y nos redirija a index.php
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
		
	}elseif ($userType==2) {
		
        
    }
    elseif ($userType==3) {
        
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


/*$Sprints=searchQuerySQL("*","Sprints",null);
while( $regigroup = mysqli_fetch_assoc($Sprints) ){
		echo $regigroup["projectID"]."";		
		
	}
No funciona
function InsertQuerySQL($table,$parameters,$allValues){
	$server = "localhost";
 	$user = "Administrador";
 	$pass = "P@ssw0rd";
 	$bbdd = "ScrumDBfinal2-0";
	$connect = mysqli_connect($server,$user, $pass, $bbdd);
	$query = ("INSERT INTO $talbe $parameters VALUES $allValues;");
	mysqli_query($connect,$query);
	
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