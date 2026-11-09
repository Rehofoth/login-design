
const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const googleButton = document.getElementById("google-btn");
const githubButton = document.getElementById("github-btn");

// 1. Handle the login form
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!username || !email || !password) {
        loginMessage.textContent = "Please fill in all fields.";
        return;
    }

    
loginMessage.textContent =
    `Welcome, ${username}! Your demo form is working.`;

const loginCard = document.querySelector(".login-card");

if (loginCard) {
    loginCard.classList.remove("login-success");

    // Restart the animation
    void loginCard.offsetWidth;

    loginCard.classList.add("login-success");

    loginCard.addEventListener("animationend", function () {
        loginCard.classList.remove("login-success");
    }, { once: true });
}

// Clear the password field after the demonstration
passwordInput.value = "";

const togglePassword = document.getElementById("toggle-password");

if (togglePassword) {
    togglePassword.textContent = "Show";
    togglePassword.setAttribute("aria-label", "Show password");
    togglePassword.setAttribute("aria-pressed", "false");
}

});

// 2. Google button
googleButton.addEventListener("click", function () {
    loginMessage.textContent =
        "Google sign-in is not connected yet.";
});

// 3. GitHub button
githubButton.addEventListener("click", function () {
    loginMessage.textContent =
        "GitHub sign-in is not connected yet.";
});

// 4. Clear the message when the user starts typing
[usernameInput, emailInput, passwordInput].forEach(function (input) {
    input.addEventListener("input", function () {
        loginMessage.textContent = "";
    });
});


/* 5. Interactive lamp lighting */

const lampArea = document.querySelector(".lamp-area");
const lampGlow = document.querySelector(".lamp-glow");
const lightBeam = document.querySelector(".light-beam");

if (lampArea && lampGlow && lightBeam) {
    lampArea.addEventListener("mousemove", function (event) {
        const rect = lampArea.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (mouseX - centerX) / centerX;
        const moveY = (mouseY - centerY) / centerY;

        lampGlow.style.transform =
            `translate(${moveX * 25}px, ${moveY * 15}px)`;

        lightBeam.style.transform =
            `translateX(calc(-50% + ${moveX * 12}px))`;

        lampGlow.style.opacity = "0.22";
    });

    lampArea.addEventListener("mouseleave", function () {
        lampGlow.style.transform = "";
        lightBeam.style.transform = "translateX(-50%)";
        lampGlow.style.opacity = "";
    });
}



/* 6. Lamp ON/OFF switch controls the login card */

const lampToggle = document.getElementById("lamp-toggle");
const loginCard = document.querySelector(".login-card");

if (lampToggle && lampArea && loginCard) {
    // Start with the login visible because the lamp is on
    loginCard.classList.add("login-visible");
    loginCard.classList.remove("login-hidden");

    lampToggle.addEventListener("click", function () {
        lampArea.classList.toggle("light-off");

        const isLightOff =
            lampArea.classList.contains("light-off");

        // Update the switch label
        lampToggle.textContent = isLightOff
            ? "Turn Light On"
            : "Turn Light Off";

        lampToggle.setAttribute(
            "aria-pressed",
            String(!isLightOff)
        );

        // Hide the login when the lamp is off
        if (isLightOff) {
            loginCard.classList.remove("login-visible");
            loginCard.classList.add("login-hidden");
        } else {
            // Reveal the login when the lamp is on
            loginCard.classList.remove("login-hidden");
            loginCard.classList.add("login-visible");
        }
    });
}



/* 7. Show/hide password */

const togglePassword = document.getElementById("toggle-password");

if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
        const isPasswordHidden = passwordInput.type === "password";

        passwordInput.type = isPasswordHidden ? "text" : "password";

        togglePassword.textContent = isPasswordHidden ? "Hide" : "Show";

        togglePassword.setAttribute(
            "aria-label",
            isPasswordHidden ? "Hide password" : "Show password"
        );

        togglePassword.setAttribute(
            "aria-pressed",
            String(isPasswordHidden)
        );
    });
}
