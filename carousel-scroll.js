let dot1;
let dot2;
let dot3;
let dot4;

function ScrollLeft() {
    // Find the carousel
    let track = document.getElementById('carousel');
    let trackWidth = track.getBoundingClientRect().width;

    if (GetScrollPercent() <= 0) {
        // Loop back to end
        track.scrollBy(trackWidth * 4, 0);
    }
    else {
        // Scroll left by that amount
        track.scrollBy(-trackWidth, 0);
    }
}

function ScrollRight() {
    // Find the carousel
    let track = document.getElementById('carousel');
    let trackWidth = track.getBoundingClientRect().width;

    if (GetScrollPercent() >= 91) {
        // Loop back to start
        track.scrollBy(-trackWidth * 4, 0);
    }
    else {
        // Scroll right by that amount
        track.scrollBy(trackWidth, 0);
    }
}

function ScrollToSlide(page) {
    // Find the carousel
    let track = document.getElementById('carousel');
    let trackWidth = track.getBoundingClientRect().width;

    // Scroll to slide number 
    track.scrollTo(trackWidth * (page - 1), 0)
}

function GetScrollPercent() {
    const scrollableElement = document.getElementById('carousel');
    const scrollWidth = scrollableElement.scrollWidth;    // source: ChatGPT
    const scrollLeft = scrollableElement.scrollLeft;    // source: ChatGPT
    const clientWidth = scrollableElement.clientWidth;    // source: ChatGPT
    let percentage = ((scrollLeft / (scrollWidth - clientWidth)) * 100);    // source: ChatGPT
    return percentage;
}

function SetActivePage() {
    let scrollPercentage = GetScrollPercent();

    // Turn off all indicators
    dot1.setAttribute('data-active', 'false');
    dot2.setAttribute('data-active', 'false');
    dot3.setAttribute('data-active', 'false');
    dot4.setAttribute('data-active', 'false');

    // Turn on current indicator depending on scroll percentage
    if (scrollPercentage >= 30 && scrollPercentage <= 60) {
        dot2.setAttribute('data-active', 'true');
    }
    else if (scrollPercentage >= 60 && scrollPercentage <= 90) {
        dot3.setAttribute('data-active', 'true');
    }
    else if (scrollPercentage >= 90 && scrollPercentage <= 101) {
        dot4.setAttribute('data-active', 'true');
    }
    else {
        dot1.setAttribute('data-active', 'true');
    }

    // Run function again after 25ms to refresh status
    setTimeout(function () { SetActivePage(); }, 25);
}

function AutoScroll() {
    ScrollRight();
    setTimeout(function () { AutoScroll(); }, 5000);
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