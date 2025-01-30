function ajouterLigne() {
    let table = document.querySelector("#facture tbody");
    let newRow = document.querySelector(".row").cloneNode(true);
    
    newRow.querySelectorAll("input").forEach(input => input.value = ""); 
    
    table.appendChild(newRow); 
}

function supprimerLigne() {
    let table = document.querySelector("#facture tbody");
    if (table.rows.length > 1) {
        table.deleteRow(table.rows.length - 1);
    }
}

function reinitialiser() {
    document.querySelectorAll("#facture tbody tr").forEach(row => {
        row.querySelector(".desc").value = "";
        row.querySelector(".qte").value = "1";
        row.querySelector(".prix").value = "0";
        row.querySelector(".total").value = "0.00";
    });
    document.getElementById("sousTotal").textContent = "0.00 €";
    document.getElementById("remise").textContent = "0.00 €";
    document.getElementById("totalApresRemise").textContent = "0.00 €";
    document.getElementById("taxeTotal").textContent = "0.00 €";
    document.getElementById("solde").textContent = "5.00 €";
    document.getElementById("totalFacture").textContent = "5.00 €";
}

function telechargerFacture() {
    window.print();
}


function remplir() {

    const tabDesc = ["portable", "bureau", "ram 8go", "clef usb 16go", "souris", "ecran 17 pouces"];

    const listeDesc = document.querySelectorAll(".desc");
    const listeQte = document.querySelectorAll(".qte");
    const listePrix = document.querySelectorAll(".prix");

    for (let i = 0; i < listeDesc.length; i++) {
        const randomDesc = tabDesc[Math.floor(Math.random() * tabDesc.length)];
        listeDesc[i].value = randomDesc;

        const randomQte = Math.floor(Math.random() * 10) + 1;
        listeQte[i].value = randomQte;

        const randomPrix = Math.floor(Math.random() * 100) + 1;
        listePrix[i].value = randomPrix;
    }

    console.log("Remplissage automatique terminé.");
}



function calculer() {
    let totalFacture = 0;
    document.querySelectorAll("#facture tbody tr").forEach(row => {
        let qte = parseFloat(row.querySelector(".qte").value) || 0;
        let prix = parseFloat(row.querySelector(".prix").value) || 0;
        let total = qte * prix;
        row.querySelector(".total").value = total.toFixed(2);
        totalFacture += total;
    });

    let remise = totalFacture * 0.1;
    let totalApresRemise = totalFacture - remise;
    let tauxImposition = 20;
    let taxeTotal = totalApresRemise * (tauxImposition / 100);
    let expedition = 5; 
    let solde = totalApresRemise + taxeTotal + expedition;

    document.getElementById("sousTotal").textContent = totalFacture.toFixed(2) + " €";
    document.getElementById("remise").textContent = remise.toFixed(2) + " €";
    document.getElementById("totalApresRemise").textContent = totalApresRemise.toFixed(2) + " €";
    document.getElementById("tauxImposition").textContent = tauxImposition + "%";
    document.getElementById("taxeTotal").textContent = taxeTotal.toFixed(2) + " €";
    document.getElementById("expedition").textContent = expedition.toFixed(2) + " €";
    document.getElementById("solde").textContent = solde.toFixed(2) + " €";
    document.getElementById("totalFacture").textContent = solde.toFixed(2) + " €";
}

function calculer() {
    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeTtl = document.getElementsByClassName("totalLigne");

    let sousTotal = 0;
    let remise = 0;
    let totalApresRemise = 0;
    let taxeTotale = 0;
    let solde = 0;

    const tauxRemise = 10; 
    const tauxImposition = 20; 
    const fraisExpedition = 5; 

    for (let i = 0; i < listePrix.length; i++) {
        const qte = parseFloat(listeQte[i].value) || 0;
        const prix = parseFloat(listePrix[i].value) || 0;
        const totalLigne = qte * prix;
        listeTtl[i].value = totalLigne.toFixed(2); 
        sousTotal += totalLigne; 
    }

    remise = sousTotal * (tauxRemise / 100);
    totalApresRemise = sousTotal - remise;
    taxeTotale = totalApresRemise * (tauxImposition / 100);
    solde = totalApresRemise + taxeTotale + fraisExpedition;

    document.getElementById("sousTotal").textContent = sousTotal.toFixed(2) + " €";
    document.getElementById("remise").textContent = remise.toFixed(2) + " €";
    document.getElementById("totalApresRemise").textContent = totalApresRemise.toFixed(2) + " €";
    document.getElementById("taxeTotal").textContent = taxeTotale.toFixed(2) + " €";
    document.getElementById("expedition").textContent = fraisExpedition.toFixed(2) + " €";
    document.getElementById("totalFacture").textContent = solde.toFixed(2) + " €";
    document.getElementById("tauxImposition").textContent = tauxImposition + "%";
    document.getElementById("tauxImposition").textContent = tauxImposition + "%";
}

 