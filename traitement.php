<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST["nom"]);
    $email = htmlspecialchars($_POST["email"]);
    $telephone = htmlspecialchars($_POST["telephone"]);
    $message = htmlspecialchars($_POST["message"]);

    // 📩 Adresse où envoyer le mail
    $to = "pape01570@gmail.com"; // Remplace par TON email
    $subject = "Nouvelle inscription - École IGLOO";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Contenu du message
    $body = "Nom : $nom\n";
    $body .= "Email : $email\n";
    $body .= "Téléphone : $telephone\n";
    $body .= "Message :\n$message\n";

    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        // ✅ Redirige vers la page de confirmation après envoi
        header("Location: confirmation.html");
        exit();
    } else {
        echo "<script>alert('Erreur lors de l’envoi. Veuillez réessayer plus tard.'); window.history.back();</script>";
    }
}
?>