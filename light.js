// Selecteurs
const body = document.querySelector("body");



// Listener
button.addEventListener("click", function() {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    button.innerText = "Ranger tous mes projets ☀️";
   
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    button.innerText = "🌚 Découvrez tous mes projets 🌚";
    
  }
});



//Lorsque je clique sur le bouton : 
// Le fond de ma page change de couleur ainsi que la police d'éciture. (Devient sombre et écriture clair)


//Je crée donc les blocs HTML
//Je crée aussi les blocs CSS que je lie à mon HTML
//Ensuite je crée une page Javascript que je lie avec mon HTML juste au dessus de la balise </body>

//1. Je commence donc par créer 2 constantes qui vont déclarer une réference constante dans la suite de mon code
//Dans les deux const utilisés, j'utilise la méthode de l'interface Document pour utiliser querySelector.

//2. La deuxième étape consiste à réagir à un évenement : c'est à dire utiliser un addEvenListener pour la class bouton et 
//de lui ajouter la fonction "clique" afin de régir à un évenement. Cela va envoyer un élement à sa cible à chaque fois que 
//la fonction est appelée. 

//3. J'utilise l'instruction "if" qui va executer une instruction et me dire si sa condition est vraie :
//classList va renvoyer le nom de mes classes dans le CSS et modifier et ajouter une autre classe.
// Globalement cela signifie que si j'appuie sur le bouton et que ma classe ("light") est active alors 
//mon CSS va etre modifié de la facon suivante : la class light se retire et et la class dark s'ajoute.
//Ensuite la fonction InnerText va pemettre d'inserer et de remplacer un texte à l'interieur de mon bouton
//(soit remplacer du contenu en JS)