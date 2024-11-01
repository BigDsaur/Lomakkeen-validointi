function validateForm() {
    let isValid = true;

    // Käyttäjä ID tarkistus
    const userId = document.getElementById("userId").value;
    const userIdError = document.getElementById("userIdError");
    if (userId.trim() === "") {
        userIdError.innerText = "Tämä on pakollinen";
        isValid = false;
    } else if (userId.length < 6) {
        userIdError.innerText = "Käyttäjä ID:n pitää olla vähintään 6 merkkiä pitkä.";
        isValid = false;
    } else {
        userIdError.innerText = "";
    }

    // Salasana tarkistus
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (password.trim() === "") {
        passwordError.innerText = "Tämä on pakollinen";
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        passwordError.innerText = "Salasana tarvitsee vähintään 6 merkkiä, numeron, ison kirjaimen ja erikoismerkin (!@£$€&%#).";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }

    // Sähköposti tarkistus
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === "") {
        emailError.innerText = "Tämä on pakollinen";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.innerText = "Anna kelvollinen sähköpostiosoite (esim. example@domain.com).";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    // Postinumero tarkistus
    const postalCode = document.getElementById("postalCode").value;
    const postalCodeError = document.getElementById("postalCodeError");
    const postalCodeRegex = /^[0-9]{5}$/;
    if (postalCode.trim() === "") {
        postalCodeError.innerText = "Tämä on pakollinen";
        isValid = false;
    } else if (!postalCodeRegex.test(postalCode)) {
        postalCodeError.innerText = "Postinumeron pitää olla 5 numeroa.";
        isValid = false;
    } else {
        postalCodeError.innerText = "";
    }

    // Maa tarkistus
    const country = document.getElementById("country").value;
    const countryError = document.getElementById("countryError");
    if (country === "") {
        countryError.innerText = "Tämä on pakollinen";
        isValid = false;
    } else {
        countryError.innerText = "";
    }

    // Sukupuoli tarkistus
    const gender = document.querySelector('input[name="gender"]:checked');
    const genderError = document.getElementById("genderError");
    if (!gender) {
        genderError.innerText = "Tämä on pakollinen";
        isValid = false;
    } else {
        genderError.innerText = "";
    }

    return isValid; // Estää lomakkeen lähetyksen, jos jokin kenttä on virheellinen
}