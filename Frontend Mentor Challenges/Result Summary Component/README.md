# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![result_solution](https://github.com/OkoloArt/Frontend_Challenges/assets/54189037/585b6e61-bba3-49b4-86c7-75441fc254a9)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Throughout the project, I have learned more about CSS styling techniques like flexbox alignment, gradient usage, and responsive design adjustments. On the JavaScript front, I gained insights into fetching and parsing JSON data dynamically to populate the DOM. Overall, you've been introduced to essential web development principles, emphasizing responsive design and modern web practices.

```css
.semi-container > div {
  flex: 1; /* This will make both child divs take equal width */
}
```

```js
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
};
```

### Continued development

- Focus on mastering responsive design
- Dynamic content handling in JavaScript
- Advanced CSS techniques like flexbox

## Author

- Frontend Mentor - [@OkoloArt](https://www.frontendmentor.io/profile/OkoloArt)
- Twitter - [@Okolo_Arthur](https://twitter.com/Okolo_Arthur)
