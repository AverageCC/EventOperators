let dx = 2; // Defines the change in the x direction
let dy = 2; // Defines the change in the y direction
let intervalId; // This sets the interval for the movement as a global variable

const img = document.getElementById('dvdimage'); // Get the image element, which has the id 'dvdimage' show on line defined on line 6 of strings.html

function startMovement() { // startMovement function is executed when the start button is clicked
    if (!intervalId) { // If the intervalId is not set show using the ! before the intervalId, then it sets the intervalId
        intervalId = setInterval(() => { // Set the interval
            let x = img.offsetLeft; // Gets the x position of the image
            let y = img.offsetTop; // Gets the y position of the image

            if (x + img.offsetWidth > window.innerWidth || x < 0) dx = -dx; // If the image hits the right or left side of the screen, then change the direction of the image
            if (y + img.offsetHeight > window.innerHeight || y < 0) dy = -dy; // If the image hits the top or bottom of the screen, then change the direction of the image

            img.style.left = x + dx + 'px';  // Moves the image in the x direction. The x + dx is the new position of the image while the 'px' is the unit of measurement
            img.style.top = y + dy + 'px'; // Moves the image in the y direction. The y + dy is the new position of the image while the 'px' is the unit of measurement
        }, 20); // 20 milliseconds = 50 frames per second (fps). The 20 is inside the setInterval function on line 9 - setInterval(() => { ... }, 20);
    }
}

function stopMovement() { // stopMovement function is executed when the stop button is clicked
    if (intervalId) { // Checks to see if the intervalId is set
        clearInterval(intervalId); // Clear the interval
        intervalId = null; // Reset the intervalId
    }
    
    img.style.left = '0px'; // Resets the image position to the top left corner
    img.style.top = '0px'; // Resets the image position to the top left corner
}