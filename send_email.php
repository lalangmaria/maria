<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your email address
    $to = "gamaom29@gmail.com";  

    // Form fields
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Subject and body
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n";

    // Send the email
    if(mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
