function toggleCode(id) {
    let element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}



function moyenne() { 
    let age1 = parseInt(prompt("Entrez l'âge de la première personne :"));
    let age2 = parseInt(prompt("Entrez l'âge de la deuxième personne :"));
    let age3 = parseInt(prompt("Entrez l'âge de la troisième personne :"));
    let resultat = (age1 + age2 + age3) / 3;
    alert("La moyenne d'âge est : " + resultat);
}


function puissance() {
    let base = parseInt(prompt("Entrez la base :"));
    let exposant = parseInt(prompt("Entrez l'exposant :"));
    let resultat = Math.pow(base, exposant);
    alert("Le résultat est : " + resultat);
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
    let reponse = prompt("Nombre le plus grand").toLowerCase(); 
    if (reponse === "0,1") {
        alert("Bonne réponse");
    } else if (reponse === "0,01") {
        alert("Mauvaise réponse");
    } else {
        alert("Réponse invalide. Merci de répondre par '0,1' ou '0,01'");
    }
}


function pair() {
    let nombre = parseInt(prompt("Entrez un nombre:"));
    if (nombre % 2 === 0) {
        alert("Le nombre est pair.");
    } else {
        alert("Le nombre est impair.");
    }
}


function multipleDe6() {
    let nombre = parseInt(prompt("Entrez un nombre:"));
    if (nombre % 6 === 0) {
        alert("Le nombre est divisible par 6");
    } else {
        alert("Le nombre n'est pas divisible par 6");
    }
}


function sommeChiffres() {
    let nombre = prompt("Entrez un nombre :");
    let somme = nombre.split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    alert(`La somme des chiffres est : ${somme}`);
}


function activiteTrump() {
    let reponse = prompt("Quelle activité a fait la fortune de Donald Trump entre l'immobilier et le pétrole ? ").toLowerCase(); 
    if (reponse === "immobilier") {
        alert("Bonne réponse ");
    } else if (reponse === "") {
        alert("Mauvaise réponse ");
    }
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
    let reponse = prompt("Choisir la suite des chiffres").toLowerCase(); 
    if (reponse === "22") {
        alert("Bonne réponse");
    } else {
        alert("Mauvaise réponse");
    }
}


function celsiusToFahrenheit() {
    let celsius = parseFloat(prompt("Entrez la température en Celsius :"));
    let fahrenheit = celsius * 9 / 5 + 32;
    alert(celsius + "°C = " + fahrenheit + "°F");
}


function aireRectangle() {
    let longueur = parseFloat(prompt("Entrez la longueur du rectangle :"));
    let largeur = parseFloat(prompt("Entrez la largeur du rectangle :"));
    let aire = longueur * largeur;
    alert("L'aire du rectangle est : " + aire);
}


function estMajuscule() {
    let mot = prompt("Entrez un mot :");
    if (mot === mot.toUpperCase()) {
        alert("Le mot est en majuscules.");
    } else {
        alert("Le mot n'est pas en majuscules.");
    }
}


function estMajeur() {
    let age = parseInt(prompt("Entrez l'âge de l'utilisateur :"));
    if (age >= 18) {
        alert("L'utilisateur est majeur.");
    } else {
        alert("L'utilisateur n'est pas majeur.");
    }
}
