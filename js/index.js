let background = [
  "fond vert.png",
  "fond rose (1).png",
  "fond bleu (1).png"
]

function Brice() {

  const indiceBackground = Math.floor(Math.random() * background.length);
  document.querySelector(".background").src = background[indiceBackground];

}

document.querySelector(".bouton").addEventListener("click", Brice)


const bouton = document.getElementById("bouton");

const images = ["Fichier 2.png", "plante2.png", "plante 3 cactus.png"];
let indiceImage = 2;

document.querySelector(".boutonfeuilles").addEventListener("click", function () {
  // On incrémente l'indice de l'image actuelle
  indiceImage++;

  if (indiceImage >= images.length) {
    indiceImage = 0;
  }

  document.querySelector(".premiereplante").src = images[indiceImage];

});

const imagefenetres = ["fenetre 2.png", "fenetre.png", "fenetre4.png"];

document.querySelector(".boutonfenêtre").addEventListener("click", function () {
  indiceImage++;

  if (indiceImage >= imagefenetres.length) {
    indiceImage = 0;
  }
  document.querySelector(".fenetre1").src = imagefenetres[indiceImage];
  document.querySelector(".fenetre2").src = imagefenetres[indiceImage];
  document.querySelector(".fenetre3").src = imagefenetres[indiceImage];
});


var monboutonjour = document.querySelector(".monboutonjour");
var monboutonnuit = document.querySelector(".monboutonnuit");
var imageAffichee = document.getElementById("imageAffichee");

monboutonjour.addEventListener("click", function () {
  imageAffichee.src = "jour.png";
});

monboutonnuit.addEventListener("click", function () {
  imageAffichee.src = "nuit.png";

});

document.addEventListener('DOMContentLoaded', function() {
  var rendutexte = document.getElementById("rendutexte");
  var textarea = document.getElementById("monTextarea");
  
  textarea.addEventListener("input", function(){
    var textTape = textarea.value;
    rendutexte.innerHTML = textTape;
  })


})

var monTextarea = document.getElementById("monTextarea");
var valeurTextarea = monTextarea.value;

var boutonNuit = document.getElementById("monboutonnuit");
var contenu = document.getElementById("contenu");

boutonNuit.addEventListener("click", function() {
  contenu.classList.toggle("filternuit");
});


