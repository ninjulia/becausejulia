# Code Repository for personal portfolio website

Julia Czarnecki | Design | Code | Digital

Code repository for my design portfolio website, [becausejulia.com](https://www.becausejulia.com). Project files are uploaded here for your code review and Netlify web hosting. I selected the Bootstrap framework for its ease of use and component library, although it notoriously delivers some code bloat. To combat that, I went with 11ty for a static site generator, known for its performance and low barrier to entry. In the future, I'd like to continue optimizing my use of both systems to deliver a more performant site.

## Table of contents

- [Project Dependencies](#project-dependencies)
  - [Design Resources](#design-resources)
  - [Code Resources](#code-resources)
  - [Tech and Tooling](#tech-and-tooling)
  - [Links](#links)
- [Project Roadmap](#project-roadmap)
  - [Current Release](#current-release)
  - [Future Improvements](#future-improvements)
- [Acknowledgments](#acknowledgments)
- [Licensing](#licensing)

## Project Dependencies

I am standing on the shoulders of giants

- [Eleventy v1.0.2](https://www.11ty.dev/)
- [Bootstrap v5.2.3](https://getbootstrap.com/)
- [Purgecss v5.0.0](https://purgecss.com/)
- [fast-glob v3.2.12](https://www.npmjs.com/package/fast-glob/)
- [html-minifier v4.0.0](https://www.npmjs.com/package/html-minifier/)
- [PostCSS v8.4.19](https://postcss.org/)
- [Dart Sass v1.56.1](https://www.npmjs.com/package/sass/)

### Design Resources

- Google fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) && [Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Bootstrap icons](https://icons.getbootstrap.com/)
- Mockup Imagery: [freepic.com](https://www.freepik.com/)

### Code Resources

- [Hover.css](https://ianlunn.github.io/Hover/)
- [Jribbble: A JavaScript library for the Dribbble API](https://github.com/tylergaw/jribbble)

### Tech and Tooling

- HTML, CSS (SCSS), JS, Njk
- 11ty
- Node.js

### Links

- Live Site: [https://www.becausejulia.com/](https://www.becausejulia.com/)
- Hosting via Netlify: [![Netlify Status](https://api.netlify.com/api/v1/badges/38436d76-e0a4-4743-8172-da45f07cc387/deploy-status)](https://app.netlify.com/sites/hopeful-kilby-bb0e86/deploys)

## Project Roadmap

### Current Release

- MVP completed 12/22
- Set up 11ty tooling
- Upgraded to Bootstrap 5.2.3
- Cleaned up SCSS files and 'Brand' Theming
- Optimized images to next-gen formats
- Addressed accessability issues
- Addressed Lighthouse mobile performance issues

### Future improvements

#### Back-End

- ~~Organize \_includes, better leverage templates~~
- Set Design banner, thumbnail via design.js logic
- ~~Fix issue with "currentUrl" variable set on multiple templates~~
- Further optimize SCSS/CSS
- Optimize Bootstrap.js use
- favicon - add support for multi-format
- ~~Fix issue with getDate variable~~

#### Index

- Replace H1 with dynamic text, resting on 'I work on websites'
- Update code section to leverage GitHub API to show key repos
- About - re-write to better reflect abilities - leverage icons for tools/software

#### Design

- Add more samples
- Further shuffle showcase images, do not allow pattern to repeat
- Display thumbnails on index in specified order

#### Writing

- Convert to blog
- Leverage md files, not html
- Re-title samples to what they're samples of, not title of the piece
- Include "Concept" section as displayed on /design/ pages

#### Instagram

- Redesign
- quick set classes to showcase if platform has current sales

## Acknowledgments

- Hat-tip to [Brewhouse Digital](https://dev.to/brewhousedigital/using-purgecss-with-bootstrap-and-eleventy-j7p) for their write-up on Using PurgeCSS with Bootstrap and Eleventy which I leveraged (with some modifications) in compileCSSFramework.js
- 'Showcase' images at the bottom of the /design/ pages are shuffled using Chris Coyier's [Shuffle Array](https://css-tricks.com/snippets/javascript/shuffle-array/) code.
- 11ty Navigation and Sass set up via Stephanie Eckles' [11ty Rocks!](https://11ty.rocks/).
- 11ty setup tutorial from [Kevin Powell's YouTube](https://www.youtube.com/watch?v=4wD00RT6d-g&ab_channel=KevinPowell).

### Licensing

Becausejulia.com designed and coded by Julia Czarnecki leveraging dependencies above and thus released under MIT license. All logos, fonts, and imagery used remain property of their respective copyright owners.
