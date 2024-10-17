function test_age() {
    let age = prompt ("Quelle est votre âge ?");
    if (age < 18){
        Document.write("Vous êtes mineur");
        document.body.style.backgroundColor="red";
    }
    else {
        document.write("Vous êtes majeur");
        document.body.style.backgroundColor="green";
    }
}
