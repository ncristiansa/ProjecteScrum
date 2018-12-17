/*Función que mostrara los errores
errorText es el texto del error i tiempo en el caso que queramos que este solo por unos segundos
function showError(errorTextI,tiempo){

*/
function addMessageError(errorText, status){
	var CheckError = document.getElementById("MessageError");
	var Button = document.getElementsByTagName("input")[0];

	if(CheckError==undefined){
		var Fail = document.createElement("div");
		Fail.setAttribute("id", "MessageError");
		Fail.setAttribute("align", "left");

		var failText = document.createElement("p");
		failText.setAttribute("id", "pError");
		failText.innerText=(errorText);

		var Img = document.createElement("img");
		Img.setAttribute("id", "imgError");
		//Img.setAttribute("align", "left");
		Img.setAttribute("height","30px");
		Img.setAttribute("width", "30px");
		Img.src="images/alert.png";

		Button.appendChild(Fail);
		Fail.appendChild(Img);
		Fail.appendChild(failText);
		document.body.appendChild(Fail);

		if(true==status){
			setTimeout(function(){document.getElementById("MessageError").remove();},8000);
		}

	}else if(CheckError!=undefined){
		document.getElementById("MessageError").remove();
		addMessageError(errorText, status);
	}

}


//funcion que comprueba que los campos no esten vacios y que la Contraseña sea igual en los dos campos
      function comprobar(){
        var pass1 = document.getElementById('pass1').value
        var pass2 = document.getElementById('pass2').value

        if (pass1 != "" && pass2 != ""){
          if (pass1 == pass2){
            document.getElementById('imprError').innerHTML = "";
            enviar();
          }else{
            var notSamePass = 'La Contraseña no coincide';
            document.getElementById('pass1').value = "";
            document.getElementById('pass2').value = "";
            mostrarError(notSamePass);
          }
        }else{
          var emptyCamp = "Algun campo esta vacio.";
          mostrarError(emptyCamp);
        }
      }
      //funcion que envia los datos cuando la contraseña ha sido validada
      function enviar(){
        document.getElementById('formulario').submit();
      }
      //funcion que muestra los errores cuando se esta haciendo la validacion
      function mostrarError(mensError){
        document.getElementById('imprError').innerHTML = mensError;

      }
