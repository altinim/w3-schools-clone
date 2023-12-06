/**
 Form Validation Script

 This JavaScript script is designed to validate user input in a registration form.
 It checks for various conditions such as required fields, email format, password strength,
  and password confirmation. 

 Functions:
 - checkEmail(): Validates the email field for format and required input.
 - checkPassword(): Validates the password field for format and required input.
 - checkConfirmPassword(): Validates the confirmation password field.
 - isPasswordSecure(password): Checks if a password meets security requirements.
 - validateForm(e): Handles the form submission and validates all fields.
 - Event listeners for form submission and input changes.

 Author: Altin Morina
 Date: October 27, 2023
*/
import {
    validateInput,
    showSuccess,
    showError,
    isPasswordSecure,
    checkEmail,
    debounce,
} from "./validation.js";
const form = document.querySelector("#form");
const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");

const checkPassword = () => {
    const password = passwordEl.value.trim();
    if (password === "") {
        showError(passwordEl, "Password cannot be blank.");
        return false;
    }
    if (!isPasswordSecure(password)) {
        showError(
            passwordEl,
            "Password must have at least 8 characters, including 1 lowercase, 1 uppercase, 1 number, and 1 special character (!@#$%^&*)"
        );
        return false;
    }
    showSuccess(passwordEl);
    return true;
};

const checkConfirmPassword = () => {
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (confirmPassword === "") {
        showError(confirmPasswordEl, "Please enter the password again.");
        return false;
    }
    if (password !== confirmPassword) {
        showError(confirmPasswordEl, "Passwords do not match.");
        return false;
    }
    showSuccess(confirmPasswordEl);
    return true;
};

const validateForm = (e) => {
    e.preventDefault();

    const isValidName = validateInput(
        firstNameEl,
        "First name cannot be blank."
    );
    const isValidLastName = validateInput(
        lastNameEl,
        "Last name cannot be blank."
    );
    const isEmailValid = checkEmail(emailEl);
    const isPasswordValid = checkPassword();
    const isConfirmPasswordValid = checkConfirmPassword();

    const isFormValid =
        isValidName &&
        isValidLastName &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {
    }
};

form.addEventListener("submit", validateForm);
form.addEventListener(
    "input",
    debounce(function (e) {
        switch (e.target.id) {
            case "first-name":
                validateInput(firstNameEl, "First name cannot be blank.");
                break;
            case "last-name":
                validateInput(lastNameEl, "Last name cannot be blank.");
                break;
            case "email":
                checkEmail();
                break;
            case "password":
                checkPassword();
                break;
            case "confirm-password":
                checkConfirmPassword();
                break;
        }
    })
);
