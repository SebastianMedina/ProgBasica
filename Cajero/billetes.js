var caja = [];
var entregado = [];
var dinero;
var div;
var papeles;
var b = document.getElementById("extraer");
var r = document.getElementById("resultado");
b.addEventListener("click", extraerDinero);

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

caja.push(new Billete(50, 300));
caja.push(new Billete(20, 200));
caja.push(new Billete(10, 200));

function extraerDinero()
{
var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if (dinero > 0)
  {
    r.innerHTML = "Soy un cajero pobre :(";
  }
  else
  {
    for (var e of entregado)
    {
      if (e.cantidad > 0)
      {
      r.innerHTML = r.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br>";
      }
    }
  }
}
