<?php

$pageTitle = null;

function customPageHeader(){?>
  <!--Arbitrary HTML Tags-->
<?php }

include_once('files/header.php');
?>

 <!-- begin page content -->

    <main role="main">
    <!-- Design Section -->
    <?php include_once('files/intro_design.php'); ?>
    <?php include_once('files/code_section.php'); ?>

    <!-- About Section -->
        <section>
            <div class="container">
                <h1><a class="anchor text-primary" name="about">About Julia</a></h1>
                <div class="row">
                    <div class="col-md-8">
                        <h2 class="text-primary">I hate endings.</h2>
                        <p>Web projects really never end. Each project requires research, design, coding and then more research, more design — well, you get the point. There's always something to improve and always something new to learn. That's what I love about working with the web.</p>

                        <h2 class="text-primary">I wear many hats.</h2>
                        <p>Working in small groups (both in agencies and as part of an in-house creative team) has sharpened my multi-tasking skills. I've taken on roles usually divided between different departments in other companies. I've tackled video production, thrown down on copy writing, and after the project has shipped, I'm behind the scenes checking to see how the users are reacting to the designs.</p>

                        <h2 class="text-primary">But more about me.</h2>
                        <p>In my spare time I love being taken for walks by my dog, exploring new cities and keeping up with web design trends and technologies. I am always looking to expand my horizons by taking on new projects and meeting new people. So reach out and <a href="#contact">drop me a line</a>.</p>
                    </div>

                    <div class="col-md-4">
                        <h3 class="text-primary">Technology &amp; Certifications</h3>
                        <ul class="list-ul">
                            <li>Adobe Creative Cloud</li>
                            <li>Experience with HTML5, CSS3 &amp; Responsive Design</li>
                            <li>Experience with Bootstrap Framework</li>
                            <li>BFA in Graphic Design</li>
                            <li>SiteCore Certified Marketer</li>
                            <li>Eloqua Email Marketing</li>
                        </ul>

                        <h3 class="text-primary">Skill set</h3>
                        <ul class="list-ul">
                            <li>Branding &amp; Logo Design</li>
                            <li>Corporate Design</li>
                            <li>Digital Advertising Campaigns</li>
                            <li>eBooks</li>
                            <li>Email Campaigns</li>
                            <li>Icon Design</li>
                            <li>Infographics</li>
                            <li>Print Design</li>
                            <li>Tradeshow Booth Design</li>
                            <li>Web and Interactive Design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-primary" id="latest">
            <div class="mx-4">
                <h1 class="anchor text-white text-center">Latest</h1>
                <div class="row mx-auto my-auto">
                    <div class="col-lg-12">
                        <div id="myCarousel" class="carousel slide" data-wrap="true" data-interval="false">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active" role="option">
                                    <div class="row" id="slideSet1">
                                    </div>
                                </div>
                                <div class="carousel-item" role="option">
                                    <div class="row" id="slideSet2">
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev w-auto" href="#myCarousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next w-auto" href="#myCarousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <div class="py-3 col-md-11" id="view_more"></div>
                    </div>
                </div>
            </div>
        </section>
    <!-- Contact -->
        <section class="bg-light">
            <div class="container">
                <h1><a class="anchor text-primary" name="contact">Contact Me</a></h1>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                  <form class="needs-validation" novalidate id="my_form" onsubmit="checkMyForm(); return false;">
                    <div class="mb-3">
                        <label for="n">Your name</label>
                        <input type="text" class="form-control" id="n" name="n" placeholder="" value="" required>
                        <div class="invalid-feedback" id="nameErr">
                          Please enter your name.
                        </div>
                    </div>
                    <div class="mb-3">
                      <label for="e">Email</label>
                      <input type="email" class="form-control" id="e" name="e" placeholder="you@example.com" required>
                      <div class="invalid-feedback" id="emailErr">
                        Please enter an email.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="m">Your message</label>
                      <textarea rows="8" class="form-control d-block" id="m" name="m" placeholder="Say hello." required></textarea>
                      <div class="invalid-feedback" id="messageErr">
                        Please enter your messsage.
                      </div>
                    </div>
                     <div class="mb-3" id="submitContainer">
                        <button class="btn btn-primary btn-lg btn-block mb-3" id="submit" type="submit" name="submit">Send it!</button>
                     </div>
                  </form>
                </div>
              </div>
            </div>
        </section>
      </main>
<!-- end page content -->

<?php
include_once('files/footer.php');
?>
