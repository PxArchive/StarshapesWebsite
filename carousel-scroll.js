
let dot1;
let dot2;
let dot3;
let dot4;

function ScrollLeft() {
    // find the carousel
    let track = document.getElementById('carousel');
    let trackWidth = track.getBoundingClientRect().width;

    // scroll left by that amount
    track.scrollBy(-trackWidth, 0);
}

function ScrollRight() {
    // find the carousel
    let track = document.getElementById('carousel');
    let trackWidth = track.getBoundingClientRect().width;

    // scroll right by that amount
    track.scrollBy(trackWidth, 0);
}

function ScrollToSlide(page) {
    // find the carousel
    let track = document.getElementById('carousel');
    let trackWidth = track.getBoundingClientRect().width;

    // scroll to slide number 
    track.scrollTo(trackWidth * (page - 1), 0)
}

function SetActivePage() {
    const scrollableElement = document.getElementById('carousel')

    const scrollWidth = scrollableElement.scrollWidth;    // source: ChatGPT
    const scrollLeft = scrollableElement.scrollLeft;    // source: ChatGPT
    const clientWidth = scrollableElement.clientWidth;    // source: ChatGPT
    const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;    // source: ChatGPT

    dot1.setAttribute('data-active', 'false');
    dot2.setAttribute('data-active', 'false');
    dot3.setAttribute('data-active', 'false');
    dot4.setAttribute('data-active', 'false');

    if (scrollPercentage >= 30 && scrollPercentage <= 40) {
        dot2.setAttribute('data-active', 'true');
    }

    else if (scrollPercentage >= 60 && scrollPercentage <= 70) {
        dot3.setAttribute('data-active', 'true');
    }

    else if (scrollPercentage >= 90 && scrollPercentage <= 101) {
        dot4.setAttribute('data-active', 'true');
    }

    else {
        dot1.setAttribute('data-active', 'true');
    }

    setTimeout(function () {
        SetActivePage();
    }, 100);
}

function AutoScroll() {
    setTimeout(function () {
        AutoScroll();
    }, 100);
}


document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");
    dot1 = document.getElementById('dot1');
    dot2 = document.getElementById('dot2');
    dot3 = document.getElementById('dot3');
    dot4 = document.getElementById('dot4');
    SetActivePage();
    AutoScroll();
}
);