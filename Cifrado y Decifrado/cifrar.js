var letras = "a"; "b"; "c"; "d"; "e"; "f"; "g"; "h"; "i"; "j"; "k"; "l"; "m"; "n"; "ñ"; "o"; "p";
"q"; "r"; "s"; "t"; "u"; "v"; "w"; "x"; "y"; "z"; " ";
var output = [];

function handleFileSelect(evento) {

var fileInput = evento.target.files; // FileList object
var reader = new FileReader();

  for (var i =0, file; file = fileInput[i]; i++)
  {
  
  reader.onload = (function(theFile)
  {
    return function(e)
    {
      var span = document.createElement("span");
      span.innerHTML = ['<text class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>']
                        .join('');
      document.getElementById("text").insertBefore(span, null);
    }
  }
      ) (file);
    reader.readAsDataURL(file);
  }
}
document.getElementById("fileInput").addEventListener("change", handleFileSelect, false);
