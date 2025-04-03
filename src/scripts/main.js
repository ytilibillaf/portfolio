// This file contains the JavaScript code for the homepage. 
// It may include functions for interactivity, event handling, and DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = 'Welcome to the Homepage!';
    document.body.appendChild(greetingElement);

    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});

const observer = new IntersectionObserver();
const gallerys = document.querySelector('.gallery');
observer.observe(gallerys)
