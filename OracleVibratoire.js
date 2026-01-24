/**
 * MOTEUR DE L'ORACLE VIBRATOIRE 2026
 * Gère la logique astronomique, les correspondances et le tirage.
 */

const OracleVibratoire = {
    // 1. BASE DE DONNÉES DES CORRESPONDANCES
    data: {
        chakras: [
            { id: 1, nom: "Racine", freq: "396Hz", couleurs: "Rouge & Noir", img: "img/chakras/racine.jpg" },
            { id: 2, nom: "Sacré", freq: "417Hz", couleurs: "Orange & Corail", img: "img/chakras/sacre.jpg" },
            { id: 3, nom: "Plexus Solaire", freq: "528Hz", couleurs: "Jaune & Or", img: "img/chakras/plexus.jpg" },
            { id: 4, nom: "Cœur", freq: "639Hz", couleurs: "Vert & Rose", img: "img/chakras/coeur.jpg" },
            { id: 5, nom: "Gorge", freq: "741Hz", couleurs: "Bleu & Argent", img: "img/chakras/gorge.jpg" },
            { id: 6, nom: "Troisième Œil", freq: "852Hz", couleurs: "Indigo", img: "img/chakras/3oeil.jpg" },
            { id: 7, nom: "Couronne", freq: "963Hz", couleurs: "Violet & Blanc", img: "img/chakras/couronne.jpg" }
        ],
        archanges: {
            "Michaël": { freq: "528Hz", pierres: ["Lapis-lazuli", "Sodalite"], img: "img/archanges/michael.jpg" },
            "Raphaël": { freq: "639Hz", pierres: ["Malachite", "Émeraude"], img: "img/archanges/raphael.jpg" },
            "Gabriel": { freq: "741Hz", pierres: ["Pierre de lune", "Citrine"], img: "img/archanges/gabriel.jpg" },
            "Uriel": { freq: "852Hz", pierres: ["Ambre", "Pyrite"], img: "img/archanges/uriel.jpg" }
            // ... Ajoutez les autres selon votre liste
        },
        archetypes: [
            { nom: "Le Visionnaire", element: "Air", msg: "Je vois au-delà du présent.", img: "img/archetypes/visionnaire.jpg" },
            { nom: "Le Guérisseur", element: "Eau", msg: "Mon cœur connaît la voie.", img: "img/archetypes/guerisseur.jpg" },
            { nom: "L’Initiateur", element: "Feu", msg: "Je suis le feu du commencement.", img: "img/archetypes/initiateur.jpg" },
            { nom: "La Gardienne", element: "Terre", msg: "Mon être est refuge.", img: "img/archetypes/gardienne.jpg" }
        ],
        maitresses: {
            "Terre": { nom: "Alignement & Identité", img: "img/maitresses/terre.jpg", chakras: [1, 4] },
            "Feu": { nom: "Courage & Affirmation", img: "img/maitresses/feu.jpg", chakras: [3, 1] },
            "Air": { nom: "Indépendance & Limites", img: "img/maitresses/air.jpg", chakras: [5, 7] },
            "Eau": { nom: "Activation du Destin", img: "img/maitresses/eau.jpg", chakras: [2, 4] }
        }
    },

    // 2. LOGIQUE ASTRONOMIQUE SIMPLIFIÉE (Exemple pour 2026)
    getMeteoDuJour: function(date) {
        // Note: Dans une version production, utilisez une bibliothèque comme 'astronomy-engine' 
        // ou une API d'éphémérides pour la précision au degré près.
        
        // Simulation pour le test :
        return {
            phase: "Premier Quartier",
            signe: "Bélier",
            element: "Feu",
            vibration: "Active"
        };
    },

    // 3. LOGIQUE DE TIRAGE
    tirerCarte: function() {
        const meteo = this.getMeteoDuJour(new Date());
        
        // Sélection aléatoire dans chaque catégorie
        const archangeNom = Object.keys(this.data.archanges)[Math.floor(Math.random() * Object.keys(this.data.archanges).length)];
        const archange = this.data.archanges[archangeNom];
        
        const maitresse = this.data.maitresses[meteo.element]; // On tire la maîtresse liée à l'élément du jour
        
        const archetype = this.data.archetypes[Math.floor(Math.random() * this.data.archetypes.length)];
        
        const chakra = this.data.chakras[Math.floor(Math.random() * this.data.chakras.length)];

        return {
            meteo,
            tirage: {
                maitresse: { nom: maitresse.nom, img: maitresse.img },
                archange: { nom: archangeNom, info: archange },
                archetype: archetype,
                chakra: chakra
            }
        };
    },

    // 4. RENDU HTML (Injection dans votre interface)
    afficherTirage: function() {
        const resultat = this.tirerCarte();
        const display = document.getElementById('oracle-display');

        display.innerHTML = `
            <div class="meteo-header">
                <h2>Lune en ${resultat.meteo.signe} (${resultat.meteo.phase})</h2>
                <p>Élément dominant : ${resultat.meteo.element}</p>
            </div>
            
            <div class="cards-container">
                <div class="card">
                    <img src="${resultat.tirage.maitresse.img}" alt="Carte Maîtresse">
                    <h3>${resultat.tirage.maitresse.nom}</h3>
                </div>
                <div class="card">
                    <img src="${resultat.tirage.archange.info.img}" alt="Archange">
                    <h3>Archange ${resultat.tirage.archange.nom}</h3>
                    <p>Fréquence : ${resultat.tirage.archange.info.freq}</p>
                </div>
                <div class="card">
                    <img src="${resultat.tirage.archetype.img}" alt="Archétype">
                    <h3>${resultat.tirage.archetype.nom}</h3>
                    <p>"${resultat.tirage.archetype.msg}"</p>
                </div>
                <div class="card">
                    <img src="${resultat.tirage.chakra.img}" alt="Chakra">
                    <h3>Chakra ${resultat.tirage.chakra.nom}</h3>
                    <p>Vibration : ${resultat.tirage.chakra.freq}</p>
                </div>
            </div>
        `;
    }
};

// Initialisation au clic sur un bouton
// document.getElementById('btn-tirage').addEventListener('click', () => OracleVibratoire.afficherTirage());
