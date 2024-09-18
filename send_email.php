<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "alia.boudehane@live.com"; 
    $subject = "Nouveau message depuis le formulaire";
    
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Créer le contenu de l'email
    $email_content = "Nom: $name\n";
    $email_content .= "E-mail: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Envoyer l'email
    if(mail($to, $subject, $email_content, $headers)) {
        echo "Le message a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
