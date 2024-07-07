document.addEventListener("DOMContentLoaded", function() {
    // Show loading screen
    document.body.classList.add('loading');
    document.getElementById('loading-screen').style.display = 'flex';

    // Simulate loading delay (you can remove this in production)
    setTimeout(function() {
        // Redirect to home.html after loading animation completes
        window.location.href = "home.html";
    }, 5000); // 5-second delay
});
