function calculer(){
    var prix1 = document.getElementById("prix1").value;
    var prix2 = document.getElementById("prix2").value;
    var prix3 = document.getElementById("prix3").value;

    var quantite1 = document.getElementById("quantite1").value;
    var quantite2 = document.getElementById("quantite2").value;
    var quantite3 = document.getElementById("quantite3").value;

    var resultat1 = Number(prix1)*Number(quantite1);
    var resultat2 = Number(prix2)*Number(quantite2);
    var resultat3 = Number(prix3)*Number(quantite3);

    document.getElementById("resultat1").value = resultat1;
    document.getElementById("resultat2").value = resultat2;
    document.getElementById("resultat3").value = resultat3;

    var total = Number(resultat1)+Number(resultat2)+Number(resultat3)
    document.getElementById("total").value = total;
}