<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['wgphone'])) {$wgphone = $_POST['wgphone'];}
    if (isset($_POST['wgdata'])) {$wgdata = $_POST['wgdata'];}
    if (isset($_POST['wgpage'])) {$wgpage = $_POST['wgpage'];}
    $to = "up-lite@ya.ru"; /*Укажите адрес, на который должно приходить письмо*/
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";
    // дополнительные данные
    $headers .= "From: Pools for you <pool4u.kh.ua@gmail.com>;\r\n"; // от кого
    $subject = "$wgdata";

    $message = "

        <div style='background: #f8f8f8;padding: 20px; font-family:sans-serif;'>

            <div style='width: 400px;margin: 0 auto;'>

                <div style='    background: #1b3c56;border-radius: 10px 10px 0 0;padding: 30px 0;text-align: center;color: #fff;font-weight: 700;font-size: 20px;'>Заявка на обратный звонок

                </div>

                <div style='padding: 30px;border-radius: 0 0 10px 10px;background: #fff;'>

                    <b>Телефон:</b> <a href='tel:".$wgphone."'>".$wgphone." </a><br>

                    <b>Страница:</b> ".$wgdata."

                </div>

            </div>

        </div>

                               ";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
        {
        echo '
        <div class="success-send">
            <img src="tick.svg"> <br> Мы получили Вашу заявку и скоро с Вами свяжемся!
        </div>';
        }
        else
        {
        echo 'Нам не удалось отправить заявку, попробуйте еще раз';
        }
    } else {
        http_response_code(403);
        echo "Попробуйте еще раз";
    }
?>