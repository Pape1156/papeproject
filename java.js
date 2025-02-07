document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navbar");
    const toggleButton = document.querySelector(".menu-toggle");
    const hero = document.querySelector(".hero");
    const mainContent = document.querySelector("main");

    // ✅ Crée un overlay noir
    const overlay = document.createElement("div");
    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);

    // ✅ Fonction pour ouvrir le menu et flouter le contenu derrière
    const openMenu = () => {
        menu.classList.add("active");
        document.body.classList.add("menu-open"); // ✅ Ajoute la classe qui active le flou
        overlay.style.display = "block"; // ✅ Affiche l'overlay

        // ✅ Ajoute un flou sur le contenu en arrière-plan
        if (hero) hero.style.filter = "blur(8px)";
        if (mainContent) mainContent.style.filter = "blur(8px)";
    };

    // ✅ Fonction pour fermer le menu et enlever le flou
    const closeMenu = () => {
        menu.classList.remove("active");
        document.body.classList.remove("menu-open"); // ✅ Supprime la classe qui active le flou
        overlay.style.display = "none"; // ✅ Cache l'overlay

        // ✅ Retire le flou du contenu
        if (hero) hero.style.filter = "none";
        if (mainContent) mainContent.style.filter = "none";
    };

    const toggleMenu = () => {
        if (menu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    // ✅ Ouvrir le menu en cliquant sur le bouton hamburger
    toggleButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // ✅ Fermer le menu en cliquant sur l'overlay noir
    overlay.addEventListener("click", closeMenu);

    // ✅ Fermer le menu en cliquant en dehors
    document.addEventListener("click", function (event) {
        if (menu.classList.contains("active") && 
            !menu.contains(event.target) && 
            !toggleButton.contains(event.target) &&
            event.target !== overlay) {
            closeMenu();
        }
    });
});