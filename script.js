document.addEventListener("DOMContentLoaded", () => {
    const eleveInput = document.getElementById("eleveInput");
    const ajouterBtn = document.getElementById("ajouterBtn");
    const listeEleves = document.getElementById("listeEleves");

    // Fonction pour charger les élèves depuis le localStorage
    const loadEleves = () => {
        const eleves = JSON.parse(localStorage.getItem("eleves")) || [];
        listeEleves.innerHTML = ""; // Réinitialise la liste
        eleves.forEach((eleve, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <a href="eleve.html?nom=${encodeURIComponent(eleve)}">${eleve}</a>
                <button onclick="supprimerEleve(${index})">Supprimer</button>
            `;
            listeEleves.appendChild(li);
        });
    };

    // Fonction pour ajouter un élève
    const ajouterEleve = () => {
        const nom = eleveInput.value.trim(); // Récupère la valeur
        if (nom) {
            const eleves = JSON.parse(localStorage.getItem("eleves")) || [];
            eleves.push(nom); // Ajoute le nom à la liste
            localStorage.setItem("eleves", JSON.stringify(eleves)); // Sauvegarde dans le localStorage
            eleveInput.value = ""; // Réinitialise l'input
            loadEleves(); // Recharge la liste
        }
    };

    // Fonction pour supprimer un élève
    window.supprimerEleve = (index) => {
        const eleves = JSON.parse(localStorage.getItem("eleves")) || [];
        eleves.splice(index, 1); // Supprime l'élève à l'index donné
        localStorage.setItem("eleves", JSON.stringify(eleves)); // Met à jour le localStorage
        loadEleves(); // Recharge la liste
    };

    // Associe la fonction au bouton "Ajouter"
    ajouterBtn.addEventListener("click", ajouterEleve);

    // Charge la liste des élèves au démarrage
    loadEleves();
});
