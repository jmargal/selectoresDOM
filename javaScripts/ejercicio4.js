//1 - Selecciona todos los elementos de tipo h2 y pon el texto de color rojo.
let rojos=document.querySelectorAll('h2');
for(let i=0;i<rojos.length;i++){
    rojos[i].setAttribute("color","red");
}

//2 - Modifica el precio del vuelo para que ahora sea $199.99