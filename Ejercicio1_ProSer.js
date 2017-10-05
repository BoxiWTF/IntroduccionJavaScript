function cadena (cadena){
	var string = cadena;
	return { numero: function() { return isNaN(string)},
		 reves: function() { 				
			var x = string.length;
			var cadenaInvertida = "";
			while (x>=0) {
    			   cadenaInvertida = cadenaInvertida + string.charAt(x);
    			   x--;
  			}
  			return cadenaInvertida;
		},
		numcarac: function () {	
			var x = string.length;
			var contador = 0;
			while (x>=0) {
    			   contador++;
    			   x--;
  			}
  			return contador;
		},
		mayus: function() {return string.toUpperCase()}
		};
}

var ejemplo1 = cadena("3");
console.log(ejemplo1.numero());
console.log(ejemplo1.reves());
console.log(ejemplo1.numcarac());
console.log(ejemplo1.mayus());
