function login() {
    
    var login = document.getElementById("t1").value.trim();
    var password = document.getElementById("h1").value.trim();
    
    
    if (login === "" || password === "") {
        alert("Veuillez entrer un identifiant et un mot de passe.");
        return; 
    }

    
    if (login === "admin" && password === "admin") {
        window.location.href = "yes.html"; 
    } else {
        alert("Identification non reconnue");
        window.location.href = "non.html"; 
    }
}

