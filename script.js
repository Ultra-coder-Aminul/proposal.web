function responseYes() {
    document.getElementById("response").innerHTML = "I'm so happy to hear that! 😊";
    // Replace 'YourNumber' with your actual number
    window.location.href = "https://wa.me/9862463845";
}
function responseYes() {
    document.getElementById("response").innerHTML = "I'm so happy to hear that! 😊";
    // Replace 'YourNumber' with your actual number
    window.location.href = "https://wa.me/9862463845";
    // Show the Instagram icon
    document.getElementById("instaLink").style.display = "block";
}

function responseNo() {
    document.getElementById("response").innerHTML = "I still love you. Please click 'Yes'.";
    document.getElementById("hiddenYes").style.display = "block";
    // Hide the Instagram icon
    document.getElementById("instaLink").style.display = "none";
    // Add a playful message when she types 'no'
    alert("Oops! It seems like there was an error. Please try again by clicking 'Yes'.");
}

function freezeScreen() {
    // Get the "No" button element
    const noButton = document.getElementById('noButton');

    // Add a click event listener to the "No" button
    noButton.addEventListener('click', freezeScreen);

    // Disable pointer events on the body element
    document.body.style.pointerEvents = 'none';
    // Hide the Instagram icon when screen is frozen
    document.getElementById("instaLink").style.display = "none";
}
function responseNo() {
    document.getElementById("response").innerHTML = "I still love you. Please click 'Yes'.";

    document.getElementById("hiddenYes").style.display = "block";
    // Add a playful message when she types 'no'
    alert("Oops! It seems like there was an error. Please try again by clicking 'Yes'.");
}

function freezeScreen() {
    // Get the "No" button element
    const noButton = document.getElementById('noButton');

    // Add a click event listener to the "No" button
    noButton.addEventListener('click', freezeScreen);

    // Disable pointer events on the body element
    document.body.style.pointerEvents = 'none';
}
