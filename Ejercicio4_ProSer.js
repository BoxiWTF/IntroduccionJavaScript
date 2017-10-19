//Comprobamos que se recoge la cadena
if(process.argv.length < 3){
        process.exit(1);
}

console.log("Cadena leida: "+process.argv[2]);

var cadena = process.argv[2];

//Constructor de Documentos (factoria de objetos de tipo Documento)
function Documento(documento){
  this.documento = documento;
}

//Realizamos los prototipos
var expreg1 = /^\d{8}[a-zA-Z]$/;
var expreg2 = /^\d{8}$/;
Documento.prototype.validar = function(){
  if(expreg1.test(this.documento) || expreg2.test(this.documento)){
         return true;
  }else {
  return false;
  }
};


var documento1 =  new Documento(cadena);
console.log('Es un Dni o un Nif: '+ documento1.validar());
