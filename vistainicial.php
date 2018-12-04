<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<title></title>
</head>
<body>
	<nav>
		<ul>
			<li class="lihorizontal">Nom: Marcos</li>
			
			<li class="lihorizontal"><img class="imglogout" src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564399-close_81512.png"></li>

		</ul>


	</nav>

	<?php 
	echo "<div class='divtabla'>";
	echo "<p class='ptituloproyectos'>Lista de Proyesctos</p>";
	echo "<table>";
	for ($i=0; $i <5 ; $i++) { 
		echo "<tr>";
		echo "<td>hola$i</td>";
		echo "</tr>";
	}
	echo "</table>";
	echo "</div>";
	?>

</body>
</html>