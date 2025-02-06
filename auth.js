document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const toggleFormText = document.getElementById("toggle-form");
    const submitButton = authForm.querySelector(".btn");

    let isSignup = false;

    // Toggle between Login and Signup
    toggleFormText.addEventListener("click", () => {
        isSignup = !isSignup;

        if (isSignup) {
            formTitle.innerText = "Sign Up";
            confirmPasswordGroup.classList.remove("hidden");
            submitButton.innerText = "Sign Up";
            toggleFormText.innerHTML = "Already have an account? <span>Login</span>";
        } else {
            formTitle.innerText = "Login";
            confirmPasswordGroup.classList.add("hidden");
            submitButton.innerText = "Login";
            toggleFormText.innerHTML = "Don't have an account? <span>Sign up</span>";
        }
    });

    // Form validation & Redirect to Home Page
    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        if (isSignup && password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Simulating authentication
        alert(isSignup ? "Signed up successfully!" : "Logged in successfully!");

        // Redirect to Home Page
        window.location.href = "index.html";  // Change this to your actual home page file
    });
});
