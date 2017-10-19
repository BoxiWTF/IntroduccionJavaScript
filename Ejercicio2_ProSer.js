if(process.argv.length < 3){
        process.exit(1);
}

console.log("Cadena leida: "+process.argv[2]);

var cadena = process.argv[2];

function procesarCadena(valorCadena){
  var JuegoCaracteres="TRWAGMYFPDXBNJZSQVHLCKET";
	var expreg1 = /^\d{8}[a-zA-Z]$/;
	var expreg2 = /^\d{8}$/;
  var _cadena = valorCadena;
  return{
        validar: function(){
				      if(expreg1.test(_cadena) || expreg2.test(_cadena)){
					           return true;
				      }else {
					    return false;
				      }
			   },
        dnionif: function(){
				      if(expreg1.test(_cadena)){
					           console.log("Es un DNI");
				       }
				      if(expreg2.test(_cadena)){
					           console.log("Es un NIF");
				       }
			   },
		    letraNIF: function(){
				      if(expreg2.test(_cadena)){
                     var posicion= parseInt(_cadena) % 23;
                     var letra = JuegoCaracteres.charAt(posicion);
                     return 'La letra del NIF seria: '+letra;
				      }
				      if(expreg1.test(_cadena)){
					           return 'Es un DNI, ya tiene letra'
				      }
        }
   }
}

var cadena1 = procesarCadena(cadena);
console.log("Se ha introducido un DNI o NIF: "+cadena1.validar());
cadena1.dnionif();
console.log(cadena1.letraNIF());
