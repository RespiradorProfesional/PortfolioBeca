var vermas = document.getElementById("vermas");
var vermenos = document.getElementById("vermenos");
var desplegable = document.querySelector(".desplegar");
vermenos.style.cssText = "display:none; margin: 0 auto;";

/*  //esto fue una prueba de hover en javascript con texto que no funciono

var d3=document.querySelector(".3d");
var pro=document.querySelector(".pro");
var dibuj=document.querySelector(".dibuj");

var proText= document.createElement("h2");
proText.innerText = "Programacion";

var dibujoText= document.createElement("h2");
dibujoText.innerText = "Dibujo";

var d3Text = document.createElement("h2");
d3Text.innerText = "3D";

d3.onmouseover=function(){
  d3.appendChild(d3Text);
  d3.style.background="red";
}
d3.onmouseout=function(){
  d3.removeChild(d3Text);
  d3.style.background="none";
}

pro.onmouseover=function(){
  pro.appendChild(proText);
  pro.style.background="green";
}
pro.onmouseout=function(){
  pro.removeChild(proText);
  pro.style.background="none";
}

dibuj.onmouseover=function(){
  dibuj.appendChild(dibujoText);
  dibuj.style.background="yellow";
}
dibuj.onmouseout=function(){
  dibuj.removeChild(dibujoText);
  dibuj.style.background="none";
}
*/

var inicio = document.getElementById("inicio");
var mi = document.getElementById("mi");
var port = document.getElementById("port");
var contacto = document.getElementById("contacto");



vermas.addEventListener("click", function () {
  desplegable.classList.remove("desplegar");
  desplegable.classList.add("portfolio");
  vermas.style.cssText = "display:none; margin: 0 auto;";
  vermenos.style.cssText = "display:block margin: 0 auto;";
});

vermenos.addEventListener("click", function () {
  desplegable.classList.remove("portfolio");
  desplegable.classList.add("desplegar");
  vermenos.style.cssText = "display:none; margin: 0 auto;";
  vermas.style.cssText = "display:block margin: 0 auto;";
});

inicio.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

mi.addEventListener("click", function () {
  window.scrollTo({
    top: 850,
    behavior: "smooth",
  });
});

port.addEventListener("click", function () {
  window.scrollTo({
    top: 1600,
    behavior: "smooth",
  });
});

contacto.addEventListener("click", function () {
  window.scrollTo({
    top:100000,
    behavior: "smooth",
  });
});
