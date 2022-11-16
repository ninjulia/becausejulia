class Latest extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

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
<script src='https://absorbed-andesaurus.glitch.me/jribbble.min.js'></script>
<script src="/js/custom.js"></script>

      `;
  }
}

customElements.define('latest-component', Latest);