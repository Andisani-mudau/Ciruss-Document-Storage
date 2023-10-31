// Common validation function for both sign-in and sign-up forms
function validateForm(password) {
    
    return true; // Return true if the validation is successful, false otherwise.
}

// Event listener for sign-in form
const signInForm = document.getElementById("signin-form");
signInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById("password-signin").value;
    const isValid = validateForm(password);
    
    if (isValid) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Event listener for sign-in form
const adminsignInForm = document.getElementById("signin-form");
adminsignInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById("password-signin").value;
    
    if (password === "9999") {
        window.location.href = "administration.html";
    } else {
        
    }
});

// Event listener for sign-up form
const signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById("password-signup").value;

    if (password === "9999") {
        // Redirect to the dashboard or perform sign-up actions.
        window.location.href = "sign_in.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

function page() {
    if(window.location.href == "sign_out.html"){
        setTimeout(function() {
            window.location.href = "index.html"; // Replace with the URL you want to redirect to.
        }, 5000);
    }
}

page();
