//- Pon tu nombre al atributo value del campo first name
document.querySelector("label").setAttribute("name", "Javi");

//- Pon el valor a la pregunta Favorite Day of Week a Monday
let lunes = document.querySelector('[value="Monday"]');
lunes.setAttribute("selected", true);

//- Cambia la etiqueta de First name a 'Tu nombre'
let primerNombre = (document.querySelector("label").innerHTML = "Tu nombre");

//- Obtén el valor del atributo 'name' del campo Favorite Day of The Week
let valor = document.querySelector("select");
console.log(valor.name);

//- Escoge la opción Female de la pregunta de género.
let sexo = document.querySelector('[value="female"');
sexo.setAttribute("checked", true);

//- Encuentra la primera form del documento y pon el atributo name = personal_info
document.querySelector("form").setAttribute("name", "personal_info");

// - Encuentra la primera form del documento y pon el atributo name = job_info
document.querySelector("form").setAttribute("name", "job_info");

//- Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
//Saco el body
let body=document.querySelector('body');
//Creo la etiqueta
let titulo=document.createElement('h1');
//Creo el contenido
let cont=document.createTextNode("Entrevista Personal");
//Meto el contenido dentro del h1
titulo.appendChild(cont);
//Desde el body meto el h1 en el formulario primero
body.insertBefore(titulo,document.querySelector("form"));

let segundoTitulo=document.createElement('h1');
let contenido=document.createTextNode("Entrevista de trabajo");
segundoTitulo.appendChild(contenido)
body.insertBefore(segundoTitulo,document.querySelector("form:nth-of-type(2)"));

//- Agrega un título a la pregunta Male/Female 'Gender



