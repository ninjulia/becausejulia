<?php

$pageTitle="Front End Web | JQuery";

function customPageHeader(){?>
  <!--Arbitrary HTML Tags-->
<?php }

include_once('files/header.php');
?>
<!-- code image module -->
<section class="container">
    <div class="code-showcase row">
        <div class="code-full p-3">
            <img src="img/speed-full.png" alt="email newsletter fullsize" class="img-fluid shadow" />
        </div>
        <div class="code-phone p-3">
            <img src="img/speed-phone.png" alt="email newsletter phone view" class="img-fluid shadow" />
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
        <h1>Download Visualizer</h1>
        <h2>Front End Web | JQuery</h2>
        <p>This code example was designed to show customers the differences in internet speeds, showcasing how much faster the cable company was in comparison to services offered by their competitors. The module could be plugged into their cms and featured within their shopping pages. JQuery was leveraged to approximate the time it would take to download common file types, including music files, games, movies, and photos.</p>
    </div>
    <div class="text-center m-auto">
        <button type="button" class="btn btn-outline-primary" role="button" id="codeButton" onclick="windowOpen('https://www.becausejulia.com/code/speed.html')">Open Project</button>
    </div>
</section>

<?php
include_once('files/footer.php');
?>