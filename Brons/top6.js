// Opdracht 1: Array aanmaken met 6 songtitels
const hitlijst = ["Blinding Lights", "Shape of You", "As It Was", "Stay", "Bad Habits", "Flowers"];

// Opdracht 2: Eerste songtitel tonen (index 0)
console.log("De eerste songtitel is: " + hitlijst[0]);

// Opdracht 3: Derde songtitel tonen (index 2)
console.log("Het verzoeknummer is: " + hitlijst[2]);

// Opdracht 4: Alle nummers tonen met een foreach-loop
console.log("\n--- Volledige Hitlijst ---");
hitlijst.forEach(function(song, index) {
    console.log((index + 1) + ". " + song);
});