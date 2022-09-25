//1 - Selecciona todos los elementos de tipo h2 y pon el texto de color rojo.
let rojos=document.querySelectorAll('h2');
for(let i=0;i<rojos.length;i++){
    rojos[i].setAttribute("style","color:red");
}

//2 - Modifica el precio del vuelo para que ahora sea $199.99
let precioVuelos=document.querySelectorAll('[class="details"]');
for(let i=0;i<precioVuelos.length;i++){
    precioVuelos[i].innerHTML="$199.99";
}

//3 - Modifica todos los títulos de las vacaciones (h2), su nuevo valor será "Sanlúcar de Barrameda".
for(let i=0;i<rojos.length;i++){
    rojos[i].innerHTML="Sanlúcar de Barrameda";
}

//4 - Selecciona la lista de vacaciones cuyo id es #vacations.
console.log(document.querySelector('#vacations'));

//5 - Selecciona aquellos ítems que tenga la clase .america
console.log(document.getElementsByClassName("america"));