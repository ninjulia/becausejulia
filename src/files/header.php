<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php if (isset($pageTitle)) {echo $pageTitle.'&nbsp;|&nbsp;';} ?>Julia Czarnecki | Design | Code | Digital</title>

    <link rel="stylesheet" href="/css/styles-min.css">

    <!-- Favicon -->
    <link href="../favicon.ico" rel="shortcut icon" type="image/x-icon">
    <?php 
        //check if server is live or local
        if ($_SERVER['SERVER_NAME'] !== "localhost"){
            //check if ssl enabled
            if ($_SERVER['HTTPS'] !== 'off'){
                $domain_name = "https://" . $_SERVER['SERVER_NAME'];
            } ;
            // print leading http://
                $domain_name = "http://" . $_SERVER['SERVER_NAME'];
        }
        // localsite
        else {
            $domain_name = $_SERVER['SERVER_NAME'];
        };  
    ?>
    <base href="<?php echo($domain_name); ?>">
    <!-- Page Specific tags here -->
    <?php if (function_exists('customPageHeader')){
        customPageHeader();
    }; ?>
  </head>
  <body>
    <?php include_once('svg.php'); ?>

    <header>
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-darkest">
        <div class="container">
            <a class="navbar-brand" href="/" target="_self"><svg class="icon icon-embed2"><use xlink:href="#icon-embed2"></use></svg>&nbsp;&nbsp;&nbsp;Julia Czarnecki</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Design
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/ebook.php">eBook</a>
                            <a class="dropdown-item" href="/web-management.php">Website Redesign</a>
                            <a class="dropdown-item" href="/elearning.php">eLearning</a>
                            <a class="dropdown-item" href="/recipe.php">Recipe Book</a>
                            <a class="dropdown-item" href="/banners.php">Digital Advertising</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/ninjulia/">Code</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>