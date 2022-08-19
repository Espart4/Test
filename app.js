const a = "ai";
const e = "enter";
const i = "imes";
const o = "ober";
const u = "ufat";
const textoIngresado = document.getElementById("textoingresado");
const textoAPoner = document.getElementById("textoAPoner");
const contenidos1 = document.getElementById("contenidosDerecha1");
const contenidos2 = document.getElementById("contenidosDerecha2");
const cont2None = (contenidos2.style.display = "none");

window.onload = textoIngresado.focus();
carNoValidos();

function carNoValidos() {
  textoIngresado.addEventListener("keyup", (e) => {
    let expRegu = /[A-Záéíóú\u00B4]/g;
    let valorInput = e.target.value;
    textoIngresado.value = valorInput.replace(expRegu, "");
  });
}

function Encriptado() {
  videoPop();
  animar();
  if (cont2None) {
    contenidos1.style.display = "none";
    contenidos2.style.removeProperty("display");
  }

  textoDividido = textoIngresado.value.split("");
  let textoNuevo = [];
  let textoEncriptado;

  for (let index = 0; index < textoDividido.length; index++) {
    let letra = textoDividido[index];
    textoNuevo.push(letra);
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      if (letra == "a") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, a));
      }

      if (letra == "e") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, e));
      }

      if (letra == "i") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, i));
      }

      if (letra == "o") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, o));
      }

      if (letra == "u") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, u));
      }
    }
  }

  textoEncriptado = textoNuevo.join("");
  textoAPoner.value = textoEncriptado;
}

function desencriptado() {
  videoPop();
  animar();
  if (cont2None) {
    contenidos1.style.display = "none";
    contenidos2.style.removeProperty("display");
  }

  let textoNuevo;
  let textoDesencriptado;
  textoNuevo = textoIngresado.value
    .replaceAll(a, "a")
    .replaceAll(e, "e")
    .replaceAll(i, "i")
    .replaceAll(o, "o")
    .replaceAll(u, "u");

  textoAPoner.value = textoNuevo;
}

function copiar() {
  let textoIngresado = document.getElementById("textoingresado");
  let textoAPoner = document.getElementById("textoAPoner");
  textoAPoner.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function animar() { 
  textoAPoner.classList.toggle("animacionTxt")
  document.getElementById("derecha").classList.remove("animacion");
 document.getElementById("derecha").classList.toggle("animacion2");
  setTimeout(() => {
    textoAPoner.classList.toggle("animacionTxt")
    document.getElementById("derecha").classList.toggle("animacion2");
  }, 3000); 
}

function videoPop() {
  let vidPlay= document.getElementById("vid");
  vidPlay.load();
  vidPlay.play();
  let videoMostra = document.getElementById("video");
  videoMostra.classList.toggle("vidMostrar");
  setTimeout(() => {
    videoMostra.classList.toggle("vidMostrar");
  }, 3000);

}