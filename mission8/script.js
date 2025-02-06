function toggleCode(id) {
    let codeBlock = document.getElementById(id);
    codeBlock.style.display = codeBlock.style.display === "block" ? "none" : "block";
}

// 1. Calcul de la moyenne
function moyenne() {
    let a = parseFloat(prompt("Entrez l'âge de la première personne :"));
    let b = parseFloat(prompt("Entrez l'âge de la deuxième personne :"));
    let c = parseFloat(prompt("Entrez l'âge de la troisième personne :"));
    alert(`La moyenne d'âge est : ${(a + b + c) / 3}`);
}

// 2. Puissance d'un nombre
function puissance() {
    let base = parseFloat(prompt("Entrez un nombre :"));
    let exposant = parseInt(prompt("Entrez la puissance :"));
    alert(`Résultat : ${Math.pow(base, exposant)}`);
}

// 3. Question sur le Président
function president() {
    alert("Ceci est une question d'opinion.");
}

// 4. Trouver le plus grand nombre
function plusGrand() {
    alert(`Le plus grand nombre est : ${Math.max(0.01, 0.1)}`);
}

// 5. Vérifier si un nombre est pair
function pair() {
    let nombre = parseInt(prompt("Entrez un nombre :"));
    alert(nombre % 2 === 0 ? "Le nombre est pair." : "Le nombre est impair.");
}

// 6. Vérifier si un nombre est un multiple de 6
function multipleDe6() {
    let nombre = parseInt(prompt("Entrez un nombre :"));
    alert(nombre % 6 === 0 ? "Le nombre est un multiple de 6." : "Non.");
}

// 7. Somme des chiffres d'un nombre
function sommeChiffres() {
    let nombre = prompt("Entrez un nombre :");
    let somme = nombre.split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    alert(`La somme des chiffres est : ${somme}`);
}

// 8. Activité de Donald Trump
function activiteTrump() {
    alert("Donald Trump est connu pour l'immobilier et les affaires.");
}

// 9. Vérifier si un nombre est premier
function estPremier() {
    let nombre = parseInt(prompt("Entrez un nombre :"));
    if (nombre < 2) return alert("Ce n'est pas un nombre premier.");
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) return alert("Ce n'est pas un nombre premier.");
    }
    alert("C'est un nombre premier !");
}

// 10. Somme des nombres pairs jusqu'à N
function sommeNombresPairs() {
    let N = parseInt(prompt("Entrez un nombre :"));
    let somme = 0;
    for (let i = 0; i <= N; i += 2) somme += i;
    alert(`La somme des pairs jusqu'à ${N} est ${somme}`);
}

// 11. Compléter la série
function serie() {
    alert("La réponse est : 22 (car la suite suit le modèle +2, +3, +4, etc.)");
}

// 12. Convertir des Celsius en Fahrenheit
function celsiusToFahrenheit() {
    let celsius = parseFloat(prompt("Entrez la température en Celsius :"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C = ${fahrenheit}°F`);
}

// 13. Calculer l'aire d'un rectangle
function aireRectangle() {
    let largeur = parseFloat(prompt("Entrez la largeur :"));
    let hauteur = parseFloat(prompt("Entrez la hauteur :"));
    alert(`L'aire du rectangle est : ${largeur * hauteur}`);
}

// 14. Vérifier si un mot est en majuscules
function estMajuscule() {
    let mot = prompt("Entrez un mot :");
    alert(mot === mot.toUpperCase() ? "Le mot est en majuscules." : "Le mot n'est pas entièrement en majuscules.");
}

// 15. Vérifier si un utilisateur est majeur
function estMajeur() {
    let age = parseInt(prompt("Entrez votre âge :"));
    alert(age >= 18 ? "Vous êtes majeur." : "Vous êtes mineur.");
}
