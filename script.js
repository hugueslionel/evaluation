document.addEventListener("DOMContentLoaded", () => {
    const eleveInput = document.getElementById("eleveInput");
    const ajouterBtn = document.getElementById("ajouterBtn");
    const listeEleves = document.getElementById("listeEleves");

    // Charger les élèves depuis le localStorage
    const loadEleves = () => {
        const eleves = JSON.parse(localStorage.getItem("eleves")) || [];
        listeEleves.innerHTML = "";
        eleves.forEach((eleve, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <a href="eleve.html?nom=${encodeURIComponent(eleve)}">${eleve}</a>
                <button onclick="supprimerEleve(${index})">Supprimer</button>
            `;
            listeEleves.appendChild(li);
        });
    };

    // Ajouter un élève
    const ajouterEleve = () => {
        const nom = eleveInput.value.trim();
        if (nom) {
            const eleves = JSON.parse(localStorage.getItem("eleves")) || [];
            eleves.push(nom);
            localStorage.setItem("eleves", JSON.stringify(eleves));
            eleveInput.value = "";
            loadEleves();
        }
    };

    // Supprimer un élève
    window.supprimerEleve = (index) => {
        const eleves = JSON.parse(localStorage.getItem("eleves")) || [];
        eleves.splice(index, 1);
        localStorage.setItem("eleves", JSON.stringify(eleves));
        loadEleves();
    };

    ajouterBtn.addEventListener("click", ajouterEleve);
    loadEleves();
});
