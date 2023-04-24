const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

/**      Ajout des Event Listeners sur les flèches       **/

const leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click", function () {
    console.log("Flèche gauche Ok", leftArrow);      // Test du fonctionnement des event listeners
});
const rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener("click", function () {
    console.log("Flèche droite Ok", rightArrow); // Test du fonctionnement des event listeners
});

/***            Ajout de "bullet" points au slider             ***/
let compteur = 0;                           // Création d’un compteur initialisé à zéro
for (let i in slides) {                    // Boucle de calcul / nombre de bullet == nombre de slides. = (let i = 0; i < slides.length, i++)
    
    let dot = document.createElement("div");           // Création de la variable div.dots.
    document.querySelector(".dots").appendChild(dot); // Positionnement de la variable div.dots.
    dot.classList.add("dot");                        // Assignation de la class .dots.
    if (i == compteur) {                            // Condition pour que ".dots_selected" se trouve sur la bonne "slide" il doit etre égale à la valeur du compteur
        dot.classList.add("dot_selected"); 
    }
}

/***                Modification du slide au click sur arrows             ***/

function bannerSlider() {
    /****Images****/
    let sliderImg = document.querySelector(".banner-img");                // Création d’une variable qui sélectionne .banner-img
    sliderImg.src = "assets/images/slideshow/" + slides[compteur].image; // On indique à la variable la source et le numéro de l'image à injecter via la fonction .src

    /****Text****/
    let text = document.getElementById("banner").querySelector("p"); // Création d’une variable qui sélectionne #banner > p
    text.innerHTML = slides[compteur].tagLine;                      // On indique à la variable la valeur tagLine du tableau à injecter via la fonction .innerHTML

    /****Bullet****/

    let dot = document.querySelectorAll(".dot");    // Création (rappel) de la variable dot qui sélectionne les div.dot

    for (let i in slides) { // Boucle de calcul in / nombre de bullet == nombre de slides./(let i = 0; i < slides.length, i++)
        dot[i].classList.remove("dot_selected"); // Supprime la class dot_selected précédement assigné
        if (i == compteur) {                    // Condition pour que ".dots_selected" indique la bonne "slide"
            dot[i].classList.add("dot_selected");
        } 
    }
}

leftArrow.addEventListener("click", function () {  // Au Click on créer une function qui décrémente le compteur
    compteur--;                                   // On décrémente
    if (compteur < 0) {
        compteur = slides.length - 1;           // Condition si compteur est inferieur à 0, alors compteur = 3 <=(longueur du tableau -1);
    }
    bannerSlider();                           // on appelle la fonction pour que le changement de bullet corresponde à l'image selectionné
});

rightArrow.addEventListener("click", function () { // Au Click on créer une function qui incrémente le compteur
    compteur++;                                 // On incrémente
    if (compteur > slides.length - 1) {        // Condition si compteur est superieur à 3 (slides.length - 1), alors le compteur = 0;
        compteur = 0;
    }
    bannerSlider();                         // On appelle la fonction pour que le changement d'image de tagline et de bullet fonctionne
});
