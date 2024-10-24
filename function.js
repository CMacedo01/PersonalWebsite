


function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var style_element = document.getElementById('page_style');
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var cur_style = style_element.getAttribute('href');
    // 1 (c) Determine new stylesheet file name
    var next_style;
    if (cur_style === 'style.css') {
        next_style = 'styles2.css';
    }
    else {
        next_style = 'style.css';
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    style_element.setAttribute('href', next_style);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem('stylesheet', next_style);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var saved_style = localStorage.getItem('stylesheet');
    // 2 (b) get html style element by ID
    var html_style = document.getElementById('page_style');
    // 2 (c) replace href attribute of html element.
    html_style.setAttribute('href', saved_style);
    
}