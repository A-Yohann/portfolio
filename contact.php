<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom     = htmlspecialchars($_POST["nom"]);
    $email   = htmlspecialchars($_POST["email"]);
    $tel     = htmlspecialchars($_POST["telephone"]);
    $sujet   = htmlspecialchars($_POST["sujet"]);
    $message = htmlspecialchars($_POST["message"]);

    $destinataire = "at.yohann@gmail.com";
    $corps = "Nom : $nom\nEmail : $email\nTéléphone : $tel\nMessage :\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    echo mail($destinataire, $sujet, $corps, $headers) ? "success" : "error";
}
?>