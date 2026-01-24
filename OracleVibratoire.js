/**
 * MOTEUR DE L'ORACLE VIBRATOIRE 2026
 * Gère la logique astronomique, les correspondances et le tirage.
 */

const OracleVibratoire = {
    // 1. BASE DE DONNÉES DES CORRESPONDANCES
    data: {
        chakras: [
    { id: 1, nom: "Racine", freq: "396Hz", msg: "Libération de la peur", symbole: "Lotus 4 pétales" },
    { id: 2, nom: "Sacré", freq: "417Hz", msg: "Fluidité et créativité", symbole: "Lotus 6 pétales" },
    { id: 3, nom: "Plexus Solaire", freq: "528Hz", msg: "Affirmation de soi", symbole: "Triangle inversé" },
    { id: 4, nom: "Cœur", freq: "639Hz", msg: "Amour inconditionnel", symbole: "Étoile à 6 branches" },
    { id: 5, nom: "Gorge", freq: "741Hz", msg: "Authenticité", symbole: "Cercle et triangle" },
    { id: 6, nom: "Troisième Œil", freq: "852Hz", msg: "Perception intuitive", symbole: "Œil mystique" },
    { id: 7, nom: "Couronne", freq: "963Hz", msg: "Unité cosmique", symbole: "Lotus 1000 pétales" }
},
        archanges: {
    "Michaël": { 
        nom_hebreu: "מִיכָאֵל",
        signification: "Qui est comme Dieu ?",
        freq: "528Hz", 
        pierres: ["Lapis-lazuli", "Sodalite", "Tourmaline noire"], 
        astres: ["Soleil", "Mars"],
        symboles: ["Épée flamboyante", "Bouclier solaire", "Balance cosmique"],
        role: "Protecteur des justes, chef des armées célestes",
        img: "img/archanges/michael.jpg" // Image d'archange, pas la carte vibratoire
    },
    "Raphaël": { 
        nom_hebreu: "רְפָאֵל",
        signification: "Dieu guérit",
        freq: "639Hz", 
        pierres: ["Malachite", "Émeraude", "Fluorite verte"], 
        astres: ["Mercure", "Vénus"],
        symboles: ["Bâton de soin", "Temple de jade", "Tatouages floraux"],
        role: "Guérisseur divin, protecteur des voyageurs",
        img: "img/archanges/raphael.jpg" 
    },
    "Gabriel": { 
        nom_hebreu: "גַּבְרִיאֵל",
        signification: "Force de Dieu",
        freq: "741Hz", 
        pierres: ["Pierre de lune", "Citrine", "Cornaline"], 
        astres: ["Lune", "Neptune"],
        symboles: ["Harpe lunaire", "Perles marines", "Robe nacrée"],
        role: "Messager divin, porteur de révélations",
        img: "img/archanges/gabriel.jpg" 
    },
    "Uriel": { 
        nom_hebreu: "אוּרִיאֵל",
        signification: "Lumière de Dieu",
        freq: "852Hz", 
        pierres: ["Ambre", "Pyrite", "Hématite"], 
        astres: ["Uranus", "Soleil"],
        symboles: ["Sphère incandescente", "Forge céleste", "Glyphes alchimiques"],
        role: "Porteur de sagesse divine, juge cosmique",
        img: "img/archanges/uriel.jpg" 
    },
    "Chamuel": { 
        nom: "Chamuel (Camael)",
        signification: "Celui qui voit Dieu",
        freq: "639Hz", 
        pierres: ["Quartz rose", "Rhodonite", "Chrysoprase"], 
        astres: ["Vénus", "Lune"],
        symboles: ["Cœur rayonnant", "Colombe", "Vortex rose"],
        role: "Archange de l'amour inconditionnel",
        img: "img/archanges/chamuel.jpg"
    },
    "Jophiel": { 
        nom: "Jophiel",
        signification: "Beauté de Dieu",
        freq: "963Hz", 
        pierres: ["Topaze dorée", "Rubellite", "Kunzite"], 
        astres: ["Jupiter", "Soleil"],
        symboles: ["Plume dorée", "Fleur cosmique"],
        role: "Archange de la beauté et de l'inspiration",
        img: "img/archanges/jophiel.jpg"
    },
    "Zadkiel": { 
        nom: "Zadkiel",
        signification: "Justice de Dieu",
        freq: "432Hz", 
        pierres: ["Améthyste", "Sugilite"], 
        astres: ["Saturne", "Pluton"],
        symboles: ["Flamme violette", "Livre des âmes"],
        role: "Archange de la transmutation et du pardon",
        img: "img/archanges/zadkiel.jpg"
    },
    "Haniel": { 
        nom: "Haniel",
        signification: "Grâce de Dieu",
        freq: "417Hz", 
        pierres: ["Pierre de lune", "Sélénite"], 
        astres: ["Lune", "Vénus"],
        symboles: ["Croissant lunaire", "Éventail nacré"],
        role: "Archange de la féminité sacrée",
        img: "img/archanges/haniel.jpg"
    },
    "Raziel": { 
        nom: "Raziel",
        signification: "Secret de Dieu",
        freq: "888Hz", 
        pierres: ["Cristal de roche", "Moldavite"], 
        astres: ["Uranus", "Mercure"],
        symboles: ["Livre scellé", "Spirale dorée"],
        role: "Gardien des mystères",
        img: "img/archanges/raziel.jpg"
    },
    "Azraël": { 
        nom: "Azraël",
        signification: "Celui que Dieu aide",
        freq: "396Hz", 
        pierres: ["Calcite crème", "Rose des sables"], 
        astres: ["Saturne", "Pluton"],
        symboles: ["Sablier", "Voile"],
        role: "Guide des âmes",
        img: "img/archanges/azrael.jpg"
    },
    "Sandalphon": { 
        nom: "Sandalphon",
        signification: "Co-créateur",
        freq: "285Hz", 
        pierres: ["Turquoise", "Rhodonite"], 
        astres: ["Terre", "Neptune"],
        symboles: ["Tambour cosmique", "Racines lumineuses"],
        role: "Archange de l'ancrage",
        img: "img/archanges/sandalphon.jpg"
    },
    "Métatron": { 
        nom: "Métatron",
        signification: "Trône de Dieu",
        freq: "999Hz", 
        pierres: ["Tourmaline melon d’eau", "Platine"], 
        astres: ["Pléiades", "Sirius"],
        symboles: ["Cube de Métatron", "Vortex arc-en-ciel"],
        role: "Maître de l'ascension",
        img: "img/archanges/metatron.jpg"
    }
}
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
    cartesComplementaires: {
    "Porte_Amour": {
        titre: "Amour",
        img: "img/Vibratoire Amour.png",
        usage: "Scellement énergétique / Méditation de l'âme",
        frequence: "639Hz",
        astre: "Vénus"
    },
    "Porte_Guerison": {
        titre: "Guérison",
        img: "img/Vibratoire Guérison.png",
        usage: "Régénération / Soin vibratoire",
        frequence: "528Hz",
        astre: "Mercure"
    },
    "Porte_Guide": {
        titre: "Guidance",
        img: "img/Vibratoire Guide.png",
        usage: "Intuition / Message céleste",
        frequence: "741Hz",
        astre: "Lune"
    },
    "Porte_Protection": {
        titre: "Protection",
        img: "img/Vibratoire Protection.png",
        usage: "Bouclier / Force souveraine",
        frequence: "417Hz",
        astre: "Mars"
    },
    "Porte_Sagesse": {
        titre: "Sagesse",
        img: "img/Vibratoire Sagesse.png",
        usage: "Connaissance / Clarté divine",
        frequence: "852Hz",
        astre: "Jupiter"
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
