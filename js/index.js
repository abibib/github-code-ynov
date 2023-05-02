let background = [
  "fond vert.png",
  "fond rose.png",
  "fond bleu.png"
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

  // Si on est arrivé à la fin du tableau, on revient au début
  if (indiceImage >= images.length) {
    indiceImage = 0;
  }

  // On change la source de l'image
  document.querySelector(".premiereplante").src = images[indiceImage];
});