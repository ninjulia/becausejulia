<?php

if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m']) ){
    $n = test_input($_POST["n"]);
    $e = test_input($_POST["e"]);
    $m = test_input($_POST["m"]);
           
    $to = "hello@becausejulia.com";
    $from = $e;
    $subject = "Contact Form Message";
    $content = "<table width='100%'><tr><td>Name: ".$n."</td></tr><tr><td>Email: ".$e."</td></tr><tr><td><p>".$m."</td></tr></table>";
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    if ( mail($to, $subject, $content, $headers) ){
        echo "success";
    } else {
        echo "The server failed to send the message. Please try again later.";
    }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>