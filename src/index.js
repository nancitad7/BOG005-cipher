import cipher from './cipher.js';

const btnmostrar = document.getElementById("mostrar");
btnmostrar.addEventListener("click", mostrarCajas)
function mostrarCajas() {

  document.getElementById("caja_fondos").style.display = "block";
  document.getElementById("caja_principal").style.display = "none";
}

const btnocultar = document.getElementById("ocultar");
btnocultar.addEventListener("click", ocultarCajas)
function ocultarCajas() {

  document.getElementById("caja_fondos").style.display = "none";
  document.getElementById("caja_principal").style.display = "block";
}

function mayusculas() {
  // tomamos el valor del input
  var texto = document.getElementById("mensaje1").value;
  // lo modificamos
  var mayu = texto.toUpperCase();
  // le reasignamos el valor modificado
  document.getElementById("mensaje1").value = mayu;
}
const texMay = document.getElementById("mensaje1");
texMay.addEventListener("keyup", mayusculas);


function cifrando() {

  let texto = document.getElementById("mensaje1").value;
  let desplazamiento = parseInt(document.getElementById("desplazarse").value);
  if (texto == "") {
    alert("introduce un mensaje")
  }
  if (document.getElementById("desplazarse").value == "") {
    alert("introduce numero de dezplazamiento")
  }

  let textoCifrado = cipher.encode(desplazamiento, texto);
  document.getElementById("mensaje2").value = textoCifrado;

}

const boton = document.getElementById("cifrar");

boton.addEventListener("click", cifrando);

function descifrando() {
  let texto = document.getElementById("mensaje1").value;
  let desplazamiento = parseInt(document.getElementById("desplazarse").value);
  document.getElementById("mensaje2");

  let textoDescifrado = cipher.decode(desplazamiento, texto);
  document.getElementById("mensaje2").value = textoDescifrado;
}

const botn = document.getElementById("descifrar");

botn.addEventListener("click", descifrando);


















