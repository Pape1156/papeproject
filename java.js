document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navbar");
    const toggleButton = document.querySelector(".menu-toggle");
    const overlay = document.createElement("div"); // Crée un overlay noir

    // Ajoute l'overlay noir dynamiquement
    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);

    // Fonction pour ouvrir le menu et désactiver le défilement
    const openMenu = () => {
        menu.classList.add("active");
        document.body.classList.add("menu-open", "no-scroll"); // Ajoute "no-scroll" pour désactiver le défilement
        overlay.style.display = "block"; // Affiche le fond noir
    };

    // Fonction pour fermer le menu et réactiver le défilement
    const closeMenu = () => {
        menu.classList.remove("active");
        document.body.classList.remove("menu-open", "no-scroll"); // Retire "no-scroll" pour réactiver le défilement
        overlay.style.display = "none"; // Cache le fond noir
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