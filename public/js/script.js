"use strict"


function init() {
    const arrow_button = document.getElementById("arrow_button")
    arrow_button.addEventListener("click", () => {scroll_to(find("about"))})

    const arrow_button_2 = document.getElementById("arrow_button_2")
    arrow_button_2.addEventListener("click", () => {scroll_to(find("skills"))})

    const arrow_button_3 = document.getElementById("arrow_button_3")
    arrow_button_3.addEventListener("click", () => {scroll_to(find("projects"))})

    const arrow_button_4 = document.getElementById("arrow_button_4")
    arrow_button_4.addEventListener("click", () => {scroll_to(find("home"))})
}


function find(id) {
    const element = document.getElementById(id)
    return element
}


function scroll_to(element){
    // Check if the element was found
    if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        element.error("Element with id 'about' not found");
    }
}

window.addEventListener("load", init)