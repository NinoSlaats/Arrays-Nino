// ==========================================
// Opdracht 1: Data omschrijven naar een array met objecten
// ==========================================
// We maken een array aan waarin elk 'item' een object {} is met alle gegevens.
const database = [
    {
        kaartnummer: 163821,
        naam: "Leo Daams",
        saldo: 34,
        woonplaats: "Den Bosch"
    },
    {
        kaartnummer: 145032,
        naam: "Nicole Hops",
        saldo: 18,
        woonplaats: "Maastricht"
    }
];


// ==========================================
// Opdracht 2: Functionaliteiten bouwen
// ==========================================

// 2a. De lijst met passagiers kunnen oproepen
function toonPassagiers() {
    console.log("\n--- Actuele Passagierslijst Bussie ---");
    database.forEach(function(p) {
        console.log(`[Kaart: ${p.kaartnummer}] ${p.naam} uit ${p.woonplaats} - Saldo: €${p.saldo}`);
    });
}

// 2b. Nieuwe passagiers worden toegevoegd
function voegPassagierToe(kaartnummer, naam, saldo, woonplaats) {
    const nieuwePassagier = {
        kaartnummer: kaartnummer,
        naam: naam,
        saldo: saldo,
        woonplaats: woonplaats
    };
    database.push(nieuwePassagier);
    console.log(`+ ${naam} is toegevoegd aan het systeem.`);
}

// 2c. Een passagier in- en uitchecken (saldo verandert)
// We hebben de ritprijs flexibel gemaakt. Bij inchecken trekken we geld af (-), bij uitchecken kan er eventueel geld bij (+) of af.
function scanKaart(kaartnummer, bedrag, actie) {
    // We zoeken de juiste passagier op basis van het kaartnummer
    const reiziger = database.find(function(p) {
        return p.kaartnummer === kaartnummer;
    });

    // Als de reiziger bestaat, passen we het saldo aan
    if (reiziger) {
        if (actie === "inchecken") {
            reiziger.saldo -= bedrag; // Saldo gaat omlaag
            console.log(`-> ${reiziger.naam} heeft ingecheckt. Ritprijs: €${bedrag}. Nieuw saldo: €${reiziger.saldo}`);
        } else if (actie === "uitchecken") {
            reiziger.saldo += bedrag; // Bijvoorbeeld correctie, of gebruik een min-bedrag voor kosten
            console.log(`<- ${reiziger.naam} heeft uitgecheckt. Aanpassing: €${bedrag}. Nieuw saldo: €${reiziger.saldo}`);
        }
    } else {
        console.log(`[FOUT] Kaartnummer ${kaartnummer} is onbekend.`);
    }
}

// 2d. Een passagier de OV-kaart opzeggen (verwijderen uit het systeem)
function zegKaartOp(kaartnummer) {
    // We zoeken de index (positie) van de reiziger in de array
    const index = database.findIndex(function(p) {
        return p.kaartnummer === kaartnummer;
    });

    // Als de index is gevonden (is niet -1), dan verwijderen we hem met .splice()
    if (index !== -1) {
        const verwijderdeReiziger = database.splice(index, 1);
        console.log(`x De kaart van ${verwijderdeReiziger[0].naam} is succesvol opgezegd.`);
    } else {
        console.log(`[FOUT] Kan kaart ${kaartnummer} niet verwijderen: nummer bestaat niet.`);
    }
}


// ==========================================
// TESTEN VAN JOUW APPLICATIE
// ==========================================
// Nu gaan we alle functies hierboven uittesten om te kijken of ze werken!

// 1. Toon de begin situatie
toonPassagiers();

// 2. Test: Nieuwe passagier toevoegen
console.log("\n--- Actie: Passagier Toevoegen ---");
voegPassagierToe(199245, "Samir El Amin", 25, "Eindhoven");

// 3. Test: Inchecken (Leo Daams reist voor €4)
console.log("\n--- Actie: In- en Uitchecken ---");
scanKaart(163821, 4, "inchecken");

// 4. Test: Kaart opzeggen (Nicole Hops stopt ermee)
console.log("\n--- Actie: Kaart Opzeggen ---");
zegKaartOp(145032);

// 5. Toon de eind situatie om te controleren of alles klopt
toonPassagiers();