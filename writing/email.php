<?php

$pageTitle="Documentation | How to Guide";

function customPageHeader(){?>
  <!--Arbitrary HTML Tags-->
<?php }

include_once('files/write_header.php');
?>

<!-- begin page content -->
	<div class="container mt-5">
	    <!-- Breadcrumb -->
	    <ol class="breadcrumb">
	        <li><a href="http://www.becausejulia.com/writing/index.php">Writing Home &rsaquo;&nbsp;</a></li>
	        <li class="active">Internal Documentation Example</li>
	    </ol>
	</div>
  <main role="main">
<section>
	<div class="container">
	<div class="writing-container p-4 border rounded" style="background-color:#fffff;">

    <h1>Crafting Emails with Accessibility in Mind</h1>
    <h2>Why?</h2>
    <p>Anyone who signed up for our email list should be able to engage with our messaging in the method of their choosing. While we currently craft responsive emails for both mobile devices and larger screens, we should also optimize for various assistive devices, for people with various abilities, in various environments.</p>
    <p>Currently, the ADA requires email senders in the Education, Financial, Government, and Hotel industries to adhere to accessibility standards. While we are not required to follow strict ADA accessibility standards, we should expect those regulations to apply to more industries going forward. Updating our workflow now will help us avoid a "mad rush" to comply when it is a legal need to comply.</p>
    <p>Notwithstanding legal requirements, those reporting some type of disability adds up to a significant share of the US market. According to the US Census, over 40 million people in the United States report having some type of disability - this could include visual (such as low vision or colorblindness), cognitive (such as dyslexia or ADHD), fine motor skills, etc. According to the ADA, this adds up to a market segment worth over $175 Billion. Litmus reports email ROI as high as 42:1 in 2019, which makes optimizing our email a great place to focus our efforts.</p>
    <h2>How?</h2>
    <p>Each of our production teams share some responsibility for optimization. Ultimately, we should focus on crafting emails that are simple, and easy to follow regardless of device or environment.</p>
    <h3>Copywriting</h3>
    <p>Litmus research indicates that the average attention span is 13.4 seconds, so it is important to keep copy short and concise. Avoid jargon, and limit the use of acronyms if possible. Always send text out to be translated, do not rely on browsers.</p>
    <h4>Helpful tools:</h4>
    <ul>
    <li>Flesch Reading Ease Test
      <ul>
        <li>In general, aim for a score of 50-60 out of 100.</li>
        <li>This means the text is easy to read for 13-15yr old students, although adjust to your target audience.</li>
      </ul>
    </li>
    <li>Grammarly / Yoast</li>
    <li><a href="http://Readable.io">Readable.io</a></li>
    </ul>
    <h3>Design</h3>
    <p>Consider that there are a variety of visual impairments - reading an email on a mobile device in the sun can be a challenge. Design with low-vision, colorblindness, and cognitive abilities in mind. The email should still read well with images turned off.</p>
    <p>As with copy, simple is better. Use a strong hierarchy with sufficient text contrast and avoid complex layouts. Litmus recommends a single column layout - which avoids excess cognitive load as well as renders well in mobile devices.</p>
    <p>Keep text legible by using at least a 14pt font with a line-height of at least 1.5 or 2. Left-aligned is easier to read than centered. If you do change the link color from the default blue, use a color optimized for colorblindness. Always leave the default underline to indicate the text is clickable. For CTAs, make sure you have sufficient contrast between the text and the surrounding button color. Make the buttons at least 40px tall and provide plenty of padding to make it easy to click.</p>
    <h4>Helpful tools:</h4>
    <ul>
    <li><a href="https://snook.ca/technical/colour_contrast/colour.html">Colour Contrast Check</a> by Jonathan Snook</li>
    </ul>
    <h3>Coding</h3>
    <p>Properly formatted, semantic HTML is important for rendering across all devices, with some key updates for screen-reader devices. We currently set unique alt-text on images and style them to preserve the messaging when users have the images turned off, which will preserve the messaging for screen readers as well.</p>
    <p>In the HTML tag, make sure to set the lang attribute, without it, screen readers could pronounce text differently, and result in text with different intent. Be sure to always set the title tag, as screen readers will read this aloud, and set the correct content type (such as UTF-8 character encoding).</p>
    <p>All tables used for presentation should include the role="presentation" tag, so that screen readers announce the content contained within, instead of reading the html contents. The exception to this, of course, is for data tables. Be sure to mark all CTAs with role="button" to indicate the function of the link.</p>
    <p>Use header and paragraph tags appropriately and encode all special characters. Be sure to use the correct header level (h1, h2) as well.</p>
    <h2>Hey Siri!</h2>
    <p>It is important to note these technologies do not read emails as dedicated assistive technologies will. There is also a wide variance between how the various assistants will handle an email and allow a user to interact with it. In the future, it is possible some standardization across the various assistants will emerge, but for now, here are some tips to keep in mind.</p>
    <h3>Alexa</h3>
    <ul>
    <li>Will read all "hidden" text</li>
    <li>Doesn't trigger an email open as the tracking pixel is not downloaded</li>
    <li>Won't read alt text</li>
    </ul>
    <h3>Siri</h3>
    <ul>
    <li>Tends to read fast, so some text may require unique hidden commas to counteract this</li>
    <li>Will read the first 499 words of an email before opening, so leverage the preview text - consider including a voice-specific CTA</li>
    <li>Will announce emoji. ie: "smiling face", "airplane"</li>
    <li>US vs U.S. Siri will read the first word as us and pronounce the second as "U" "S".</li>
    </ul>
    <h2>References:</h2>
    <ul>
    <li><a href="https://www.litmus.com/resources/ultimate-guide-to-email-accessibility/"><strong>Litmus</strong> - The Ultimate Guide to Email Accessibility</a></li>
    <li><a href="https://www.emailonacid.com/resource/accessibility-standards-in-email-marketing/"><strong>Email on Acid</strong> - Accessibility Standards in Email Marketing 2019-2020</a></li>
    </ul>
</div>

</div>
      </section>
    </main>

      <?php
      include_once('files/write_footer.php');
      ?>
