<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php if (isset($pageTitle)) {echo $pageTitle.'&nbsp;|&nbsp;';} ?>Julia Czarnecki | Design | Code | Digital</title>

    <link rel="stylesheet" href="https://www.becausejulia.com/css/styles-min.css">

    <!-- Favicon -->
    <link href="favicon.ico" rel="shortcut icon" type="image/x-icon">

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
            <a class="navbar-brand" href="https://www.becausejulia.com/"><svg class="icon icon-embed2"><use xlink:href="#icon-embed2"></use></svg>&nbsp;&nbsp;&nbsp;Julia Czarnecki</a>

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
                            <a class="dropdown-item" href="https://www.becausejulia.com/ebook.php">eBook</a>
                            <a class="dropdown-item" href="https://www.becausejulia.com/web-management.php">Website Redesign</a>
                            <a class="dropdown-item" href="https://www.becausejulia.com/elearning.php">eLearning</a>
                            <a class="dropdown-item" href="https://www.becausejulia.com/recipe.php">Recipe Book</a>
                            <a class="dropdown-item" href="https://www.becausejulia.com/banners.php">Digital Advertising</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Code
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <a class="dropdown-item" href="https://www.becausejulia.com/newsletter.php">Newsletter</a>
                            <a class="dropdown-item" href="https://www.becausejulia.com/video.php">Email with Video</a>
                            <a class="dropdown-item" href="https://www.becausejulia.com/speed.php">Download Visualizer</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.becausejulia.com/#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.becausejulia.com/#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
