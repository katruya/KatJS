'use strict';
import View from "./models/View.js";
import IndexComponents from "./components/IndexComponents.js";

(function() {
    console.log('App Started.');
    
    // Display page
    let indexView = new View(IndexComponents);
    // grab the element to target
    let app = document.getElementById('app'); 
            
    // render the content to the DOM
    indexView.components.forEach(component => {
        app.innerHTML += component.value();
    }); 
})();