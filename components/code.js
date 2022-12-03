class Code extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <!-- Code Section -->
      <section class="bg-info text-white">
              <div class="container marketing">
                  <h1><a class="anchor" name="code">Code Samples</a></h1>
                  <!-- Three columns of text -->
                  <div class="row">
                    <div class="col-lg-4">
                        <div class="img-samples code-samples text-dark bg-white mb-3">
                            <svg class="icon icon-drawer hvr-bounce-in"><use xlink:href="#icon-drawer"></use></svg>
                        </div>
                      <h2>Newsletter</h2>
                      <p>Email Code | Responsive Layout</p>
                      <p><a class="btn btn-primary" href="https://github.com/ninjulia/email_newsletter" role="button">View Project &raquo;</a></p>
                    </div><!-- /.col-lg-4 -->
      
                    <div class="col-lg-4">
                       <div class="img-samples code-samples text-dark bg-white mb-3">
                          <svg class="icon icon-envelop hvr-bounce-in"><use xlink:href="#icon-envelop"></use></svg>
                        </div>
                      <h2>Email with Video</h2>
                      <p>Email Code | Progressive Enhancements</p>
                      <p><a class="btn btn-primary" href="https://github.com/ninjulia/email_html5video" role="button">Get the Details &raquo;</a></p>
                    </div><!-- /.col-lg-4 -->
      
                    <div class="col-lg-4">
                       <div class="img-samples code-samples text-dark bg-white mb-3">
                          <svg class="icon icon-cogs hvr-bounce-in"><use xlink:href="#icon-cogs"></use></svg>
                        </div>
                      <h2>Download Visualizer</h2>
                      <p>Front End Web | JQuery</p>
                      <p><a class="btn btn-primary" href="https://github.com/ninjulia/JavaScript_SpeedVisualizer" role="button">See it in Action &raquo;</a></p>
                    </div><!-- /.col-lg-4 -->
                  </div><!-- /.row -->
      
                  <!-- secondary code row -->
                  <div class="row">
                  <div class="col-md-4 code-second">
                      <a href="https://github.com/ninjulia/email_carousel" target="_blank">
                        <div class="py-3 code-content">
                        <div class="text-primary bg-white img-samples code-samples icon-wrapper">
                          <svg class="icon icon-envelop"><use xlink:href="#icon-envelop"></use></svg>
                        </div>
                        <div class="px-3 code-text">
                          <p class="code-secondary-text">
                          <span class="code-secondary-headline">Email with Carousel</span>
                          Email Code | Progressive Enhancements<br />
                          <span class="m-0 p-0 link-effect">Take a look &raquo;</span></p>
                        </div>
                      </div>
                    </a>
                    </div>
      
                    <div class="col-md-4 code-second">
                      <a href="https://github.com/ninjulia/email_scratchoff" target="_blank">
                        <div class="py-3 code-content">
                        <div class="text-primary bg-white img-samples code-samples icon-wrapper">
                          <svg class="icon icon-envelop"><use xlink:href="#icon-envelop"></use></svg>
                        </div>
                        <div class="px-3 code-text">
                          <p class="code-secondary-text">
                          <span class="code-secondary-headline">Scratch-off Email</span>
                          Email Code | Progressive Enhancements<br />
                          <span class="m-0 p-0 link-effect">See it &raquo;</span></p>
                        </div>
                      </div>
                    </a>
                    </div>
      
                    <div class="col-md-4 code-second">
                      <a class="m-0 p-0 page-link" href="https://github.com/ninjulia" target="_blank">
                        <div class="py-3 code-content">
                        <div class="text-primary bg-white img-samples code-samples icon-wrapper">
                          <svg class="icon icon-github"><use xlink:href="#icon-github"></use></svg>
                        </div>
                        <div class="px-3 code-text">
                          <p class="code-secondary-text p-0">
                          <span class="code-secondary-headline">More Code Projects</span>
                          See these code projects and my latest work on github.<br />
                          <span class="m-0 p-0 link-effect">Go to github &raquo;</span></p>
                        </div>
                      </div>
                    </a>
                    </div>
                  <!-- end secondary code section -->
                  </div>
              </div>
          </section>
      <!-- End Code Section -->
      `;
  }
}

customElements.define('code-component', Code);