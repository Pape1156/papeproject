document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navbar");
    const toggleButton = document.querySelector(".menu-toggle");

    let closeTimeout; // Variable pour le timer automatique
    let interactionTimeout; // Timer pour déclencher le timer automatique après 1 seconde

    // ✅ Fonction pour ouvrir et fermer le menu
    const openMenu = () => {
        menu.classList.add("active");
        document.body.classList.add("no-scroll");

        // ✅ Démarrer un timer après 1 seconde pour déclencher le timer de fermeture
        interactionTimeout = setTimeout(() => {
            startAutoCloseTimer(); // On démarre le timer de fermeture après 1 seconde
        }, 1000);
    };

    const closeMenu = () => {
        menu.classList.remove("active");
        document.body.classList.remove("no-scroll");

        // ✅ Annuler tous les timers
        clearTimeout(closeTimeout);
        clearTimeout(interactionTimeout);
    };

    const toggleMenu = () => {
        if (menu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    // ✅ Démarrer le timer automatique après 1 seconde d'inactivité
    const startAutoCloseTimer = () => {
        clearTimeout(closeTimeout); // Supprime l'ancien timer
        closeTimeout = setTimeout(() => {
            closeMenu();
        }, 5000); // Ferme après 5 secondes (on pourra le passer à 3s plus tard)
    };

    // ✅ Ouvrir le menu en cliquant sur le bouton hamburger
    toggleButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // ✅ Fermer le menu en cliquant N'IMPORTE OÙ sur la page sauf sur le menu
    document.addEventListener("click", function (event) {
        if (menu.classList.contains("active") && 
            !menu.contains(event.target) && 
            !toggleButton.contains(event.target)) {
            closeMenu();
        }
    });

    // ✅ Empêcher la fermeture si on clique DANS le menu et redémarrer le timer
    menu.addEventListener("click", function (event) {
        event.stopPropagation();

        // ✅ Annuler le timer automatique et redémarrer après 1 seconde
        clearTimeout(closeTimeout);
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
            startAutoCloseTimer();
        }, 1000);
    });

    // ✅ Fermer immédiatement le menu si un lien est cliqué
    document.querySelectorAll(".navbar ul li a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});