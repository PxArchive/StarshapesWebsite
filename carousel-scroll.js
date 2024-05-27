const dotList = [];
const scrollPoints = [];
let manualScroll = false;
let stopTimer;
let scrollTimer;
//Remember to change both the HTML & SASS code! (Program does work without SASS, but non-styled carousel icons become invisible)

function CountSlides() {
    //Count all carousel slides by finding every element with that name
    const slides = document.getElementsByClassName("carousel-slide");

    //Empty previous list of slides in case there were any
    for (let i = dotList.length; i < 0; i--) {
        dotList.pop();
    }

    //Same with the scroll tracker
    for (let i = scrollPoints.length; i < 0; i--) {
        scrollPoints.pop();
    }

    //Find all slides & put them into an array for later
    for (let i = 0; i < slides.length; i++) {

        //...unless the slide is missing it's point, then alert the user
        if (document.getElementById('dot' + (i + 1)) == undefined || document.getElementById('dot' + (i + 1)) == null) {
            alert("ERROR: The symbol for carousel slide "+i+" has not been created!")
        }
        else {
            dotList[i] = document.getElementById('dot' + (i + 1));
        }
    }

    //Calculate and track where the scrolling should display a new slide
    for (let i = 0; i < slides.length; i++) {
        scrollPoints[i] = Math.floor((100 / (dotList.length - 1)) * i);
    }
}

function ScrollLeft() {
    // Find the carousel
    let track = document.getElementById('carousel');
    let trackWidth = track.getBoundingClientRect().width;

    if (GetScrollPercent() <= 0) {
        // Loop back to end
        track.scrollBy(trackWidth * dotList.length, 0);
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

    if (GetScrollPercent() >= scrollPoints[scrollPoints.length-1]) {
        // Loop back to start
        track.scrollBy(-trackWidth * dotList.length, 0);
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
    //Reset auto scroll timer
    if (manualScroll==true) {
        //If a timer is already going, stop it & start a new one
        clearTimeout(stopTimer);
        stopTimer = setTimeout(AllowAutoScroll, 5000);
        console.log("clearing timer")
    }    
    else {
        clearInterval(scrollTimer);
        manualScroll = true;
        stopTimer = setTimeout(AllowAutoScroll, 5000);
        console.log("setting new timer")
    }

}

function AllowAutoScroll() {
    manualScroll = false;
    scrollTimer = setInterval(AutoScroll, 5000);
    AutoScroll();
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
    for (let i = 0; i < dotList.length; i++) {
        dotList[i].setAttribute('data-active', 'false');
    }

    // Turn on current indicator depending on scroll percentage
    for (let i = 0; i < scrollPoints.length; i++) {
        if (scrollPercentage >= scrollPoints[scrollPoints.length - 1] && scrollPercentage < 101) {
            dotList[dotList.length - 1].setAttribute('data-active', 'true');
            break;
        }
        else if (scrollPercentage < scrollPoints[1]) {
            dotList[0].setAttribute('data-active', 'true');
            break;
        }
        else if (scrollPercentage >= scrollPoints[i] && scrollPercentage <= scrollPoints[i+1]) {
            dotList[i].setAttribute('data-active', 'true');
            break;
        }        
    }


    // Run function again after 25ms to refresh status
    setTimeout(function () { SetActivePage(); }, 25);
}

function AutoScroll() {
    //Check if manual scroll has happened
    if (manualScroll==false) {
        ScrollRight();        
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");
    CountSlides();
    SetActivePage();
    scrollTimer = setInterval(AutoScroll, 5000);
}
);