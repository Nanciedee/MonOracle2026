/**
 * MOTEUR DE L'ORACLE VIBRATOIRE 2026
 * Gère la logique astronomique, les correspondances et le tirage.
 */

const OracleVibratoire = {
    // 1. BASE DE DONNÉES DES CORRESPONDANCES
    data: {
        chakras: [
            { id: 1, nom: "Racine", freq: "396Hz", couleurs: "Rouge & Noir", img: "img/racine.jpg" },
            { id: 2, nom: "Sacré", freq: "417Hz", couleurs: "Orange & Corail", img: "img/sacre.jpg" },
            { id: 3, nom: "Plexus Solaire", freq: "528Hz", couleurs: "Jaune & Or", img: "img/plexus.jpg" },
            { id: 4, nom: "Cœur", freq: "639Hz", couleurs: "Vert & Rose", img: "img/coeur.jpg" },
            { id: 5, nom: "Gorge", freq: "741Hz", couleurs: "Bleu & Argent", img: "img/gorge.jpg" },
            { id: 6, nom: "Troisième Œil", freq: "852Hz", couleurs: "Indigo", img: "img/3oeil.jpg" },
            { id: 7, nom: "Couronne", freq: "963Hz", couleurs: "Violet & Blanc", img: "img/couronne.jpg" }
        ],
        archanges: {
            "Michaël": { freq: "528Hz", pierres: ["Lapis-lazuli", "Sodalite"], img: "img/michael.jpg" },
            "Raphaël": { freq: "639Hz", pierres: ["Malachite", "Émeraude"], img: "img/raphael.jpg" },
            "Gabriel": { freq: "741Hz", pierres: ["Pierre de lune", "Citrine"], img: "img/gabriel.jpg" },
            "Uriel": { freq: "852Hz", pierres: ["Ambre", "Pyrite"], img: "img/uriel.jpg" }
            // ... Ajoutez les autres selon votre liste
        },
        archetypes: [
            { nom: "Le Visionnaire", element: "Air", msg: "Je vois au-delà du présent.", img: "img/visionnaire.jpg" },
            { nom: "Le Guérisseur", element: "Eau", msg: "Mon cœur connaît la voie.", img: "img/guerisseur.jpg" },
            { nom: "L’Initiateur", element: "Feu", msg: "Je suis le feu du commencement.", img: "img/initiateur.jpg" },
            { nom: "La Gardienne", element: "Terre", msg: "Mon être est refuge.", img: "img/gardienne.jpg" }
        ],
        maitresses: {
            "Terre": { nom: "Alignement & Identité", img: "img/terre.jpg", chakras: [1, 4] },
            "Feu": { nom: "Courage & Affirmation", img: "img/feu.jpg", chakras: [3, 1] },
            "Air": { nom: "Indépendance & Limites", img: "img/air.jpg", chakras: [5, 7] },
            "Eau": { nom: "Activation du Destin", img: "img/eau.jpg", chakras: [2, 4] }
        }
    },
    const CartesComplementaires = {
    "Amour": {
        qualite: "Amour Inconditionnel",
        img: "img/Vibratoire Amour.png",
        frequence: "639 Hz",
        pierre: "Quartz rose, Rhodonite",
        astre: "Vénus",
        rituel: "Scellement du cœur et harmonie relationnelle."
    },
    "Guérison": {
        qualite: "Régénération Sacrée",
        img: "img/Vibratoire Guérison.png",
        frequence: "528 Hz",
        pierre: "Malachite, Émeraude",
        astre: "Soleil / Mercure",
        rituel: "Restauration du corps temple et paix cellulaire."
    },
    "Guidance": {
        qualite: "Intuition & Vision",
        img: "img/Vibratoire Guide.png",
        frequence: "741 Hz",
        pierre: "Pierre de lune, Labradorite",
        astre: "Lune / Neptune",
        rituel: "Ouverture des canaux de communication céleste."
    },
    "Protection": {
        qualite: "Force & Souveraineté",
        img: "img/Vibratoire Protection.png",
        frequence: "528 Hz / 417 Hz",
        pierre: "Lapis-lazuli, Tourmaline noire",
        astre: "Mars / Soleil",
        rituel: "Bouclier de lumière et transmutation des ombres."
    },
    "Sagesse": {
        qualite: "Connaissance Akashique",
        img: "img/Vibratoire Sagesse.png",
        frequence: "852 Hz / 963 Hz",
        pierre: "Améthyste, Cristal de roche",
        astre: "Saturne / Uranus",
        rituel: "Accès aux mémoires de l'âme et clarté divine."
    }
};

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
