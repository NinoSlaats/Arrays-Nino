// Geluidseffect inladen vanuit de HTML
const beepSound = document.getElementById("beep-sound");
const logScherm = document.getElementById("log");

// De database met passagiers, inclusief een link naar een pasfoto
const database = [
    {
        kaartnummer: 163821,
        naam: "Leo Daams",
        saldo: 34.00,
        woonplaats: "Den Bosch",
        foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" // Foto van een man
    },
    {
        kaartnummer: 145032,
        naam: "Nicole Hops",
        saldo: 18.50,
        woonplaats: "Maastricht",
        foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" // Foto van een vrouw
    },
    {
        kaartnummer: 199245,
        naam: "Samir El Amin",
        saldo: 25.00,
        woonplaats: "Eindhoven",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" // Foto van een man
    }
];

// Functie om een bericht op het scherm te loggen
function logBericht(tekst) {
    logScherm.innerHTML += tekst + "<br>";
    logScherm.scrollTop = logScherm.scrollHeight; // Scroll automatisch mee naar beneden
}

// Functie die de poortjes aanstuurt: geluid afspelen + saldo aanpassen
function checkInUit(kaartnummer) {
    // Zoek de reiziger op
    const reiziger = database.find(p => p.kaartnummer === kaartnummer);

    if (reiziger) {
        // Platina ijsbreker: Speel het incheck-geluidje af!
        // We zetten de tijd op 0 zodat je snel achter elkaar kunt klikken
        beepSound.currentTime = 0; 
        beepSound.play().catch(e => console.log("Klik eerst op de pagina om geluid toe te staan."));

        // Ritprijs is vastgesteld op 4 euro
        const ritprijs = 4.00;
        reiziger.saldo -= ritprijs;

        logBericht(`🔊 BIEP! [Kaart ${reiziger.kaartnummer}] ${reiziger.naam} checkt in. -€${ritprijs.toFixed(2)}. Nieuw saldo: €${reiziger.saldo.toFixed(2)}`);
        
        // Ververs de kaartjes op het scherm zodat het nieuwe saldo meteen zichtbaar is
        renderScherm();
    }
}

// Functie om de reizigers visueel op het HTML scherm te tekenen
function renderScherm() {
    const container = document.getElementById("passagiers-lijst");
    container.innerHTML = ""; // Maak het scherm eerst leeg

    database.forEach(p => {
        // Bouw een HTML kaartje voor elke passagier met hun eigen afbeelding
        container.innerHTML += `
            <div class="card">
                <img src="${p.foto}" alt="${p.naam}" class="avatar">
                <h3>${p.naam}</h3>
                <p><strong>Stad:</strong> ${p.woonplaats}</p>
                <p><strong>Saldo:</strong> €${p.saldo.toFixed(2)}</p>
                <button class="btn" onclick="checkInUit(${p.kaartnummer})">Scan OV-Kaart</button>
            </div>
        `;
    });
}

// Start de applicatie zodra de pagina laadt
renderScherm();