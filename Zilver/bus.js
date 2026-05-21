// ==========================================
// PROGRAMMEERTIP: Herbruikbare functie
// ==========================================
// Deze functie print de hele lijst netjes onder elkaar, zodat we niet steeds 
// dezelfde for-loop hoeven te typen.
function toonPassagiers(lijst) {
    for (let i = 0; i < lijst.length; i++) {
        console.log((i + 1) + ". " + lijst[i]);
    }
}


// ==========================================
// Opdracht 1: 10 mensen in de bus + for-loop
// ==========================================
console.log("--- Opdracht 1: Start van de rit (10 passagiers) ---");
const passagiers = ["Anouk", "Bram", "Chris", "Daan", "Emma", "Fleur", "Gijs", "Hanna", "Ian", "Julia"];

// We gebruiken hier onze handige functie die de for-loop bevat
toonPassagiers(passagiers);


// ==========================================
// Opdracht 2: Iemand stapt in met .push()
// ==========================================
console.log("\n--- Opdracht 2: Er stapt iemand bij (Kevin) ---");
passagiers.push("Kevin"); // Voegt 'Kevin' toe aan het einde van de array

// De hele lijst weer tonen
toonPassagiers(passagiers);


// ==========================================
// Opdracht 3: De vijfde persoon stapt uit
// ==========================================
console.log("\n--- Opdracht 3: De 5e persoon stapt uit ---");
// Let op: De 5e persoon staat op index 4 (want we beginnen bij 0 te tellen).
// We gebruiken .splice(index, aantal_te_verwijderen)
passagiers.splice(4, 1); 

// De lijst na het uitstappen tonen
toonPassagiers(passagiers);


// ==========================================
// Opdracht 4: De Barrel Roll (Shuffelen!)
// ==========================================
console.log("\n--- Opdracht 4: Oeps, een BARREL ROLL! Iedereen zit ergens anders ---");

// Om een array te shuffelen (husselen) gebruiken we een slim trucje met .sort()
// Math.random() - 0.5 zorgt ervoor dat de volgorde willekeurig wordt omgegooid.
passagiers.sort(function() {
    return Math.random() - 0.5;
});

// De nieuwe willekeurige volgorde tonen
toonPassagiers(passagiers);


// ==========================================
// Opdracht 5: Eindhalte en de while-loop
// ==========================================
console.log("\n--- Opdracht 5: Eindhalte (Iedereen stapt één voor één uit) ---");

// Zolang de lengte van de array groter is dan 0, blijft de loop draaien
while (passagiers.length > 0) {
    // .shift() haalt steeds de EERSTE persoon uit de array (de voorste in de rij stapt uit)
    let uitstapper = passagiers.shift(); 
    
    console.log(uitstapper + " stapt uit. Er zitten nu nog " + passagiers.length + " mensen in de bus.");
}