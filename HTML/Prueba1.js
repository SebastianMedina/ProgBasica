//condicionales

//var edad = 23;

//if(edad > 0 && edad < 10){

var fecha = new Date();
var dia = fecha.getDay();
console.log(dia);

switch(dia){
	case 0;
		console.log("Es Domingo");
		break;
	case 1;
		console.log("Es Lunes");
		break;
	case 2;	
		console.log("Es Martes");
		break;
	case 3;			
		console.log("Es Miercoles");
		break;	
	case 4;	
		console.log("Es Jueves");
		break;
	case 5;	
		console.log("Es Viernes");
		break;
	case 6;	
		console.log("Es Sabado");
		break;
	default;	
		console.log("No se que dia es");
		break;			
}	