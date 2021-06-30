<?php

$pageTitle="Email Code | Progressive Enhancements";

function customPageHeader(){?>
  <!--Arbitrary HTML Tags-->
<?php }

include_once('files/header.php');
?>
<!-- code image module -->
<section class="container">
    <div class="code-showcase row">
        <div class="code-full p-3">
            <img src="img/video-full.png" alt="email newsletter fullsize" class="img-fluid shadow" />
        </div>
        <div class="code-phone p-3">
            <img src="img/video-phone.png" alt="email newsletter phone view" class="img-fluid shadow" />
        </div>
    </div>
</section>
<!-- end code image module -->
<div class="container">
    <!-- Breadcrumb -->
    <ol class="breadcrumb">
        <li><a href="http://www.becausejulia.com/">Home &rsaquo;&nbsp;</a></li>
        <li><a href="http://www.becausejulia.com/#code"> Code &rsaquo;&nbsp;</a></li>
        <li class="active">Video</li>
    </ol>
</div>
<section class="portfolio_start">
    <div class="container text-left">
        <h1>Email with Video</h1>
        <h2>Email Code | Progressive Enhancements</h2>
        <p>While the majority of email clients still do not support playing video directly from your inbox, both Apple Mail and the native Samsung email client do - and both represent a large segment of the email client market. To cover all email clients, however, fall-back code is added providing alternative content. Here, an animated gif fall-back indicated a user should click through to see the video using their browser.</p>
    </div>
    <div class="text-center m-auto">
        <button type="button" class="btn btn-outline-primary" role="button" id="codeButton" onclick="windowOpen('https://www.becausejulia.com/code/video.html')">Open Project</button>
    </div>
</section>

<?php
include_once('files/footer.php');
?>