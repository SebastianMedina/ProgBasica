var estado = 0; //Estado del mouse 0 = sin presionar
var colorLinea = "black"; //Color de las lineas
var path = document.getElementById("area_de_dibujo"); //Llamar area de dibujo establecida en el canvas (html)
var area = path.getContext("2d"); //Establecer el contexto del dibujo (2d o 3d)
var x;//Se establece la variable en donde se guardara el movimiento en el eje X
var y;//Se establece la variable en donde se guardara el movimiento en el eje Y

document.addEventListener("mousedown",presionarMouse); //Se crea el evento en donde se registra cuando el Mouse se oprime
document.addEventListener("mouseup",soltarMouse); //Se crea el evento en donde se registra cuando el Mouse se suelta
document.addEventListener("mousemove",dibujarMouse); //Se crea un evento para dibujar lineas mientras el mouse se oprime

//Dibujar marjen del area de dibujo
dibujarLinea("Green", 1, 1, 299, 1, area);
dibujarLinea("Green", 1, 1, 1, 299, area);
dibujarLinea("Green", 299, 1, 299, 299, area);
dibujarLinea("Green", 1, 299, 299, 299, area);

//Funcion para el evento mousedown
function presionarMouse(evento)
{
  estado = 1; //Se presiona el mouse (click)
  //se establecen las coordenadas en x y en Y donde comienza la linea
  x = evento.layerX;
  y = evento.layerY;
}
//Funcion para dibujo de las lineas
function dibujarMouse(evento)
{
  //se crea un condicionante en donde se especifica que si el Mouse esta oprimido
  //y este se mueve (mientras esta orpimido), se debe dibujar una linea
  if (estado == 1)
  {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, area);
  }
  //se establecen las coordenadas en X y en Y en donde termina la linea
  x = evento.layerX;
  y = evento.layerY;
}
//Funcion para el evento mouseup
function soltarMouse(evento)
{
  estado = 0;//Se suelta el mouse
  //se establecen las coordenadas en X y en Y en donde termina la linea
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}
