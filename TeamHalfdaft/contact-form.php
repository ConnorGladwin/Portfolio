<?php
    $user = 'root';
    $password = 'root';
    $db = "contact";
    $dbhost = 'localhost';
    $port = 3306;

    $link = mysql_connect (
        "$host:$port",
        $user,
        $password
    );

    $db_selected = mysql_select_db (
        $db,
        $link
    );

    $name = $_POST['name'];
    $customer_email = $_POST['c_email'];
    $message = $_POST['message'];

    $email_from = $customer_email;
    $email_subject = "New Enquiry";
    $email_body = "Name: $name\n". "Email: $customer_email". "Message: $message";

    $to = "teamhalfdaft@outlook.com";

    $header = "From: $customer_email \r\n";
    $header = "Reply-To: $customer_email \r\n";


    mail($to, $email_subject, $email_body);

    header("Location: index.html");

?>