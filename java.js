document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navbar");
    const toggleButton = document.querySelector(".menu-toggle");
    const overlay = document.createElement("div"); // Crée un overlay noir

    // Ajoute l'overlay noir dynamiquement
    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);

    // ✅ Correction : Assure que la page peut scroller dès le chargement
    document.body.classList.remove("no-scroll");
    document.documentElement.style.overflow = "auto";

    // Fonction pour ouvrir le menu et désactiver le défilement
    const openMenu = () => {
        menu.classList.add("active");
        document.body.classList.add("menu-open", "no-scroll"); // Ajoute "no-scroll" pour désactiver le défilement
        overlay.style.display = "block"; // Affiche le fond noir
        document.documentElement.style.overflow = "hidden"; // 🔥 Empêche le scroll quand le menu est ouvert
    };

    // Fonction pour fermer le menu et réactiver le défilement
    const closeMenu = () => {
        menu.classList.remove("active");
        document.body.classList.remove("menu-open", "no-scroll"); // ✅ Assure que le body peut scroller
        overlay.style.display = "none"; // Cache le fond noir
        document.documentElement.style.overflow = "auto"; // ✅ Forcer le scroll après fermeture du menu
    };

    const toggleMenu = () => {
        if (menu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    // Ouvrir le menu en cliquant sur le bouton hamburger
    toggleButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Fermer le menu en cliquant sur l'overlay noir
    overlay.addEventListener("click", closeMenu);

    // Fermer le menu en cliquant en dehors
    document.addEventListener("click", function (event) {
        if (menu.classList.contains("active") && 
            !menu.contains(event.target) && 
            !toggleButton.contains(event.target) &&
            event.target !== overlay) {
            closeMenu();
        }
    });
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function changeImage(step) {
    images[currentIndex].classList.remove('active'); // Cache l'image actuelle
    currentIndex = (currentIndex + step + images.length) % images.length; // Calcul du nouvel index
    images[currentIndex].classList.add('active'); // Affiche la nouvelle image
}

// Initialisation : Affiche la première image
document.addEventListener("DOMContentLoaded", () => {
    images[0].classList.add('active');
});