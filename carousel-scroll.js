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