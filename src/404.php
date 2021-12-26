<?php
$pageTitle = 'Error 404';

function customPageHeader(){?>
  <!--Page Specific HTML Tags-->
<style>body,html{height:100%;background-color:#333}body{display:-ms-flexbox;display:flex;color:#fff;text-shadow:0 .05rem .1rem rgba(0,0,0,.5);box-shadow:inset 0 0 5rem rgba(0,0,0,.5)}.cover-container{max-width:42em;justify-content:center}.cover{padding:0 1.5rem}.cover .btn-lg{padding:.75rem 1.25rem;font-weight:700}footer{position:absolute;bottom:0}</style>
<?php }

include_once('files/header.php');
?>
   
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main role="main" class="inner cover">
        <h1 class="cover-heading">Woops.</h1>
        <p class="lead">Looks like you've found a page that doesn't exist.</p>
        <p class="lead">
          <a href="/" class="btn btn-lg btn-primary">Return Home</a>
        </p>
        <!--
        <p class="lead">Alternatively, take a moment to ponder how you got here. Take a moment to really ponder. Notice the dark background of the error page shows you a reflection from the viewport. It is an imperfect reproduction. Realize this reflection is on every page you view. The reflection is you, but not you. The internet is us, but not us. What will you do with this? Where will you go now that you have found the error?</p>
        -->
    </main>
</div>

<?php 
include_once('files/footer.php');
?>