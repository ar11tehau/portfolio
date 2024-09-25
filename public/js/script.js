"use strict"


function init() {
    click_go("arrow_button", "skills")
    click_go("arrow_button_2", "projets")
    click_go("arrow_button_3", "home")
    // click_go("arrow_button_4", "home")

    click_go("logo_home", "home")
    // click_go("logo_about", "about")
    click_go("logo_skills", "skills")
    click_go("logo_projets", "projets")
}

function click_go(elt, dest) {
    elt = document.getElementById(`${elt}`)
    elt.addEventListener("click", () => {scroll_to(find(`${dest}`))})
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