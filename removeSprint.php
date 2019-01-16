<?php 
	$server = "localhost";
    $user = "Administrador";
    $pass = "P@ssw0rd";
    $bbdd = "ScrumDB4";
    $connect = mysqli_connect($server,$user, $pass, $bbdd);
    if($_POST){
        $numSprint = $_POST["numSprint"];
        $changeStatus = ("UPDATE Sprints SET status = 0 WHERE projectID='$idProject';");
		if(mysqli_query($connect, $changeStatus)){
            $delSprint = ("DELETE FROM Sprints WHERE orderNumber = $numSprint");
            if(mysqli_query($connect, $delSprint)){
                header("Location: Administration.php");
            }
			
		}
    }

?>