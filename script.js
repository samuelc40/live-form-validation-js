
document.getElementById('nameInput').addEventListener('input', validateName);
document.getElementById('emailInput').addEventListener('input', validateEmail);
document.getElementById('dateInput').addEventListener('input', validateDateOfBirth);

var nameSatisfied = 0;
var emailSatisfied = 0;
var dobSatisfied = 0; 
var phoneSatisfied = 0;
var passwordSatisfied = 0;
var confirmPasswordSatisfied = 0;

var formSubmissionAttempts = 0;

// var validIcon = '<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon>';

function validateName() {
    var nameInput = document.getElementById('nameInput').value;
    var nameError = document.getElementById('nameError');
    var nameErrorIcon = document.getElementById('nameErrorIcon');

    var atLeastThreeCharacters = /^.{3,}$/;

    var alphabeticCharacters = /^[a-zA-Z]+$/;

    if (!atLeastThreeCharacters.test(nameInput) && !alphabeticCharacters.test(nameInput)) {
        nameError.innerText = 'Name should only contain alphabetic characters and be at least 3 characters long.';
        nameErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>'
        nameSatisfied = 0;
    } else if (!atLeastThreeCharacters.test(nameInput)) {
        nameError.innerText = 'Name should be at least 3 characters long.';
        nameErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>'
        nameSatisfied = 0;
    } else if (!alphabeticCharacters.test(nameInput)) {
        nameError.innerText = 'Name should only contain alphabetic characters.';
        nameErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>'
        nameSatisfied = 0;
    } else if (atLeastThreeCharacters.test(nameInput) && alphabeticCharacters.test(nameInput)) {
        nameError.innerText = '';
        nameErrorIcon.innerHTML = '<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon>';
        nameSatisfied = 1;

    } else {
        nameError.innerText = '';
        nameErrorIcon.innerHTML = '';
        nameSatisfied = 0;
    }
    // validateForm();
}

function validateEmail() {
    var emailInput = document.getElementById('emailInput').value;
    var emailError = document.getElementById('emailError');
    var emailErrorIcon = document.getElementById('emailErrorIcon');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(emailInput)) {
        emailError.innerText = 'Enter a valid email address!';
        emailErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        emailSatisfied = 0;
    } else if(emailPattern.test(emailInput)) {
        emailError.innerText = '';
        emailErrorIcon.innerHTML = '<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon>';
        emailSatisfied = 1;
    } else {
        emailError.innerText = '';
        emailErrorIcon.innerHTML = '';
        emailSatisfied = 0;
    }
    // validateForm();
}

function validateDateOfBirth() {

    var dateInput = document.getElementById('dateInput');
    var dateError = document.getElementById('dateError'); 
    var dateErrorIcon = document.getElementById('dateErrorIcon');

    var enteredDate = new Date(dateInput.value);
    var currentDate = new Date();


    if (isNaN(enteredDate.getTime()) || enteredDate > currentDate) {
        dateError.innerText = 'Please enter a valid date!'
        dateErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        dobSatisfied = 0;
    } else if(enteredDate < currentDate) {
        dateError.innerText = '';
        dateErrorIcon.innerHTML = '<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon>';
        dobSatisfied = 1;
    } else {
        dateError.innerText = '';
        dateErrorIcon = '';
        dobSatisfied = 0;
    }
    // validateForm();
}

function validateMobileNumber(input) {
    var regex = /^[0-9]+$/;
    var errorMsg = document.getElementById('mobileError');
    var mobileErrorIcon = document.getElementById('mobileErrorIcon');


    if (!regex.test(input)) {
        errorMsg.textContent = 'Please enter only numeric characters.';
        mobileErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        phoneSatisfied = 0;

    } else if (input.length !== 10) { // Adjust the length based on your requirements
        errorMsg.textContent = 'Mobile number should be 10 digits.';
        mobileErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        phoneSatisfied = 0;
    } else {
        errorMsg.textContent = '';
        mobileErrorIcon.innerHTML = '<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon>';
        phoneSatisfied = 1;
    }
    // validateForm();
}


function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordErrorIcon = document.getElementById('passwordErrorIcon');
    var passwordError = document.getElementById('passwordError');

    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var specialCharRegex = /[@$!%*?&]/;
    // var atleastEight = /^.{8,}$/;


    if (!lowercaseRegex.test(password)) {
        passwordError.textContent = 'At least one lowercase letter is required.';
        passwordErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        passwordSatisfied = 0;
    } else if (!uppercaseRegex.test(password)) {
        passwordError.textContent = 'At least one Uppercase letter is required.';
        passwordErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        passwordSatisfied = 0;
    } else if (!specialCharRegex.test(password)) {
        passwordError.textContent = 'At least one special character is required.';
        passwordErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        passwordSatisfied = 0;
    } else if (password.length <= 7 ) {
        passwordError.textContent = 'At least 8 characters required!';
        passwordErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        passwordSatisfied = 0;
    } else {
        passwordError.textContent = '';
        passwordErrorIcon.innerHTML = '<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon>';
        passwordSatisfied = 1;
    }
    // validateForm();
}

function validateConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var confirmPasswordErrorIcon = document.getElementById('confirmPasswordErrorIcon');
    var confirmPasswordError = document.getElementById('confirmPasswordError');


    if (password === '' || password.length <= 7) {
        confirmPasswordError.textContent = 'Password is required!';
        confirmPasswordErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        confirmPasswordSatisfied = 0;
    } else if (confirmPassword === password) {
        confirmPasswordError.textContent = '';
        confirmPasswordErrorIcon.innerHTML = '<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon>';
        confirmPasswordSatisfied = 1;
    } else {
        confirmPasswordError.textContent = 'Passwords do not match!';
        confirmPasswordErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
        confirmPasswordSatisfied = 0;
    }
    // validateForm()
}

function validateForm(e) {

    if ( nameSatisfied + emailSatisfied + dobSatisfied + phoneSatisfied + passwordSatisfied + confirmPasswordSatisfied === 6 ) {
        alert('Your form has been submitted successfully.');
        document.getElementById('successForm').innerHTML = '<h2>Registration successful<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon></h2>';
    } else {
        formSubmissionAttempts += 1;
        if ( formSubmissionAttempts >= 3 ) {
            alert('Oops...You are out of attempts to submit this form!');
            document.getElementById('successForm').innerHTML = '<h2>Out of Submission Attempts<ion-icon name="alert-circle" style="color: red;"></ion-icon></h2>';
            return
        }
        alert('There are errors in your form. Please check and correct them.');
        e.preventDefault();
        
    }
}

// function validatePassword() {
//     var password = document.getElementById("password").value;
//     var passwordErrorIcon = document.getElementById('passwordErrorIcon');

//     var lowercaseRegex = /[a-z]/;
//     var uppercaseRegex = /[A-Z]/;
//     var specialCharRegex = /[@$!%*?&]/;
//     var atleastEight = /^.{8,}$/;

//     document.getElementById("lowercaseError").textContent = lowercaseRegex.test(password) ? "" : "At least one lowercase letter is required.";
//     document.getElementById("uppercaseError").textContent = uppercaseRegex.test(password) ? "" : "At least one uppercase letter is required.";
//     document.getElementById("specialCharError").textContent = specialCharRegex.test(password) ? "" : "At least one special character (@, $, !, %, *, ?, &) is required.";
//     document.getElementById("lengthError").textContent = atleastEight.test(password) ? "" : "Minimum length of 8 characters is required.";

//     if (lowercaseRegex.test(password) && uppercaseRegex.test(password) && specialCharRegex.test(password) && atleastEight.test(password)) {
//         passwordErrorIcon.innerHTML = '<ion-icon name="checkmark-circle" style="color: rgb(35, 177, 35);"></ion-icon>';
//     } else {
//         passwordErrorIcon.innerHTML = '<ion-icon name="alert-circle" style="color: red;"></ion-icon>';
//     }
// }


// function validateForm() {
//     var FormSubmitButton = document.getElementById('submitButton');
//     if (validateName.satisfied) {
//         alert("Your form has been submitted successfully");
//     } else {
//         FormSubmitButton.disabled = true;
//         alert("Please complete the form requirements!")
//     }
// }

// function enableSubmitButton() {
//     var nameSatisfied = validateName();
//     var emailSatisfied = validateEmail();
//     var dateOfBirthSatisfied = validateDateOfBirth();
//     var mobileNumberSatisfied = validateMobileNumber(document.getElementById('mobileInput').value);
//     var passwordSatisfied = validatePassword();
//     var confirmPasswordSatisfied = validateConfirmPassword();

//     var submitButton = document.getElementById('submitButton');
    
//     // Enable the submit button only if all fields are satisfied
//     submitButton.disabled = !(nameSatisfied && emailSatisfied && dateOfBirthSatisfied && mobileNumberSatisfied && passwordSatisfied && confirmPasswordSatisfied);
// }

// // Add event listeners to call enableSubmitButton when any input changes
// document.getElementById('nameInput').addEventListener('input', enableSubmitButton);
// document.getElementById('emailInput').addEventListener('input', enableSubmitButton);
// document.getElementById('dateInput').addEventListener('input', enableSubmitButton);
// document.getElementById('mobileInput').addEventListener('input', enableSubmitButton);
// document.getElementById('password').addEventListener('input', enableSubmitButton);
// document.getElementById('confirmPassword').addEventListener('input', enableSubmitButton);

// function validateForm() {
//     var nameSatisfied = validateName.satisfied;
//     var emailSatisfied = validateEmail.satisfied;
//     var dateOfBirthSatisfied = validateDateOfBirth.satisfied;
//     var mobileNumberSatisfied = validateMobileNumber.satisfied;
//     var passwordSatisfied = validatePassword.satisfied;
//     var confirmPasswordSatisfied = validateConfirmPassword.satisfied;

//     var submitButton = document.getElementById('submitButton');

//     if (nameSatisfied && emailSatisfied && dateOfBirthSatisfied && mobileNumberSatisfied && passwordSatisfied && confirmPasswordSatisfied) {
//         alert("Your form has been submitted successfully.")
//     } else {
//         submitButton.disabled;
//     }
// }

// function validateForm() {
//     var successForm = document.getElementById('successForm');
//     var submitButton = document.getElementById('submitButton');
//     if (satisfied === 6) {
//         alert('Your form has been submitted successfully.')
//         successForm.innerHTML = '<h2>Registration successfull.</h2>';
//     } else {
//         submitButton.disabled;
//     }
// }

// document.getElementById('nameInput').addEventListener('input', validateForm);
// document.getElementById('emailInput').addEventListener('input', validateForm);
// document.getElementById('dateInput').addEventListener('input', validateForm);
// document.getElementById('mobileInput').addEventListener('input', validateForm);
// document.getElementById('password').addEventListener('input', validateForm);
// document.getElementById('confirmPassword').addEventListener('input', validateForm);

// function validateForm(e) {
//     let nameField = validateName.nameErrorIcon;
//     let emailField = validateEmail.emailErrorIcon;
//     let dobField = validateDateOfBirth.dateErrorIcon;
//     let numberField = validateMobileNumber.mobileErrorIcon;
//     let passwordField = validatePassword.passwordErrorIcon;
//     let confirmPasswordField = validateConfirmPassword.confirmPasswordErrorIcon;

//     if (nameField === validIcon &&
//         emailField === validIcon &&
//         dobField === validIcon &&
//         passwordField === validIcon &&
//         numberField === validIcon &&
//         confirmPasswordField === validIcon) {
        
//         alert('Your form has been submitted successfully.');
//         document.getElementById('successForm').innerHTML = '<h2>Registration successful.</h2>';
//     } else {
//         alert('There are errors in your form. Please check and correct them.');
//         e.preventDefault();
//     }
// }

// document.getElementById('nameInput').addEventListener('input', validateForm);
// document.getElementById('emailInput').addEventListener('input', validateForm);
// document.getElementById('dateInput').addEventListener('input', validateForm);
// document.getElementById('mobileInput').addEventListener('input', validateForm);
// document.getElementById('password').addEventListener('input', validateForm);
// document.getElementById('confirmPassword').addEventListener('input', validateForm);


