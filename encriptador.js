function validarMayusculas(texto) {
  var regexMayusculas = /[A-Z]/;
  if (regexMayusculas.test(texto)) {
    return false;
  }
  return true;
}

function validarAcentos(texto) {
  var regexAcentos = /[áéíóúÁÉÍÓÚ]/;
  if (regexAcentos.test(texto)) {
    return false;
  }
  return true;
}

var botonEncriptar = document.querySelector(".be");
var botonDesencriptar = document.querySelector(".bd");
var copiarBtn = document.getElementById("copiar-btn");

botonEncriptar.addEventListener("click", function () {
  var valorInput = document.querySelector(".t1").value;

  if (!validarMayusculas(valorInput)) {
    alert("El texto contiene mayúsculas.");
    return;
  } else if (!validarAcentos(valorInput)) {
    alert("El texto contiene acentos.");
    return;
  } else if (!validarAcentos(valorInput) || !validarMayusculas(valorInput)) {
    alert("El texto contiene tanto acentos como mayúsculas.");
    return;
  }

  function encriptarTexto(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
  }

  var textoEncriptado = encriptarTexto(valorInput);
  console.log("Texto original:", valorInput);
  console.log("Texto encriptado:", textoEncriptado);

  var muestraTexto = document.getElementById("muestra-texto");
  muestraTexto.value = textoEncriptado;

  if (muestraTexto.value.trim() !== "") {
    muestraTexto.style.backgroundImage = "none";
    copiarBtn.style.display = "block";
  } else {
    muestraTexto.style.backgroundImage = "url('imagenes/notext.png')";
    copiarBtn.style.display = "none";
  }
});

copiarBtn.addEventListener("click", function () {
  var muestraTexto = document.getElementById("muestra-texto");
  muestraTexto.select();
  document.execCommand("copy");
});

botonDesencriptar.addEventListener("click", function () {
  var textoEncriptado = document.querySelector(".t1").value;

  if (!validarMayusculas(textoEncriptado)) {
    alert("El texto contiene mayúsculas.");
    return;
  } else if (!validarAcentos(textoEncriptado)) {
    alert("El texto contiene acentos.");
    return;
  } else if (!validarAcentos(textoEncriptado) || !validarMayusculas(textoEncriptado)) {
    alert("El texto contiene tanto acentos como mayúsculas.");
    return;
  }

  function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
  }

  var textoEncriptado = desencriptarTexto(textoEncriptado);
  console.log("Texto encriptado:", textoEncriptado);
  console.log("Texto original:", valorInput);

  var muestraTexto = document.getElementById("muestra-texto");
  muestraTexto.value = textoEncriptado;

  if (muestraTexto.value.trim() !== "") {
    muestraTexto.style.backgroundImage = "none";
    copiarBtn.style.display = "block";
  } else {
    muestraTexto.style.backgroundImage = "url('imagenes/notext.png')";
    copiarBtn.style.display = "none";
  }
});