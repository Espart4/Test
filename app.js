const a = "ai";
const e = "enter";
const i = "imes";
const o = "ober";
const u = "ufat";

// console.log(textoAPoner);
// console.log(textoIngresado);
// let textoAPoner2= document.CreateTextNode("textoIngresado.replace(/a/gi,a)");
// textoAPoner.appendChild(textoAPoner2);
// console.log(textoAPoner);
const textoIngresado = document.getElementById("textoingresado");

window.onload = textoIngresado.focus();

function CarNoValidos() {
  const textoIngresado = document.getElementById("textoingresado");

  textoIngresado.addEventListener("keyup", (e)=> {
  let expRegu= /[A-Záéíóú\u00B4]/g;
  let valorInput= e.target.value;
    // if(valorInput==expRegu){
      perro= textoIngresado.value= valorInput.replace(expRegu, "");
      if (valorInput==expRegu) {
        alert("no uses mayusculas urita");
      }
      // alert("no uses mayusculas urita");
      
    })
  //}
}

CarNoValidos();

function Encriptado() {
  let textoIngresado = document.getElementById("textoingresado");
  let textoAPoner = document.getElementById("textoAPoner");
  let contenidos1 = document.getElementById("contenidosDerecha1");
  let contenidos2 = document.getElementById("contenidosDerecha2");

  contenidos1.style.display= "none";
  // setTimeout(() => {
  contenidos2.style.removeProperty("display");
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
  textoIngresado.value="";
}

function desencriptado() {
  let textoIngresado = document.getElementById("textoingresado");
  let textoAPoner = document.getElementById("textoAPoner");
  let contenidos1 = document.getElementById("contenidosDerecha1");
  let contenidos2 = document.getElementById("contenidosDerecha2");

  if (contenidos2.style.display == "none") {
    contenidos2.style.removeProperty("display");
    contenidos1.style.display = "none";
  }

  let textoNuevo;
  let textoDesencriptado;

  textoNuevo=textoIngresado.value.replaceAll(a,"a").replaceAll(e, "e").replaceAll(i, "i").replaceAll(o, "o").replaceAll(u, "u");

  textoAPoner.value=textoNuevo;
  textoIngresado.value="";
}

function copiar(){
  let textoIngresado = document.getElementById("textoingresado");
  let textoAPoner = document.getElementById("textoAPoner");
  textoAPoner.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}