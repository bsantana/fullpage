<?php 
/**
 * Template Name: Ajax
 *
 */

//require('wp-load.php');
//require_once( get_template_directory_uri() . 'wp-includes/pluggable.php');

$to      = 'bruno_shenn@hotmail.com';
$subject = 'Contato - Apresentação';
$message = 
	'Nome: ' . $_POST['nome'] . '\r\n' .
	'Empresa: ' . $_POST['empresa'] . '\r\n' .
	'Email: ' . $_POST['email'] . '\r\n' .
	'Telefone: ' . $_POST['tel'] . '\r\n';
/*$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();*/

$result = wp_mail($to, $subject, $message);
if ($result) {
	print_r( $_POST );
} else {
	print('error request');
	print($errorMessage = error_get_last()['message']);
	print_r($errorMessage = error_get_last());
}

/*$email_remetente = "marketing@russelservicos.com.br";
$headers = "MIME-Version: 1.1\n";
$headers = "Content-type: text/plain; charset=iso-8859-1\n";
$headers = "From: $email_remetente\n"; // remetente
$headers = "Return-Path: $email_remetente\n"; // return-path
$headers = "Reply-To: $email_usuario\n"; // Endereço (devidamente validado) que o seu usuário informou no contato


error_reporting(E_ALL|E_STRICT);
ini_set('display_errors', 1);
ini_set('sendmail_from', 'marketing@russelservicos.com.br');
echo 'I am : ' . `whoami`;
$result = mail("bruno_shenn@hotmail.com", "Assunto", "Mensagem", $headers, "-f$email_remetente");
//$result = mail('myaddress@mydomain.com','Testing 1 2 3','This is a test.');
echo '<hr>Result was: ' . ( $result === FALSE ? 'FALSE' : 'TRUE') . $result;
echo '<hr>';
echo phpinfo();*/
print_r('fooooi')


?>