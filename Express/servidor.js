var express = require("express");//llamar la libreria express en la variable del mismo nombre (puede tener cualquier nombre)
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

              //Request , Respond
function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>home</strong> que bueno. ");
}
function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong>cursos</strong>. ");
}
aplicacion.listen(8989);//Esto se refiere a que la aplicacion se va a ver por el puerto 8989
