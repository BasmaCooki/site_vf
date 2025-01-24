function moyenne() {
    let age1 = parseInt(prompt("Entrez l'âge de la première personne :"));
    let age2 = parseInt(prompt("Entrez l'âge de la deuxième personne :"));
    let age3 = parseInt(prompt("Entrez l'âge de la troisième personne :"));
    let resultat = (age1 + age2 + age3) / 3;
    alert("La moyenne d'âge est : " + resultat);
}

function demonstrationMoyenne() {
    alert("Démonstration : La formule pour calculer la moyenne est (age1 + age2 + age3) / 3.");
}

function puissance() {
    let base = parseInt(prompt("Entrez la base :"));
    let exposant = parseInt(prompt("Entrez l'exposant :"));
    let resultat = Math.pow(base, exposant);
    alert("Le résultat est : " + resultat);
}

function demonstrationPuissance() {
    alert("Démonstration : La puissance d'un nombre est calculée avec Math.pow(base, exposant).");
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

function demonstrationPresident() {
    alert("Les deux choix sont correct");
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

function demonstrationPlusGrand() {
    alert("0,01<0,1");
}

function pair() {
    let nombre = parseInt(prompt("Entrez un nombre:"));
    if (nombre % 2 === 0) {
        alert("Le nombre est pair.");
    } else {
        alert("Le nombre est impair.");
    }
}

function demonstrationPair() {
    alert("Démonstration : Un nombre est pair s'il est divisible par 2 .");
}


function multipleDe6() {
    let nombre = parseInt(prompt("Entrez un nombre:"));
    if (nombre % 6 === 0) {
        alert("Le nombre est divisible par 6");
    } else {
        alert("Le nombre n'est pas divisible par 6");
    }
}

function demonstrationMultipleDe6() {
    alert ("Il faut vérifier s’il est à la fois divisible par 2 et par 3 et un nombre est divisible par 6 si et seulement si il est divisible par 2 et par 3 simultanément.")

}


function estPremier() {
    var nombre = prompt("Entrez un nombre :"); 
    var estPremier = true;

    if (nombre < 2) {
        estPremier = false; 
    } else {
        for (var i = 2; i < nombre; i++) {
            if (nombre % i == 0) {
                estPremier = false; 
                break;
            }
        }
    }

    if (estPremier) {
        alert(nombre + " est un nombre premier.");
    } else {
        alert(nombre + " n'est pas un nombre premier.");
    }
}

function demonstrationEstPremier() {
    alert("Un nombre premier est un nombre divisible uniquement par 1 et lui-même. Exemple : 7 est premier car seul 1 et 7 le divisent.");
}


function sommeNombresPairs() {
    var n = prompt("Entrez un nombre :"); 
    var somme = 0;

    for (var i = 0; i <= n; i++) {
        if (i % 2 == 0) { 
            somme += i; 
        }
    }

    alert("La somme des nombres pairs jusqu'à " + n + " est : " + somme);
}

function demonstrationSommeNombresPairs() {
    alert("Pour trouver la somme des nombres pairs jusqu'à un nombre N, il faut ajouter tous les nombres divisibles par 2 jusqu'à ce nombre.");
}

function sommeChiffres() {
    var nombre = prompt("Entrez un nombre :"); 
    var somme = 0;

    for (var i = 0; i < nombre.length; i++) {
        somme += nombre[i] * 1; 
    }

    alert("La somme des chiffres est : " + somme);
}

function demonstrationSommeChiffres() {
    alert("La somme des chiffres d'un nombre consiste à additionner chaque chiffre. Par exemple, pour 123 : 1 + 2 + 3 = 6.");
}



function activiteTrump() {
    let reponse = prompt("Quelle activité a fait la fortune de Donald Trump entre l'immobilier et le pétrole ? ").toLowerCase(); 
    if (reponse === "immobilier") {
        alert("Bonne réponse ");
    } else if (reponse === "") {
        alert("Mauvaise réponse ");
    }
}

function demonstrationTrump() {
    alert("L’essentiel de sa fortune provient de son activité dans les réseaux sociaux et de l’immobilier.");

}


function serie() {
    alert("La série est : 8, 10, 13, 17, 22.");
}

function serie() {
    let reponse = prompt("Choisir la suite des chiffres").toLowerCase(); 
    if (reponse === "22") {
        alert("Bonne réponse");
    } else {
        alert("Mauvaise réponse");
    }
}

function demonstrationSerie() {
    alert("À chaque étape, la différence entre les 2 nombres augmente de 1 : 10-8=2 ; 13-10=3 ; 17-13=4, etc.");
}

function celsiusToFahrenheit() {
    let celsius = parseFloat(prompt("Entrez la température en Celsius :"));
    let fahrenheit = celsius * 9 / 5 + 32;
    alert(celsius + "°C = " + fahrenheit + "°F");
}

function demonstrationCelsiusToFahrenheit() {
    alert("Démonstration: (°C * 9/5) + 32");
}

function aireRectangle() {
    let longueur = parseFloat(prompt("Entrez la longueur du rectangle :"));
    let largeur = parseFloat(prompt("Entrez la largeur du rectangle :"));
    let aire = longueur * largeur;
    alert("L'aire du rectangle est : " + aire);
}

function demonstrationAireRectangle() {
    alert("Démonstration: longueur * largeur");
}

function estMajuscule() {
    let mot = prompt("Entrez un mot :");
    if (mot === mot.toUpperCase()) {
        alert("Le mot est en majuscules.");
    } else {
        alert("Le mot n'est pas en majuscules.");
    }
}

function demonstrationEstMajuscule() {
    alert("Démonstration: mot === mot.toUpperCase()");
}

function estMajeur() {
    let age = parseInt(prompt("Entrez l'âge de l'utilisateur :"));
    if (age >= 18) {
        alert("L'utilisateur est majeur.");
    } else {
        alert("L'utilisateur n'est pas majeur.");
    }
}

function demonstrationEstMajeur() {
    alert("Démonstration: age >= 18");
}
