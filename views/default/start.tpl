<!DOCTYPE HTML>

<html>

<head>
	<title>{$pageTitle}</title>
	<link rel="stylesheet" href="{$templateWebPath}css/main.css">
        <script type="text/javascript" src="/js/jquery-1.12.1.min.js"></script>
        <script src="js/index.js"></script>
        <script type="text/javascript" src="/js/main.js"></script>
</head>

<body>
	
<!--	MENU-->
	<div class="menu">
		<div class="logo">
			<img src="img/logo.png" height="60px">
		</div>
		<div class="name">Note Holder</div>
		<div class="btn log_btn_menu">Login</div>
		<div class="btn reg_btn_menu">Register</div>
	</div>
	
<!--	CONTENT-->
	<div class="content">
		<h1>Note Holder</h1>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
		</p>
	</div>
	
	<div class="screen1">
	
	</div>
	
<!--	FORMS-->
	<div class="form reg_form">
		<input class="field email" type="text" placeholder="email"  name="email">
		<input class="field pass" type="password" placeholder="password" name="pwd1">
		<input class="field pass2" type="password" placeholder="retype password" name="pwd2">
		<div class="btn reg_btn" onclick="registerNewUser();">Register</div>
		<div class="btn reg_cancel_btn">Cancel</div>
	</div>
	
	<div class="form log_form">
		<input class="field email" type="text" placeholder="email" name="email">
		<input class="field pass" type="password" placeholder="password" name="pwd1">
		<div class="btn log_btn" onclick="authoriseUser();">Login</div>
		<div class="btn log_cancel_btn">Cancel</div>
		
	</div>
</body>
	
</html>
