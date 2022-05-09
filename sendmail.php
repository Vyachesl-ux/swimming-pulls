<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

$mail->addAddress('vyacheslav.lobintsev@gmail.com', 'Vyacheslav Lobintsev');
$mail->Subject = 'Форма завки с сайта Pools4you';

$body = '<h1>Форма заявки</h1>';
if (trim(!empty($_POST['name']))) {
   $body .= "<p><strong>Имя:</strong>" . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['telephone']))) {
   $body .= "<p><strong>Телефон:</strong>" . $_POST['telephone'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
   $body .= "<p><strong>E-mail:</strong>" . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
   $body .= "<p><strong>Сообщение:</strong>" . $_POST['message'] . '</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
   $message = "Ошибка отправки формы";
} else {
   $message = "Ваша заявка отправлена";
}
$responce = ['message' => $message];
header('Content-type: application/json');
echo json_encode($responce);