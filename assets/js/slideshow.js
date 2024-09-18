

let slideIndex = 1;
showSlides(slideIndex);

// Déclaration de la variable pour l'intervalle
let slideInterval;

// Fonction pour démarrer le défilement automatique
function startSlideShow() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 4500); // 4500 millisecondes = 4,5 secondes
}

// Fonction pour arrêter le défilement automatique
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Appeler la fonction pour démarrer le défilement automatique
startSlideShow();

// Next/previous controls
function plusSlides(n) {
  stopSlideShow(); // Arrête le défilement automatique lorsqu'un utilisateur interagit
  showSlides(slideIndex += n);
  startSlideShow(); // Redémarre le défilement automatique après interaction
}

// Thumbnail image controls
function currentSlide(n) {
  stopSlideShow(); // Arrête le défilement automatique lorsqu'un utilisateur interagit
  showSlides(slideIndex = n);
  startSlideShow(); // Redémarre le défilement automatique après interaction
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

