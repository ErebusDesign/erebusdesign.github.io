<?php

$EmailFrom  = "questions@crosswindlogistics.com";
$EmailTo    = "questions@crosswindlogistics.com";
$Subject    = "Crosswind Logistics Inquery";
$Name       = Trim(stripslashes($_POST['Name']));
$Tel        = Trim(stripslashes($_POST['Tel']));
$Email      = Trim(stripslashes($_POST['Email']));
$Message    = Trim(stripslashes($_POST['Message']));

$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

if($success) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://crosswindlogistics.com\">";
}
?>
