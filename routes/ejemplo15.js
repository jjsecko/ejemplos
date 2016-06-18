//sentencia if - else
function contarA (cadena) {
var contA=0;
var i=0;
while (i<=cadena.length){
	if (cadena [i] == "a") {
		contA ++;
     } 
 i++;
    }
 return contA;
}
console.log("la cantidad de A es");
console.log(contarA("hola roxana"));
