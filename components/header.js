class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <essveegee-component></essveegee-component>
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
                                <a class="dropdown-item" href="/ebook.html">eBook</a>
                                <a class="dropdown-item" href="/web-management.html">Website Redesign</a>
                                <a class="dropdown-item" href="/elearning.html">eLearning</a>
                                <a class="dropdown-item" href="/recipe.html">Recipe Book</a>
                                <a class="dropdown-item" href="/banners.html">Digital Advertising</a>
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
    `;
}
}

customElements.define('header-component', Header);