const form = document.getElementById("contact-form");

const username = document.getElementById("username");
const phone = document.getElementById("phone");
const solarSize = document.getElementById("solar-size");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    clearErrors();

    // Name Validation
    if (username.value.trim() === "") {
        showError(username, "Name is required");
        isValid = false;
    }

    // Phone Validation
    if (phone.value.trim() === "") {
        showError(phone, "Phone number is required");
        isValid = false;
    }

    // Solar Size Validation
    if (solarSize.value === "") {
        showError(solarSize, "Please select solar size");
        isValid = false;
    }

    // Success Alert
    if (isValid) {

        alert(
            `JazakAllah! Your query is successfully submitted. HEWAD SOLAR team will call you back on ${phone.value} within 24 hours.`
        );

        form.reset();
    }

});

function showError(input, message) {

    input.classList.add("error");

    const errorText = input.nextElementSibling;

    errorText.innerText = message;
}

function clearErrors() {

    const inputs = document.querySelectorAll("input, select");

    inputs.forEach(input => {

        input.classList.remove("error");

        const errorText = input.nextElementSibling;

        if (errorText) {
            errorText.innerText = "";
        }

    });

}