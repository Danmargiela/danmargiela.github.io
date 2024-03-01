function validarMayusculas(texto) {
  var regexMayusculas = /[A-Z]/;
  return !regexMayusculas.test(texto);
}

function validarAcentos(texto) {
  var regexAcentos = /[áéíóúÁÉÍÓÚ]/;
  return !regexAcentos.test(texto);
}
function validarCaracteresEspeciales(texto) {
  var regexCaracteresEspeciales = /^[a-z]*$/; 
  return regexCaracteresEspeciales.test(texto);
}

var copiarBtn = document.getElementById("copiar-btn");
var valorInput;

document.querySelector(".be").addEventListener("click", function () {
  valorInput = document.querySelector(".t1").value;

  if (!validarMayusculas(valorInput)) {
    alert("El texto no debe contener mayúsculas.");
    return;
  } else if (!validarAcentos(valorInput)) {
    alert("El texto no debe contener letras con acentos.");
    return;
  } else if (!validarCaracteresEspeciales(valorInput)) {
    alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
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

document.querySelector(".bd").addEventListener("click", function () {
  var textoEncriptado = document.querySelector(".t1").value;

  if (!validarMayusculas(textoEncriptado)) {
    alert("El texto no debe contener mayúsculas.");
    return;
  } else if (!validarAcentos(textoEncriptado)) {
    alert("El texto no debe contener letras con acentos.");
    return;
  } else if (!validarCaracteresEspeciales(textoEncriptado)) {
    alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }

  function desencriptarTexto(texto) {
    texto = texto.replace(/ufat/g, "u");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/enter/g, "e");

    return texto;
  }

  var textoDesencriptado = desencriptarTexto(textoEncriptado);
  console.log("Texto encriptado:", textoDesencriptado);
  console.log("Texto original:", valorInput);

  var muestraTexto = document.getElementById("muestra-texto");
  muestraTexto.value = textoDesencriptado;

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
