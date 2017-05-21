class Pakiman //Crear la clase Pakiman
{
  constructor(nombre, vida, ataque, tipo)//Generar las caracteristicas de la clase
  {
    this.image = new Image();
    this.name = nombre;
    this.life = vida;
    this.attack = ataque;
    this.type = tipo;

    this.image.src = imagenes[this.name];
  }
  hablar()
  {
    alert(this.name);
  }
  mostrar()
  {
    document.body.appendChild(this.image);//mostrar la imagen de los pakimanes
    document.write("<p>");
    document.write("Name: <strong> " + this.name + " </strong> <br>");
    document.write("Live: " + this.life + "<br>");
    document.write("Attack: " + this.attack + "<br>");
    document.write("Type: " + this.type + "<hr>");
    document.write("</p>");
  }
}
