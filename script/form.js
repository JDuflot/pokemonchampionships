const form = document.querySelector('form')
const message = {
    first: "Veuillez entrer entre 2 et 30 caractères sans caractères spéciaux.",
    last: "Veuillez entrer entre 2 et 30 caractères sans caractères spéciaux.",
    email: "Veuillez entrer une adresse e-mail valide.",
    quantity: "Veuillez entrer un nombre valide (entre 0 et 99).",
    birthdate: "Vous devez être majeur (+ 18 ans) pour vous inscrire.",
    location: "Veuillez sélectionner une ville.",
    userConditions: "Veuillez accepter les conditions d'utilisation."
};
//regex last name & first name
const validateName = (field) => {
    const regexName = /^([A-Za-z|\s]{2,30})?([-]{0,1})?([A-Za-z|\s]{2,30})$/;
    return regexName.test(field.value); 
}

//regex email

const validateEmail = (field) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(field.value);
}

// + 18 years autorisation
        const validateBirthdate = (field) => {
            const birthdate = new Date(field.value);

            const today = new Date();

            const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
            return birthdate <= eighteenYearsAgo; 
        }

// regex quantity events 

const validateQuantity = (field) => {
    const regexQuantity = /^(0|[1-9][0-9]?)$/;
    return regexQuantity.test(field.value);
}

// location checked

const validateLocation = (locationRadios) => {
    let locationSelected = false;
    locationRadios.forEach((radio) => {
        if (radio.checked) {
            locationSelected = true;
        }
});
    return locationSelected;
}

// user terms checked

const validateuserConditions = (userConditions) => {
    let userConditionsSelected = false;
    if (userConditions.checked) {
        userConditionsSelected = true;
    }
    message.userConditions;
    return userConditionsSelected;
}

const displayError = (field, isValid) => {
    const formDataDiv = field.closest('.formData');
    const fieldName = field.getAttribute('name');

    if(!isValid){
        formDataDiv.setAttribute('data-error-visible', true);
        formDataDiv.dataset.error = message[fieldName];
    
    }else{
        formDataDiv.removeAttribute('data-error-visible');
    }
}; 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const first = e.target.first
    const last = e.target.last
    const email = e.target.email
    const quantity = e.target.quantity
    const birthdate = e.target.birthdate
    const location = e.target.location
    const userConditions = e.target.userConditions

    const isFirstValid = validateName(first)
    const isLastValid = validateName(last)
    const isEmailValid = validateEmail(email)
    const isQuantityValid = validateQuantity(quantity)
    const isBirthdateValid = validateBirthdate(birthdate)
    const isLocationValid = validateLocation(location)
    const isuserConditionsValid = validateuserConditions(userConditions)

    displayError(first, isFirstValid)
    displayError(last, isLastValid)
    displayError(email, isEmailValid)
    displayError(quantity, isQuantityValid)
    displayError(birthdate, isBirthdateValid)
    displayError(location[0], isLocationValid)
    displayError(userConditions, isuserConditionsValid)


    if(isFirstValid && isLastValid && isEmailValid && isQuantityValid && isBirthdateValid && isLocationValid && isuserConditionsValid){
        form.reset()
        hideModal()
        successModal()
    } else {
        closeModalSuccess()
    }
});
