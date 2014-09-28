<?php
	function isset_post($post)
	{
		if(isset($_POST[$post]))
		{
			$title = ucfirst($post);
			return 'Project '.$title.': '.$_POST[$post].'\n';
		}
		else
		{
			return '';
		}
	}
	function check_email()
	{
		if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			return $_POST['email'];
		}
		else {
			return '';
		}
	}
	$site_email = "freesonia@gmail.com";
	$name = $_POST['name'];
	$email = check_email();
	$subject = $_POST['subject'].' at Sonia CS';
	$budget = isset_post('budget');
	$deadline = isset_post('deadline');
	$message = $budget.$deadline.'\n'.$_POST['message'];

	if(!empty($name) && !empty($email) && !empty($message))
	{
		$to = $site_email;
		$subject = $subject;
		$message = $message;
		$from = $email;
		$headers = "From: " . $from . "\r\n" .
			'Reply-To: '. $from . "\r\n" .
			'X-Mailer: PHP/' . phpversion();

		if(mail($to,$subject,$message,$headers))
		{
			header("Location: /contact/email-sent");
			exit;
		}
		else
		{
			header("Location: /contact/email-not-sent");
			exit;
		}

	}
	else
	{
		header("Location: /contact/email-not-sent");
		exit;
	}
?>