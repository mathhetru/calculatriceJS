// DOM Elements - touches calculette
const ecranResults = document.querySelector(".results");
const touchParaOuvrante = document.querySelector(".para-ouvrante");
const touchParaFerme = document.querySelector(".para-ferme");
const touchPourcentage = document.querySelector(".pourcentage");
const touchCe = document.querySelector(".CE");
const touchSept = document.querySelector(".sept");
const touchHuit = document.querySelector(".huit");
const touchNeuf = document.querySelector(".neuf");
const touchDivision = document.querySelector(".division");
const touchQuatre = document.querySelector(".quatre");
const touchCinq = document.querySelector(".cinq");
const touchSix = document.querySelector(".six");
const touchMultiplie = document.querySelector(".multiplie");
const touchUn = document.querySelector(".un");
const touchDeux = document.querySelector(".deux");
const touchTrois = document.querySelector(".trois");
const touchMoins = document.querySelector(".moins");
const touchZero = document.querySelector(".zero");
const touchPoint = document.querySelector(".point");
const touchEgal = document.querySelector(".egal");
const touchPlus = document.querySelector(".plus");


// evenements click
touchParaOuvrante.addEventListener('click', function paraOuvrante() {
    ecranResults.innerHTML = "("
});
touchParaFerme.addEventListener('click', function paraFerme() {
    ecranResults.innerHTML = ")"
});
touchPourcentage.addEventListener('click', function pourcentage() {
    ecranResults.innerHTML = "%"
});
touchSept.addEventListener('click', function sept() {
    ecranResults.innerHTML = "7"
});
touchHuit.addEventListener('click', function huit() {
    ecranResults.innerHTML = "8"
});
touchNeuf.addEventListener('click', function neuf() {
    ecranResults.innerHTML = "9"
});
touchDivision.addEventListener('click', function division() {
    ecranResults.innerHTML = "/"
});
touchQuatre.addEventListener('click', function quatre() {
    ecranResults.innerHTML = "4"
});
touchCinq.addEventListener('click', function cinq() {
    ecranResults.innerHTML = "5"
});
touchSix.addEventListener('click', function six() {
    ecranResults.innerHTML = "6"
});
touchMultiplie.addEventListener('click', function multiplie() {
    ecranResults.innerHTML = "x"
});
touchUn.addEventListener('click', function un() {
    ecranResults.innerHTML = "1"
});
touchDeux.addEventListener('click', function deux() {
    ecranResults.innerHTML = "2"
});
touchTrois.addEventListener('click', function trois() {
    ecranResults.innerHTML = "3"
});
touchMoins.addEventListener('click', function moins() {
    ecranResults.innerHTML = "-"
});
touchZero.addEventListener('click', function zero() {
    ecranResults.innerHTML = "0"
});
touchPoint.addEventListener('click', function point() {
    ecranResults.innerHTML = "."
});
touchEgal.addEventListener('click', function egal() {
    ecranResults.innerHTML = "="
});
touchPlus.addEventListener('click', function plus() {
    ecranResults.innerHTML = "+"
});

/*

// Evenements click

function showResults(message) {
	ecranResults.innerHTML = (message);
	};
touchParaOuvrante.addEventListener('click', showResults("("));
touchParaFerme.addEventListener('click', showResults(")"));
*/