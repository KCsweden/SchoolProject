const users = {
    "admin": { password: "admin123", role: "admin" },
    "teacher": { password: "teacher123", role: "teacher" },
    "student": { password: "student123", role: "student" }
};

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (users[username] && users[username].password === password) {
        const userRole = users[username].role;
        if (userRole === "admin") {
            window.location.href = "HtmlPage2.html";
        } else if (userRole === "teacher") {
            window.location.href = "HtmlPage2.html";
        } else if (userRole === "student") {
            window.location.href = "HtmlPage3.html";
        } else {
            errorMessage.textContent = "Wrong username or password.";
        }
    }
};