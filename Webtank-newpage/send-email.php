<?php

// Check if the form has been submitted
if(isset($_POST['submit'])){

  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $service = $_POST['service'];
  $message = $_POST['message'];

  // Set the recipient email address
  $to = 'tshidi.motebs@gmail.com';

  // Set the email subject
  $subject = 'New Contact Form Submission';

  // Build the email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Selected Service: $service\n\n";
  $email_content .= "Message:\n$message\n";

  // Build the email headers
  $email_headers = "From: $name <$email>";

  // Send the email
  mail($to, $subject, $email_content, $email_headers);

  // Redirect to the thank you page
  header('Location: thank-you.html');
}

?>
