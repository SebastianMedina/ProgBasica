var texto = document.getElementById("numero_lineas");/*Llamar elemento del codigo html*/
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);/*Realizar un evento*/

var d = document.getElementById("Dibujo");
var ancho = d.width;
var largo = d.height;
var lienzo = d.getContext("2d");/*contexto del canvas, puede ser 2D o 3D*/

/* Java script al momento de ejecutarse lo primero que lee son las fuinciones
    las funciones pueden tener definidos parametros pero no es obligatorio*/
function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);/*parseInt funciona para convertir el texto en numeros*/
  var xi, xf;
  var yi, yf;
  var espacio = ancho / lineas;/*espacio hace referencia al espacio que debe haber entre linea y linea*/

/*con el uso del for se realizan ciclos, definiendo los parametros necesarios.*/
  for (l = 0; l < lineas; l++)
  {
    xi = 0;
    xf = espacio * (l + 1);
    yi = espacio * l;
    yf = largo;
    dibujarlinea("Blue", xi, yi, xf, yf);
    /*console.log("l"); Funciona para ver el componente del comando en el navegador*/
  }
  dibujarlinea("Black", 1, 1, 299, 1);
  dibujarlinea("Black", 299, 299, 299, 1);
  dibujarlinea("Black", 1, 1, 1, 299);
  dibujarlinea("Black", 299, 299, 1, 299);
}
