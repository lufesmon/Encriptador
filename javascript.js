function Encriptar(){
	
    //var numero1 = document.getElementById("numero1").value;
	//alert ("El resultado es : " + resultado);
	//document.getElementById('output').innerHTML = numero1;
	
	displaymensaje();
	var cadena = document.getElementById("Mensaje").value; //> <
	
	var encriptado = "";
	for (var i=0; i<cadena.length; i++){
    var continuar = true;
    if (cadena.charAt(i) == "a"){
        encriptado = encriptado + "ai";
        continuar = false;
    }
    if (cadena.charAt(i) == "e"){
        encriptado = encriptado + "enter";
        continuar = false;
    }
    if (cadena.charAt(i) == "i"){
        encriptado = encriptado + "imes";
        continuar = false;
    }
    if (cadena.charAt(i) == "o"){
        encriptado = encriptado + "ober";
        continuar = false;
    }
    if (cadena.charAt(i) == "u"){
        encriptado = encriptado + "ufat";
        continuar = false;
    }
    if (continuar){
        encriptado = encriptado + cadena.charAt(i);
    }
    //console.log("El caracter en el indice " + i + " es '" + cadena.charAt(i)+"'");
	//alert("Mensaje encriptado " + encriptado + "");
}
document.getElementById('output').innerHTML = encriptado;
//alert("Mensaje encriptado " + encriptado + "");
}

function copiar(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    //alert("copiado"+ text);
}

function Descencriptar(){
	displaymensaje();
	var cadena = ""; //> <
	var encriptado = document.getElementById("Mensaje").value;
	//alert(cadena)

	for (var i=0; i<encriptado.length; i++){
    var continuar = true;
    
    if (encriptado.charAt(i) == "a" && encriptado.charAt(i+1) == "i"){
        cadena = cadena + "a";
        continuar = false;
        i=i+1;
    }
    if (encriptado.charAt(i) == "e" &&
        encriptado.charAt(i+1) == "n" &&
        encriptado.charAt(i+2) == "t" &&
        encriptado.charAt(i+3) == "e" &&
        encriptado.charAt(i+4) == "r"){
        
        cadena = cadena + "e";
        continuar = false;
        i=i+4;
    }
    if (encriptado.charAt(i) == "i" &&
        encriptado.charAt(i+1) == "m" &&
        encriptado.charAt(i+2) == "e" &&
        encriptado.charAt(i+3) == "s"){
        
        cadena = cadena + "i";
        continuar = false;
        i=i+3;
    }
    if (encriptado.charAt(i) == "o" &&
        encriptado.charAt(i+1) == "b" &&
        encriptado.charAt(i+2) == "e" &&
        encriptado.charAt(i+3) == "r"){
        
        cadena = cadena + "o";
        continuar = false;
        i=i+3;
    }
    if (encriptado.charAt(i) == "u" &&
        encriptado.charAt(i+1) == "f" &&
        encriptado.charAt(i+2) == "a" &&
        encriptado.charAt(i+3) == "t"){
        
        cadena = cadena + "u";
        continuar = false;
        i=i+3;
    }

    if (continuar){
        cadena = cadena + encriptado.charAt(i);
    }
    //console.log("El caracter en el indice " + i + " es '" + cadena.charAt(i)+"'");
}
//alert(cadena)
document.getElementById('output').innerHTML = cadena;
//console.log("Mensaje des-encriptado " + cadena + "");
	
}

function displaymensaje() {
  var mensaje = document.getElementById("Mensaje");
  
  if (mensaje.value.length==0 ) {
  
		//alert("textarea vacio" + mensaje);
        var x = document.getElementById("conmensaje");
        var z = document.getElementById("sinmensaje");
        z.style.display = "block";
        x.style.display = "none";
		}
		
	else{
    
    	//alert("textarea no vacio" + mensaje);
        var x = document.getElementById("conmensaje");
        var z = document.getElementById("sinmensaje");
        z.style.display = "none";
        x.style.display = "block";
		}

}
