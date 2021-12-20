document.getElementById("intro").style.display = "none";
document.getElementById("juego").style.display = "block";
document.getElementById("juego").innerHTML = "<h1>Juego de las letras</h1>\
<button id='vocal' onclick='vocal()'>VOCAL</button>\
<button id='consonante' onclick='consonante()'>CONSONANTE</button><br><br><br>\
<input type='text' id='texto' size='9' readonly><br><br>\
<button onclick='escribePalabra()' id='comprobar' disabled>Buscar soluciones</button><br><br><br>\
<p id='parrafo'></p><br><br>\
<button id='reintentar' onclick='jugar()' style='display: none;'>Jugar de nuevo</button>"