/** 
  These are some general validation function which will be exported in other file as needed.
  Functions:
     - validateInput(element, value, message): Validates input fields for required fields.
     - isEmailValid(email): Checks if an email is in a valid format.
     - showSuccess(element): Clears error messages and styles for a validated field.
     - showError(element, message): Displays error messages and styles for an invalid field.

  Author: Altin Morina
  Date: October 27, 2023
 */
export const validateInput = (element, message) => {
    const valid = element.value.trim() !== "";

    if (valid) {
        showSuccess(element);
    } else {
        showError(element, message);
    }

    return valid;
};

export const showSuccess = (element) => {
    const formField = element.parentElement;
    formField.classList.remove("error");
    formField.querySelector(".error").textContent = "";
};

export const showError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
};
export const checkEmail = (emailEl) => {
    const email = emailEl.value.trim();

    if (email === "") {
        showError(emailEl, "Email cannot be blank.");
        return false;
    }
    if (!isEmailValid(email)) {
        showError(emailEl, "Email is not valid.");
        return false;
    }

    showSuccess(emailEl);
    return true;
};

export const isEmailValid = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const isPasswordSecure = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return re.test(password);
};

export const debounce = (fn, delay = 500) => {
    let timeoutId;

    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};
