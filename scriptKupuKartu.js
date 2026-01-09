const cenaKarte = 400;
let forma = kupiKartu;
let brojK = forma.brojKarata;
let red = forma.red;
let sediste = forma.sediste;
let email = forma.email;

function potvrdiFormu(event) {

    let greska = false;

    event.preventDefault();
    let broj = parseInt(brojK.value);

    if (isNaN(broj)) {
        brojK.style.backgroundColor = "red";
        greska = true;
    } else {
        brojK.style.backgroundColor = "";
    }

    if (!checkEmail(email.value)) {
        email.style.backgroundColor = "red";
        greska = true;
    } else {
        email.style.backgroundColor = "";
    }

    let poruka = document.getElementById("pogresan_checkbox");

    let oznaceniCheckbox = Array.from(document.querySelectorAll('input[name="sediste"]'))
        .filter(checkbox => checkbox.checked);

    if (!checkSediste(oznaceniCheckbox)) {
        poruka.innerHTML = "Pogresan broj sedišta!!!";
        greska = true;
    } else {
        poruka.innerHTML = "";
    }

    if (!greska) {
        let cena = document.getElementById("cenaUkupno");
        let cenaUkupno = brojK.value * cenaKarte;
        cena.textContent = "Cena ukupno: " + cenaUkupno + " din.";
        document.getElementById("dugme_nastavi").value = "Kupi";
    }
}

function checkEmail(email) {
    if (email.endsWith(".com")) {
        return true;
    } else {
        return false;
    }
}

function checkSediste(oznaceniCheckbox) {
    if (oznaceniCheckbox.length == brojK.value) {
        return true;
    } else {
        return false;
    }
}