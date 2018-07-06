<?php 
$name = $_POST['aboutworks__input-name'];
$mail = $_POST['aboutworks__input-email'];
$message = $_POST['aboutworks__textarea'];




$mail_message = '
<html>
<head>
<title>С вами хотят связаться </title>
</head>

<body>

<h2>Контактное лицо </h2>
<ul>

    <li>Имя:' . $name . '</li>
    <li>Email:' . $phone . '</li>
    <li>Сообщение:' . $message . '</li>
</ul>
</body>
</html>';



$headers = "From: Администратор сайта <	rw1zz@yandex.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";
               

    $mail = mail('spureful@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }


    echo json_encode($data);


?> 