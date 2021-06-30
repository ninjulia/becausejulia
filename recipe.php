<?php

$pageTitle="Recipe Book | Editorial Direction &amp; Book Layout";

function customPageHeader(){?>
  <!--Arbitrary HTML Tags-->
<?php }

include_once('files/header.php');
?>

  <section class="jumbotron portfolio-header recipe text-center">
    <div class="container">
      <h1>Recipe Book</h1>
      <p>Editorial Direction | Book Layout</p>
    </div>
  </section>

  <main role="main">
    <div class="container">
        <!-- Breadcrumb -->
        <ol class="breadcrumb mt-3">
            <li><a href="https://www.becausejulia.com/">Home &rsaquo;&nbsp;</a></li>
            <li><a href="https://www.becausejulia.com/#design"> Design &rsaquo;&nbsp;</a></li>
            <li class="active">Recipe Book</li>
        </ol>
    </div>
        <section class="portfolio_start">
            <div class="container text-left">
              <h1>Concept</h1>
              <p class="lead">This project elevated beloved and family heirloom recipes from a box of loose index cards to an organized, illustrated, self-published volume that would take pride of place in any collection of recipe books for years to come. I organized the recipes and divided them by type, selected the imagery, and set the content using Adobe InDesign. The cover was designed leveraging images from within the volume itself, enticing readers to look inside and try their hand at recreating the delicious treats inside.</p>
            </div>
        </section>
        <section class="portfolio-image">
          <img class="img-fluid" src="https://www.becausejulia.com/img/recipe-work.jpg">
        </section>
        <!-- end page content -->
        </main>

        <?php
        include_once('files/footer.php');
        ?>
