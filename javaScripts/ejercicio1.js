//Ejercicio 1
let body=document.querySelector('body');
let numEnlaces="Hay " +document.querySelectorAll('a').length+" enlaces";
let parrafo=document.createElement('p');
let texto=document.createTextNode(numEnlaces);
parrafo.appendChild(texto);
body.appendChild(parrafo);

//Ejercicio 2
console.log(document.querySelectorAll('a:nth-last-of-type(2)'));

//Ejercicio 3
