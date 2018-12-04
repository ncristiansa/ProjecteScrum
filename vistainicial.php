<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estiloScrum.css">
	<script type="text/javascript" defer src="funciones.js" ></script>
	<title></title>
</head>
<body>
	<?php 
	echo "
	<nav>
		<ul>
			<li class='lihorizontal'><img class='imgusuario' src='https://evarejo.com/wp-content/uploads/2017/08/evarejo_homem_padrao.png'> Marcos</li>
			
			<li class='liimglogout'><img class='imglogout' src='http://www.esiam.mx/imagenes/iconos/logout%20-%20copia.png'></li>

		</ul>


	</nav>
	";
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