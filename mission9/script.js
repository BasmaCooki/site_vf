function testqcm() {
    var score = 0;

    if (document.getElementById("q1r3").checked) {
        score++;
    }
    
    alert("Votre score est de : " + score + "/10");
}

function ouvrirCorrige() {
    window.open('corrige.html', '_blank', 'width=600,height=400');
}
