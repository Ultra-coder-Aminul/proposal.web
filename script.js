function responseYes() {
    document.getElementById("response").innerHTML = "I'm so happy to hear that! 😊";
    window.location.href = "https://wa.me/YourNumber"; // Replace 'YourNumber' with your actual number
    document.getElementById("instaLink").style.display = "block";
}

function responseNo() {
    document.getElementById("response").innerHTML = "I still love you. Please click 'Yes'.";
    document.getElementById("yesButton").style.display = "block"; // Corrected ID for consistency
    document.getElementById("instaLink").style.display = "none";
    alert("Oops! It seems like there was an error. Please try again by clicking 'Yes'.");
}

function freezeScreen() {
    const noButton = document.getElementById('noButton');
    noButton.addEventListener('click', function(event){
        event.preventDefault();
        document.body.style.pointerEvents = 'none';
        document.getElementById("instaLink").style.display = "none";
        alert("The screen is frozen, you cannot say no!");
    });
}
