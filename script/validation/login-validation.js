import { validateInput, debounce, checkEmail } from "./validation.js";

const form = document.querySelector("#form");
const email = document.getElementById("email");
const password = document.getElementById("password");

const validateForm = (e) => {
    e.preventDefault();

    const isEmailValid = checkEmail(email);
    const isPasswordValid = validateInput(
        password,
        "Password  cannot be blank."
    );
    const isFormValid = isEmailValid && isPasswordValid;

    if (isFormValid) {
        // Save the data or submit the form
    }
};

form.addEventListener("submit", validateForm);
form.addEventListener(
    "input",
    debounce((e) => {
        switch (e.target.id) {
            case "email":
                checkEmail();
                break;
            case "password":
                validateInput(
                    password,
                    password.value,
                    "Password  cannot be blank."
                );
                break;
        }
    })
);
