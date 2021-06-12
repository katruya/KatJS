import Component from '../models/Component.js';
import indexText from './IndexText.js';

// Set component variables here
const date = new Date();

// Build your components here
const header = new Component(
    `<header class="text-center">
        <img src="https://raw.githubusercontent.com/katruya/KatJS/main/public/img/katJS.jpg" alt="The Demon Kat" class="img">
        <h1>${indexText["header-txt"]}</h1>
        <hr>
        <h2>${date.toDateString()}</h2>
    </header>`
);

const app = new Component(
    `<div id="content" class="col mt-3 text-center">
        <div class="row">
            ${indexText["content-txt"]}
        </div>
    </div>`
);

const footer = new Component(
    `<footer class="text-center">
        <h3>&copy; ${date.getFullYear()} Kat B.</h3>
    </footer>`
);

// Load Components (in order) into here
const IndexComponents = [
    header,
    app,
    footer
];

export default IndexComponents;