    // let variable = ["abi","bernard","bidule","truc"];

    //variable[0] = variable[0] + " " + variable[1];

    /*function Brice() {
        variable = variable + 1;
        console.log("hello");
        console.log("zelda");
        console.log("code");
        console.log("minecraft");
        console.log(variable);

        document.querySelector(".FEMME").innerHTML = variable;

    Brice();
    Brice();
    Brice();

    

    let background = ["https://img.freepik.com/vecteurs-libre/fond-monochrome-blanc-style-papier_52683-66443.jpg?w=996&t=st=1681717081~exp=1681717681~hmac=69e823b308dc6ff005232038e5f729cb398ef905aa7b3f26481a5c2780edd23f","https://img.freepik.com/photos-gratuite/texture-mur-stuc-bleu-marine-relief-decoratif-abstrait-grunge-fond-colore-rugueux-grand-angle_1258-28311.jpg?w=1380&t=st=1681719539~exp=1681720139~hmac=3049596cad2c0e19c43d74483afd2c21bcaafda3f382be1ca7b5150ffe503010"]
    function setBackground()
    const indiceAleatoire = Math.floor(Math.random() * 1);
    document.querySelector(".MAURICE").addEventListener("click", Brice);
}  */ 


/*let background = 
function setBackground()
const indiceAleatoire = Math.floor(Math.random() * 1); */


let background = [
  "fond vert.png",
  "fond rose.png"
]

function Brice() {

  const indiceBackground = Math.floor(Math.random() * background.length);
  document.querySelector(".background").src = background[indiceBackground];

}

document.querySelector(".bouton").addEventListener("click", Brice)


const bouton = document.getElementById("bouton");

bouton.addEventListener("click", () => {
  const element = document.getElementById("mon-element");
  element.textContent = "Le texte a été modifié !";
});

const images = ["Fichier 2.png", "plante2.png"];
let indiceImage = 1;

document.querySelector(".boutonfeuilles").addEventListener("click", function() {
  // On incrémente l'indice de l'image actuelle
  indiceImage++;

  // Si on est arrivé à la fin du tableau, on revient au début
  if (indiceImage >= images.length) {
    indiceImage = 0;
  }

  // On change la source de l'image
  document.querySelector(".premiereplante").src = images[indiceImage];
});