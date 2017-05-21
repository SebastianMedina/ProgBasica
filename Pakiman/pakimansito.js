var imagenes = [];
imagenes["Cauchin"] = "pollo.png";
imagenes["Pokacho"] = "lobo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Vaquimon"] = "vaca.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 35, "Fuego"));
coleccion.push(new Pakiman("Pokacho", 100, 55, "Trueno"));
coleccion.push(new Pakiman("Tocinauro", 100, 45, "Roca"));
coleccion.push(new Pakiman("Vaquimon", 100, 35, "Tierra"));

for (var sebas of coleccion)
{
  sebas.mostrar()
}
