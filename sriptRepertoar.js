var cenaKarte = 400;
const filmovi = ["Zlica", "Konklava", "Ovde", "Gladiator 2", "Exkurzija"];

var cena = document.getElementsByClassName("cena");
for (var i = 0; i < cena.length; i++) {
    cena[i].textContent = "Cena karte: " + cenaKarte + "din";
}

