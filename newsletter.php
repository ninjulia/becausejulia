<?php

$pageTitle="Email Code | Responsive Layout";

function customPageHeader(){?>
  <!--Arbitrary HTML Tags-->
<?php }

include_once('files/header.php');
?>
<!-- code image module -->
<section class="container">
    <div class="code-showcase row">
        <div class="code-full p-3">
            <img src="img/nl-full.png" alt="email newsletter fullsize" class="img-fluid shadow" />
        </div>
        <div class="code-phone p-3">
            <img src="img/nl-phone.png" alt="email newsletter phone view" class="img-fluid shadow" />
        </div>
    </div>
</section>
<!-- end code image module -->
<div class="container">
    <!-- Breadcrumb -->
    <ol class="breadcrumb">
        <li><a href="http://www.becausejulia.com/">Home &rsaquo;&nbsp;</a></li>
        <li><a href="http://www.becausejulia.com/#code"> Code &rsaquo;&nbsp;</a></li>
        <li class="active">Newsletter</li>
    </ol>
</div>
<section class="portfolio_start">
    <div class="container text-left">
        <h1>Newsletter</h1>
        <h2>Email Code | Responsive Layout</h2>
        <p>This three-article newsletter was sent out once monthly to existing customers, promoting upcoming events and new product features. The offset two-column layout stacks and centers in mobile email clients and adjusts to full screen in all desktop email clients, including Microsoft Outlook.</p>
    </div>
    <div class="text-center m-auto">
        <button type="button" class="btn btn-outline-primary" role="button" id="codeButton" onclick="windowOpen('https://www.becausejulia.com/code/newsletter.html')">Open Project</button>
    </div>
</section>

<?php
include_once('files/footer.php');
?>