let dx = 2; // Change in x direction
let dy = 2; // Change in y direction
let intervalId; // ID of the interval

const img = document.getElementById('myImage');

function startMovement() {
    // Only start a new interval if one is not already running
    if (!intervalId) {
        intervalId = setInterval(() => {
            let x = img.offsetLeft;
            let y = img.offsetTop;

            // Check if the image hit the edge of the screen
            if (x + img.offsetWidth > window.innerWidth || x < 0) dx = -dx;
            if (y + img.offsetHeight > window.innerHeight || y < 0) dy = -dy;

            // Move the image
            img.style.left = x + dx + 'px';
            img.style.top = y + dy + 'px';
        }, 20); // 20 milliseconds = 50 frames per second
    }
}

function stopMovement() {
    if (intervalId) {
        clearInterval(intervalId); // Clear the interval
        intervalId = null;
    }
    
    img.style.left = '0px'; // Reset image position
    img.style.top = '0px';
}