<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "info@tt-design.de"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\n\nNachricht:\n$message";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Nachricht wurde versandt!";
      }else{
         echo "Nachricht konnte nicht versandt werden.";
      }
    }else{
      echo "Eine gültige Email-Adresse ist erforderlich.";
    }
  }else{
    echo "Email und Nachricht erforderlich.";
  }
?>
