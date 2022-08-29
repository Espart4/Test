const letterChng = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const textoIngresado = document.getElementById("textoingresado");
const textoAPoner = document.getElementById("textoAPoner");
const contenidos1 = document.getElementById("contenidosDerecha1");
const contenidos2 = document.getElementById("contenidosDerecha2");
const cont2None = (contenidos2.style.display = "none");
const keysLetterChng = Object.keys(letterChng);
const valuesLetterChng = Object.values(letterChng);
const arrayLetterChng = Object.entries(letterChng);

window.onload = textoIngresado.focus();
carNoValidos();
// function carNoValidos() {
//   textoIngresado.addEventListener("keyup", (e) => {
//     let expreg = /[A-Záéíóú\u00B4@!"#$%&/()=?¡¨¨*;:_,.-{}+´´¿'+|°¬~^`]/g
//     let valorInput= e.target.value;
//       textoIngresado.value = valorInput.replace(
//         expreg,""
//       )
//   });
// }

function carNoValidos() {
  const textoIngresado = document.getElementById("textoingresado");
  textoIngresado.addEventListener("keyup", (e) => {
    let expRegu = /[A-ZÑáéíóú@!"#$%&()=?¡¨*;:_,.`´|^~°¬{}+¿'\\\[\]\-]/g; //.- (elimina los numeros)
    let valorInput = e.target.value;
    if (expRegu.test(valorInput)) {
      textoIngresado.value = valorInput.replace(expRegu, "")      
        swal("!No uses caracteres inválidos!","Sólo letras minúsculas y sin acento", "error")
        .then((willDelete) => {
          if (willDelete) {
            textoIngresado.focus()
          }
        })
    }
  })
}
function encriptar() {
  videoPop();
  animar();
  if (cont2None) {
    contenidos1.style.display = "none";
    contenidos2.style.removeProperty("display");
  }
  let textoEncriptado1 = textoIngresado.value;
  let textoEncriptado2 = [];
  for (let i = 0; i < textoEncriptado1.length; i++) {
    textoEncriptado2.push(textoEncriptado1[i]);
    for (let x = 0; x < keysLetterChng.length; x++) {
      if (textoEncriptado1[i] == keysLetterChng[x]) {
        textoEncriptado2.pop();
        textoEncriptado2.push(valuesLetterChng[x]);
      }
    }
  }
  textoEncriptado2 = textoEncriptado2.join("");
  textoAPoner.value = textoEncriptado2;
}

// function Encriptar() {
//   videoPop();
//   animar();
//   if (cont2None) {
//     contenidos1.style.display = "none";
//     contenidos2.style.removeProperty("display");
//   }

//   textoDividido = textoIngresado.value.split("");
//   let textoNuevo = [];
//   let textoEncriptado;

//   for (let index = 0; index < textoDividido.length; index++) {
//     let letra = textoDividido[index];
//     textoNuevo.push(letra);
//     if (
//       letra == "a" ||
//       letra == "e" ||
//       letra == "i" ||
//       letra == "o" ||
//       letra == "u"
//     ) {
//       if (letra == "a") {
//         textoNuevo.pop();
//         textoNuevo.push(letra.replace(letra, a));
//       }

//       if (letra == "e") {
//         textoNuevo.pop();
//         textoNuevo.push(letra.replace(letra, e));
//       }

//       if (letra == "i") {
//         textoNuevo.pop();
//         textoNuevo.push(letra.replace(letra, i));
//       }

//       if (letra == "o") {
//         textoNuevo.pop();
//         textoNuevo.push(letra.replace(letra, o));
//       }

//       if (letra == "u") {
//         textoNuevo.pop();
//         textoNuevo.push(letra.replace(letra, u));
//       }
//     }
//   }

//   textoEncriptado = textoNuevo.join("");
//   textoAPoner.value = textoEncriptado;
// }
//            /\
//            ||
//            ||

// const a = "ai";
// const e = "enter";
// const i = "imes";
// const o = "ober";
// const u = "ufat";

// mapeoValues= valuesLetterChng.map((x, valorLetra)=> x,valorLetra)
// let textoEncriptado1= textoIngresado.map(letra => letra.includes(valuesLetterChng))

// let mapValues = Object.entries(letterChng).forEach(([pos,value]) => value)
// let mapPos = Object.entries(letterChng).forEach(([pos,value]) => pos)
// let textoNuevo
// let textoDividido= textoIngresado.split()

// .replaceAll(arrayLetterChng[0][1], arrayLetterChng[0][0])
// .replaceAll(arrayLetterChng[1][1], arrayLetterChng[1][0])
// .replaceAll(arrayLetterChng[2][1], arrayLetterChng[2][0])
// .replaceAll(arrayLetterChng[3][1], arrayLetterChng[3][0])
// .replaceAll(arrayLetterChng[4][1], arrayLetterChng[4][0]);

function desencriptar() {
  videoPop();
  animar();
  let textoNuevo = textoIngresado.value;
  if (cont2None) {
    contenidos1.style.display = "none";
    contenidos2.style.removeProperty("display");
  }
  for (let z = 0; z < arrayLetterChng.length; z++) {
    if (textoNuevo.includes(arrayLetterChng[z][1])) {
      textoNuevo = textoNuevo.replaceAll(
        arrayLetterChng[z][1],
        arrayLetterChng[z][0]
      );
    }
  }
  textoAPoner.value = textoNuevo;
}

function copiar() {
  let textoIngresado = document.getElementById("textoingresado");
  let textoAPoner = document.getElementById("textoAPoner");
  textoAPoner.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  let mostrar =setInterval(() => {
    swal("!TEXTO COPIADO CON EXITO¡","","success")
    .then((willDelete) => {
      if (willDelete) {
        textoIngresado.focus()
      }
    })
    clearInterval(mostrar) 
  }, 0)
  // mostrar==1 && clearInterval(mostrar)

}

function animar() {
  textoAPoner.classList.toggle("animacionTxt");
  document.getElementById("derecha").classList.remove("animacion");
  document.getElementById("derecha").classList.toggle("animacion2");
  setTimeout(() => {
    textoAPoner.classList.toggle("animacionTxt");
    document.getElementById("derecha").classList.toggle("animacion2");
  }, 3000);
}

function videoPop() {
  let vidPlay = document.getElementById("vid");
  vidPlay.load();
  vidPlay.play();
  let videoMostra = document.getElementById("video");
  videoMostra.classList.toggle("vidMostrar");
  setTimeout(() => {
    videoMostra.classList.toggle("vidMostrar");
  }, 3000);
}
