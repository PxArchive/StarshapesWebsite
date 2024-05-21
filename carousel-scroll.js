function ScrollLeft() {
    // find the carousel
    var track = document.getElementById('carousel');
    var trackWidth = track.getBoundingClientRect().width;

    // scroll left by that amount
    track.scrollBy(-trackWidth, 0);
}

function ScrollRight() {
    // find the carousel
    var track = document.getElementById('carousel');
    var trackWidth = track.getBoundingClientRect().width;

    // scroll right by that amount
    track.scrollBy(trackWidth, 0);
}

function ScrollToSlide(page) {
    // find the carousel
    var track = document.getElementById('carousel');
    var trackWidth = track.getBoundingClientRect().width;

    // scroll to slide number 
    track.scrollTo(trackWidth * (page -1), 0)
}

function SetActivePage() {
    const scrollableElement = document.getElementById('carousel')
    // Get the total scrollable height of the element
    const scrollWidth = scrollableElement.scrollWidth;
    // Get the current scroll position from the top
    const scrollLeft = scrollableElement.scrollLeft;
    // Get the height of the visible part of the element
    const clientWidth = scrollableElement.clientWidth;
    // Calculate how far the user has scrolled as a percentage
    const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;

    const dot1 = document.getElementById('carousel');

    console.log(`Scrolled: ${scrollLeft}px`);
    console.log(`Scroll percentage: ${scrollPercentage.toFixed(2)}%`);

    if (scrollPercentage >= 30) {

    }

    setTimeout(function() {
        SetActivePage();
    }, 500 );
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded");
    SetActivePage();
    }
);


