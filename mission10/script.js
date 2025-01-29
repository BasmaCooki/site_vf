function ajouterLigne() {
    let table = document.getElementById("facture").getElementsByTagName('tbody')[0];
    let lastRow = table.querySelector(".lastrow");
    let newRow = lastRow.cloneNode(true);
    newRow.querySelectorAll("input").forEach(input => input.value = "");
    table.insertBefore(newRow, lastRow);
}

function calculer() {
    let totalFacture = 0;
    document.querySelectorAll(".row").forEach(ligne => {
        let qte = parseInt(ligne.querySelector(".qte").value) || 0;
        let prix = parseFloat(ligne.querySelector(".prix").value) || 0;
        let total = qte * prix;
        ligne.querySelector(".total").value = total.toFixed(2);
        totalFacture += total;
    });
    document.getElementById("totalFacture").textContent = totalFacture.toFixed(2);
}