
function validateForm() {
    let isValid = true;

    // Tyhjennetään aiemmat virheilmoitukset
    document.getElementById("userIdError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("postalCodeError").innerText = "";
    document.getElementById("countryError").innerText = "";
    document.getElementById("genderError").innerText = "";

    // Käyttäjä ID tarkistus
    const userId = document.getElementById("userId").value;
    if (userId.trim() === "" || userId.length < 6) {
        document.getElementById("userIdError").innerText = "Käyttäjä ID:n pitää olla vähintään 6 merkkiä pitkä.";
        isValid = false;
    }

    // Salasana tarkistus
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerText = "Salasanan pitää olla vähintään 6 merkkiä pitkä ja sisältää vähintään yksi numero, yksi iso kirjain ja yksi erikoismerkki (!@£$€&%#).";
        isValid = false;
    }

    // Sähköposti tarkistus
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Anna kelvollinen sähköpostiosoite (esim. example@domain.com).";
        isValid = false;
    }

    // Postinumero tarkistus
    const postalCode = document.getElementById("postalCode").value;
    const postalCodeRegex = /^[0-9]{5}$/;
    if (!postalCodeRegex.test(postalCode)) {
        document.getElementById("postalCodeError").innerText = "Postinumeron pitää olla 5 numeroa.";
        isValid = false;
    }

    // Maa tarkistus
    const country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").innerText = "Valitse maa.";
        isValid = false;
    }

    // Sukupuoli tarkistus
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").innerText = "Valitse sukupuoli.";
        isValid = false;
    }

    return isValid; // Palauttaa false, jos lomakkeessa on virheitä
}