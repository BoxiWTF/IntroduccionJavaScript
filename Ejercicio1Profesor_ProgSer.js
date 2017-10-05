/*for (var i = 0; i < process.argv.length; i++){
	console.log(process.argv[i]);
}*/

if(process.argv.length < 3){
	process.exit(1);
}

console.log("Cadena leida: "+process.argv[2]);

var cadena = process.argv[2];

function procesarCadena(valorCadena){
	var _cadena = valorCadena;
	return{
		longitudCadena: function(){ return _cadena.length;},
		cadenaEsNumero: function(){ return !(isNaN(_cadena));},
		cadenaMayus: function(){ return _cadena.toUpperCase();},
		cadenaReves: function(){ return _cadena.split('').reverse().join('');},
		esPalindromo: function(){ return _cadena===this.cadenaReves();}
	};
}

var cadena1 = procesarCadena(cadena);
console.log("Longitud de la cadena: "+cadena+" es: "+cadena1.longitudCadena());
console.log("La cadena ¿es un numero?: "+cadena1.cadenaEsNumero());
console.log("La cadena en mayusculas es: "+cadena1.cadenaMayus());
console.log("La cadena al reves es: "+cadena1.cadenaReves());
console.log("La cadena es un palindromo: "+cadena1.esPalindromo());
