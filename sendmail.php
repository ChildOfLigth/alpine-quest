<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';

    if (!empty($email)) {
        $to = $email;
        $subject = 'Вас приветствует компания AlpineQuest!';
        $message = "Привет!\n\nВы успешно прошли регистрацию. \n\nМы напишем вам в течении 3-ех дней что бы уточнить ваши личные данные и сообщить о наличии свободных мест. \n\nДо встречи!";
        $headers = "From: kovtuns783@gmail.com\r\n" .
                   "Reply-To: $email\r\n" .
                   "Content-Type: text/plain; charset=UTF-8\r\n";

        $mailSent = mail($to, $subject, $message, $headers);

        echo json_encode(["success" => $mailSent, "message" => $mailSent ? "Письмо отправлено!" : "Ошибка при отправке письма!"]);
        exit;
    } else {
        echo json_encode(["success" => false, "message" => "Email не указан"]);
        exit;
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Метод не разрешен"]);
    exit;
}
?>
