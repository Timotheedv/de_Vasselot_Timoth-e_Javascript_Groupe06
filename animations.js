// Quand on clique sur un Bouton :
// Des rectangles sont animés
// L'animation fonctionne dans les deux sens

// I Créer les blocs en HTML
// II Créer les styles CSS (couleur sur nos blocs, transition CSS)
// III JS : 
// 1. Selectionner le bouton + cartes/rectangles
// 2. Implémenter l'ecoute d'un évènement clique
// 3. Action qui s'applique / Fonction

const button = document.querySelector("button");

const cards = document.querySelectorAll('.cards');



button.addEventListener("click", function () {


    for (i = 0; i < 5; i++) {
      cards[i].classList.toggle("active");
      cards[i].style.transitionDelay = (0.15 * i) + "s";
    }
});



//Lorsque je clique sur le bouton : 
// Des rectangles nommés cards sont animés et apparaissent avec la possibilité de cliquer sur des boutons
//Les cards peuvent alors apparaitre et etre ranger. Les deux sens fonctionnent

//Je crée donc les blocs HTML
//Je crée aussi les blocs CSS que je lie à mon HTML
//Ensuite je crée une page Javascript que je lie avec mon HTML juste au dessus de la balise </body>

//1. Je commence donc par créer 2 constantes qui vont déclarer une réference constante dans la suite de mon code
//Dans les deux const utilisés, j'utilise la méthode de l'interface Document pour utiliser querySelector et querySelectorAll 
//afin de créer une boucle

//2. La deuxième étape consiste à écouter un évenement : c'est à dire utiliser un addEvenListener pour la class bouton et 
//de lui ajouter la fonction "clique" afin de régir à un évenement. Cela va envoyer un élement à sa cible à chaque fois que 
//la fonction est appelée.

//3. - La fonction à appeler est donc une boucle "for" que l'on utilise pour executer un code un ceratin nombre de fois.
//   - i=0 car il s'agit de l'expression initiale, i<5 il s'agit de la condition : parmi mes 5 cards la boucle  fonctionnera 
//si les 5 cards n'ont pas été activées
//   - Utilisation de classList et toggle pour modifier un élements et y ajouter une classe : classList va renvoyer le nom
//de ma class ("active") en CSS et toggle va permettre d'effectuer lamodification de la classe afin de supprimer/cacher/ajouter
//des élements.
//   - Enfin on utilise le transitionDelay afin de réaliser un temps de transition entre les mouvements effectués
//  mes 5 cards : un espace de 0.15 secondes est effectué entre chaque transition de cards allant de la gauche vers la droite.
     









// Selecteurs
const body = document.querySelector("body");



// Listener
button.addEventListener("click", function() {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    button.innerText = "Découvrez tous mes projets ☀️";
   
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