//Ejercicio 1.1
let numEnlaces = "Hay " + document.querySelectorAll("a").length + " enlaces";
document.write(numEnlaces + "<br/>");

//Ejercicio 1.2
let enlaces = document.querySelectorAll("a");
let solucion = enlaces[enlaces.length - 2].href;
document.write(solucion + "<br/>");

//Ejercicio 1.3
let enlazaHref = document.querySelectorAll('a[href*="http://prueba"]');
document.write("Hay " + enlazaHref.length + " que empiezan por http://prueba"+"<br/>");

//Ejercicio 1.4
let enlacesTercer= document.querySelectorAll('p:nth-child(3) a');
document.write("El tercer párrafo contiene "+enlacesTercer.length+" enlaces");

