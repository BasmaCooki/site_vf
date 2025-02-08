function toggleCode(id) {
    let element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}



function moyenne() {
    let a = parseFloat(prompt("Entrez l'âge de la première personne :"));
    let b = parseFloat(prompt("Entrez l'âge de la deuxième personne :"));
    let c = parseFloat(prompt("Entrez l'âge de la troisième personne :"));
    alert(`La moyenne d'âge est : ${(a + b + c) / 3}`);
}


function puissance() {
    let base = parseFloat(prompt("Entrez un nombre :"));
    let exposant = parseInt(prompt("Entrez la puissance :"));
    alert(`Résultat : ${Math.pow(base, exposant)}`);
}


function president() {
    let reponse = prompt("Le Président fait-il bien son travail ? (oui/non)").toLowerCase(); 
    if (reponse === "oui") {
        alert("C'est ton choix, même si je doute de ton jugement.");
    } else if (reponse === "non") {
        alert("Bon choix !");
    } else {
        alert("Réponse invalide. Merci de répondre par 'oui' ou 'non'.");
    }
}


function plusGrand() {
    alert(`Le plus grand nombre est : ${Math.max(0.01, 0.1)}`);
}


function pair() {
    let nombre = parseInt(prompt("Entrez un nombre :"));
    alert(nombre % 2 === 0 ? "Le nombre est pair." : "Le nombre est impair.");
}


function multipleDe6() {
    let nombre = parseInt(prompt("Entrez un nombre :"));
    alert(nombre % 6 === 0 ? "Le nombre est un multiple de 6." : "Non.");
}


function sommeChiffres() {
    let nombre = prompt("Entrez un nombre :");
    let somme = nombre.split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    alert(`La somme des chiffres est : ${somme}`);
}


function activiteTrump() {
    alert("Donald Trump est connu pour l'immobilier et les affaires.");
}


function estPremier() {
    let nombre = parseInt(prompt("Entrez un nombre :"));
    if (nombre < 2) return alert("Ce n'est pas un nombre premier.");
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) return alert("Ce n'est pas un nombre premier.");
    }
    alert("C'est un nombre premier !");
}


function sommeNombresPairs() {
    let N = parseInt(prompt("Entrez un nombre :"));
    let somme = 0;
    for (let i = 0; i <= N; i += 2) somme += i;
    alert(`La somme des pairs jusqu'à ${N} est ${somme}`);
}


function serie() {
    alert("La réponse est : 22 (car la suite suit le modèle +2, +3, +4, etc.)");
}


function celsiusToFahrenheit() {
    let celsius = parseFloat(prompt("Entrez la température en Celsius :"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C = ${fahrenheit}°F`);
}


function aireRectangle() {
    let largeur = parseFloat(prompt("Entrez la largeur :"));
    let hauteur = parseFloat(prompt("Entrez la hauteur :"));
    alert(`L'aire du rectangle est : ${largeur * hauteur}`);
}


function estMajuscule() {
    let mot = prompt("Entrez un mot :");
    alert(mot === mot.toUpperCase() ? "Le mot est en majuscules." : "Le mot n'est pas entièrement en majuscules.");
}


function estMajeur() {
    let age = parseInt(prompt("Entrez votre âge :"));
    alert(age >= 18 ? "Vous êtes majeur." : "Vous êtes mineur.");
}
