var vp  = document.getElementById("villa_platzi");//llamar el arreglo canvas del archivo .html
var papel = vp.getContext("2d");//contexto 2D del canvas
var fondo = {url: "tile.png", cargaOK: false};
var vaca = {url: "vaca.png", cargaOk: false};
var cerdo = {url: "cerdo.png", cargaOK: false};
var pollo = {url: "pollo.png", cargaOK: false};
var lobo = {url: "lobo.png", cargaOk: false};
var xLobo = 420;
var yLobo = 80;
var teclas = {UP: 38, DOWN: 40, RIGHT: 39, LEFT: 37};
var movLobo = 70;
var cantidadVacas = aleatorio (1, 5);
var cantidadCerdos = aleatorio(1, 3);
var cantidadPollos = aleatorio(1, 10);
var cantidadLobos = 1;
var xVaca = new Array();
var yVaca = new Array();

console.log(cantidadVacas, "vacas");
console.log(cantidadCerdos, "cerdos");
console.log(cantidadPollos, "pollos");

document.addEventListener("keydown", moverLobo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;//llamar imagen "tile.png" situada en la carpeta origen.
fondo.imagen.addEventListener("load", cargarFondo);//arreglo para llamar la funcion encargada de cargar la imagen llamada en la variable

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;//llamar imagen "vaca.png" situada en la carpeta origen.
vaca.imagen.addEventListener("load", cargarVacas);//arreglo para llamar la funcion encargada de cargar la imagen llamada en la variable

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;//llamar imagen "cerdo.png" situada en la carpeta origen en la variable "cerdo".
cerdo.imagen.addEventListener("load", cargarCerdos);//arreglo para llamar la funcion encargada de cargar la imagen llamada en la variable

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;//llamar imagen "pollo.png" situada en la carpeta origen en la variable "pollo".
pollo.imagen.addEventListener("load", cargarPollos);//arreglo para llamar la funcion encargada de cargar la imagen llamada en la variable

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

//funcion para cargar la imagen del fondo
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar()
}
//funcion para cargar la imagen de la vaca
function cargarVacas()
{
  vaca.cargaOK = true;
  posicionAnimales()
}
//funcion para cargar la imagen del cerdo
function  cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar()
}
//funcion para cargar la imagen del pollo
function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar()
}
//funcion para cargar lobo
function cargarLobo()
{
  lobo.cargaOk = true;
  dibujar()
}

function aleatorio(min, max)//Crear una funcion que pida el  # minimo y el # maximo.
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
//funcion posicionAnimales
function posicionAnimales()
{
  if(vaca.cargaOK)
  {
    for(var i = 0; i < canti1dadVacas; i++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      var c = x * 5;
      var d = y * 5;
      var cVaca = c;
      var dVaca = d;
    }
  }
  dibujar();
}
//funcion para dibujar las imagenes
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    papel.drawImage(vaca.imagen, c, d);
  }
  if(cerdo.cargaOK)
  {
    for(var v = 0; v < cantidadCerdos; v++)
    {
      var x = aleatorio(0, 60);
      var y = aleatorio(0, 60);
      var a = x * 7;
      var b = y * 7;
      papel.drawImage(cerdo.imagen, a, b);
    }
  }
  if(pollo.cargaOk)
  {
    for(var v = 0; v < cantidadPollos; v++)
    {
      var x = aleatorio(0, 210);
      var y = aleatorio(0, 210);
      var j = x * 2;
      var h = y * 2;
      papel.drawImage(pollo.imagen, j, h);
    }
  }
  if(lobo.cargaOk)
  {
    papel.drawImage(lobo.imagen, xLobo, yLobo);
  }
}
function moverLobo (evento)
{

  if(evento.keyCode == 38)
  {
    yLobo = yLobo - movLobo;
    dibujar(xLobo, yLobo);
  }
  if(evento.keyCode == 40)
  {
    yLobo = yLobo + movLobo;
    dibujar(xLobo, yLobo);
  }
  if(evento.keyCode == 39)
  {
    xLobo = xLobo + movLobo;
    dibujar(xLobo, yLobo);
  }
  if(evento.keyCode == 37)
  {
    xLobo = xLobo - movLobo;
    dibujar(xLobo, yLobo);
  }
}
