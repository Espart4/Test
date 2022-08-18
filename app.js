const a = "ai";
const e = "enter";
const i = "imes";
const o = "ober";
const u = "ufat";
const textoIngresado = document.getElementById("textoingresado");
const textoAPoner = document.getElementById("textoAPoner");
const contenidos1 = document.getElementById("contenidosDerecha1");
const contenidos2 = document.getElementById("contenidosDerecha2");

window.onload = textoIngresado.focus();

function CarNoValidos() {
  textoIngresado.addEventListener("keyup", (e) => {
    let expRegu = /[A-Záéíóú\u00B4]/g;
    let valorInput = e.target.value;
    // console.log(valorInput == expRegu);
    textoIngresado.value = valorInput.replace(expRegu, "");
    if (valorInput == expRegu) {
      alert("no uses mayusculas urita");
    }
  });
}
CarNoValidos();

contenidos2.style.display = "none";

function Encriptado() {
  if (contenidos2.style.display = "none") {
    contenidos1.style.display = "none";
    contenidos2.style.removeProperty("display");
  // contenidos2.style.animationName = "transicions";
  // contenidos2.style.animationDuration = "2s";
  }
  // }, 1000);
  // contenidos2.className.replace("contenidosDerecha2", "transicion");
  textoDividido = textoIngresado.value.split("");
  // console.log(textoDividido);
  let textoNuevo = [];
  let textoEncriptado;
  for (let index = 0; index < textoDividido.length; index++) {
    let letra = textoDividido[index];
    // console.log(textoNuevo);
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
        // console.log(textoNuevo);
      }

      if (letra == "e") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, e));
        // console.log(textoNuevo);
      }

      if (letra == "i") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, i));
        // console.log(textoNuevo);
      }

      if (letra == "o") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, o));
        // console.log(textoNuevo);
      }

      if (letra == "u") {
        textoNuevo.pop();
        textoNuevo.push(letra.replace(letra, u));
        // console.log(textoNuevo);
      }

      // console.log(textoNuevo);
    }
  }
  textoEncriptado = textoNuevo.join("");
  textoAPoner.value = textoEncriptado;
  textoIngresado.value = "";
}

function desencriptado() {

  if (contenidos2.style.display = "none") {
    contenidos1.style.display = "none";
    contenidos2.style.removeProperty("display");
  // contenidos2.style.animationName = "transicions";
  // contenidos2.style.animationDuration = "2s";
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
  textoIngresado.value = "";
}
function copiar() {
  let textoIngresado = document.getElementById("textoingresado");
  let textoAPoner = document.getElementById("textoAPoner");
  textoAPoner.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  window.location.reload();
}
