
// JavaScript function to validate email and password
function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Checking for predefined email and password
    if (email === "ved@gmail.com" && password === "123") {
        alert("Login successful! Redirecting to the dashboard...");
        // Redirecting to another page after successful login
        window.location.href = "\assets\\afterlogin\\index.html"; // Change this URL to your target page
    } else {
        alert("Invalid email or password. Please try again.");
    }
}