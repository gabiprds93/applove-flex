/*
 * Archivo principal de funcionalidad de JS
 */
var num = 9;
var mostrarImagen = document.getElementById("mostrarImagen");
var imagenes = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpg", "img-6.jpg", "img-7.jpg", "img-8.jpg", "img-9.jpg"];

for(var i = 1; i <= num; i++)
{
    var imagen = document.getElementById("img" + i);
    imagen.name = i;
    imagen.addEventListener("click", function(event)
    {
        mostrarImagen.className = "mostrar";
        while(mostrarImagen.childNodes.length >= 1)
        {
            mostrarImagen.removeChild(mostrarImagen.firstChild);
        }
        var div2 = document.createElement("div");
        div2.style.backgroundImage = "url('assets/images/img-" + event.target.getAttribute('name') + ".jpg')";
        var btnX = document.createElement("label")
        btnX.className = "hover";
        btnX.textContent = "\u02DF";
        btnX.addEventListener("click", function()
        {
            mostrarImagen.className = "oculto";
        });
        var btnSiguiente = document.createElement("label")
        btnSiguiente.className = "hover";
        btnSiguiente.id = "siguiente";
        btnSiguiente.textContent = ">";
        var cont = parseInt(event.target.getAttribute('name')) - 1;
        btnSiguiente.addEventListener("click", function()
        {
            cont++;
            if(cont >= imagenes.length)
                cont = 0;
            div2.style.backgroundImage = "url('assets/images/" + imagenes[cont] + "'";
        });
        var btnAnterior = document.createElement("label")
        btnAnterior.className = "hover";
        btnAnterior.id = "anterior";
        btnAnterior.textContent = "<";
        var contAtras = parseInt(event.target.getAttribute('name'));
        btnAnterior.addEventListener("click", function()
        {
            cont--;
            if(cont < 0)
                cont = imagenes.length - 1;
            div2.style.backgroundImage = "url('assets/images/" + imagenes[cont] + "'";
        });
        div2.appendChild(btnX);
        div2.appendChild(btnSiguiente);
        div2.appendChild(btnAnterior);
        mostrarImagen.appendChild(div2);
    });
}