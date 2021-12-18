        var parrafo = "";
        var solucion = [];
        //console.log(palabras);

        var nueve = "";
        var ocho = "";
        var siete = "";
        var seis = "";
        var cinco = "";
        var cuatro = "";

        function importarScript(nombre) {
            var s = document.createElement("script");
            s.src = nombre;
            document.querySelector("head").appendChild(s);
        }

        function jugar(){
            importarScript("jugar.js");
            solucion = [];
            parrafo = "";
        }

        function vocal() {
            let vocales = ["A", "E", "I", "O", "U"];
            let n = Math.floor(Math.random() * vocales.length);
            //console.log(n);

            parrafo = parrafo + vocales[n];
            document.getElementById("texto").value = parrafo;

            if (parrafo.length == 9) {
                document.getElementById("vocal").disabled = true;
                document.getElementById("consonante").disabled = true;
                document.getElementById("comprobar").disabled = false;
                document.getElementById("reintentar").disabled = false;

                wait(function() {
                    cargarSolucion();
                });
            }
        }

        function consonante() {
            let consonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
            let n = Math.floor(Math.random() * consonantes.length);
            //console.log(n);

            parrafo = parrafo + consonantes[n];
            document.getElementById("texto").value = parrafo;

            if (parrafo.length == 9) {
                document.getElementById("vocal").disabled = true;
                document.getElementById("consonante").disabled = true;
                document.getElementById("comprobar").disabled = false;

                wait(function() {
                    cargarSolucion();
                });
            }
        }

        function wait(callback) {
            setTimeout(function() {
                callback();
            }, 0100);
        }

        function cargarSolucion() {
            let letras = document.getElementById("texto").value.toLowerCase().split("").sort();
            console.log("letras: " + letras);
            let state = true;

            diccionario.forEach(function(elemento) {
                let palabra = elemento.split("").sort();
                let j = 0;
                for(i = 0; i < letras.length; i++){
                    if(letras[i] == palabra[j]){
                        j++;
                    }
                }
                if(j == palabra.length){
                    solucion.push(elemento);
                }
            });
            console.log(solucion);
        }

        function escribePalabra() {
            document.getElementById("reintentar").style.display = "inline";
            for(let i = 0; i<solucion.length; i++){
                    if (solucion[i].length == 4) {
                        cuatro = cuatro + solucion[i] + ", ";
                    } else {
                        if (solucion[i].length == 5) {
                            cinco = cinco + solucion[i] + ", ";
                        } else {
                            if (solucion[i].length == 6) {
                                seis = seis + solucion[i] + ", ";
                            } else {
                                if (solucion[i].length == 7) {
                                    siete = siete + solucion[i] + ", ";
                                } else {
                                    if (solucion[i].length == 8) {
                                        ocho = ocho + solucion[i] + ", ";
                                    } else {
                                        if (solucion[i].length == 9) {
                                            nueve = nueve + solucion[i] + ", ";
                                        }
                                    }
                                }
                            }
                        }
                    }
            }

            document.getElementById("parrafo").innerHTML = "<strong>De 9 letras: </strong>" + nueve + "<br><br>" +
                "<strong>De 8 letras: </strong>" + ocho + "<br><br>" +
                "<strong>De 7 letras: </strong>" + siete + "<br><br>" +
                "<strong>De 6 letras: </strong>" + seis + "<br><br>" +
                "<strong>De 5 letras: </strong>" + cinco + "<br><br>" +
                "<strong>De 4 letras: </strong>" + cuatro + "<br><br>";

                nueve = "";
                ocho = "";
                siete = "";
                seis = "";
                cinco = "";
                cuatro = "";
        }