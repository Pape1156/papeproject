<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $telephone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    // 📩 DESTINATAIRE : Mets ici ton adresse email pour recevoir les inscriptions
    $to = "pape01570@gmail.com"; 

    // 📌 Sujet de l'email
    $subject = "Nouvelle inscription : $nom";

    // 📝 Contenu de l'email
    $body = "
        <h2>Nouvelle demande d'inscription</h2>
        <p><strong>Nom :</strong> $nom</p>
        <p><strong>Email :</strong> $email</p>
        <p><strong>Téléphone :</strong> $telephone</p>
        <p><strong>Informations supplémentaires :</strong> $message</p>
    ";

    // 📨 Headers (pour envoyer en format HTML)
    $headers = "From: contact@tonsite.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // ✅ Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>