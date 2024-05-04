function responseYes() {
    document.getElementById("response").innerHTML = "I'm so happy to hear that! 😊";
    // Replace 'YourNumber' with your actual number
    window.location.href = "https://wa.me/";
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
