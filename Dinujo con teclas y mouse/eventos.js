var teclas = {UP: 38, DOWN: 40, RIGHT: 39, LEFT: 37};
console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);/**/
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarlinea("Red", x - 1, y - 1, x + 1, x + 1, papel);

function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "Blue";
  var movimiento = 5;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.RIGHT:
      dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    case teclas.LEFT:
      dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    default:
  }
  /*ifif(evento.keyCode == teclas.UP)/*keyCode es el atributo del evento que
  permite ver el codigo de la letra oprimida*/
  /*ifconsole.log("UP");
  (evento.keyCode == teclas.DOWN)
  console.log("DOWN");
  if(evento.keyCode == teclas.RIGHT)
  console.log("RIGHT");
  if(evento.keyCode == teclas.LEFT)
  console.log("LEFT");*/
  /*CASOS DE USO (SWITCH/CASE)*/
}
