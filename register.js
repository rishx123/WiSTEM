document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const accountType = document.getElementById("account-type").value;

    if (accountType === "mentor") {
        window.location.href = "mentors.html"; // Redirect to mentor interface
    } else if (accountType === "mentee") {
        window.location.href = "mentee.html"; // Redirect to mentee interface
    } else {
        alert("Please select an account type.");
    }
});
