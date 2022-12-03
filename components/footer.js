class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

    <footer>
      <div class="container">
          <div class="nest">
              <h1><a class="anchor" name="contact">Find Me On</a></h1>
              <p>
              <a href="https://www.github.com/ninjulia" target="_blank" class="text-light" name="github" rel="noreferrer"><svg class="icon icon-github"><use xlink:href="#icon-github"></use></svg></a>
                <a href="https://www.linkedin.com/in/julia-c-b7a79522" target="_blank" class="text-light" name="linkedin" rel="noreferrer"><svg class="icon icon-linkedin"><use xlink:href="#icon-linkedin"></use></svg></a>
            		<a href="https://dribbble.com/becausejulia" target="_blank" class="text-light" name="dribbble" rel="noreferrer"><svg class="icon icon-dribbble"><use xlink:href="#icon-dribbble"></use></svg></a>
            		<a href="https://www.instagram.com/the_julia_set/" target="_blank" class="text-light" name="instagram" rel="noreferrer"><svg class="icon icon-instagram"><use xlink:href="#icon-instagram"></use></svg></a>
            		<a href="https://thejuliaset.threadless.com" target="_blank" class="text-light" name="threadless" rel="noreferrer"><svg class="icon icon-cart"><use xlink:href="#icon-cart"></use></svg></a>
            </p>
          </div>
          <p>Designed and coded by Julia Czarnecki with some help from Bootstrap. &copy; 2013 - <span id="year"></span></p>
	        <p style="font-size:0.8rem">SVG icons by <a href="https://icomoon.io/app" target="_blank" class="text-light" name="icomoon" rel="noreferrer">icomoon.</a> Mockup imagery provided by <a href="https://www.freepik.com" class="text-light" name="freepik" rel="noreferrer">freepik.</a></p>
          <p style="font-size:0.8rem">Any data you provide will only be used to reply to you. It will not be stored or shared.</p>
      </div>
    </footer>

      `;
  }
}

customElements.define('footer-component', Footer);