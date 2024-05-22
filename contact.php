<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // or PHPMailer::ENCRYPTION_SMTPS if you're using port 465
$mail->Port = 587; // or 465

$mail->Username = "ddagmax@gmail.com"; // your Gmail address
$mail->Password = "hrokiehamevggwol"; // your Gmail password or app-specific password

$mail->setFrom($email, $name);
$mail->addAddress("ddagmax@gmail.com", "Amerencio");

$mail->Subject = $subject;
$mail->Body = $message;

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
