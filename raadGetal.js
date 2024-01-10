//de gebruiker mag proberen om het 'te raden' getal te raden.
//Het te raden getal mag gewoon een vast getal zijn dat in de code staat (hardcoded)

//Een regel code is gegeven, hoe nu verder?
const words = [
    "java",
    "disc",
    "joch",
    "kiwi",
    "rock",
    "tics",
];

let isWordGuessed = false;
let theWordIndex = Math.floor(Math.random() * words.length);
let theWord = words[theWordIndex];

while (!isWordGuessed) {
    let wordGuessed = prompt("Raad het woord keuze uit java,disc,joch,kiwi,rock,tics:");
    console.log(wordGuessed);

    if (theWord.toLowerCase () === wordGuessed.toLowerCase()) {
        console.log("Gewonnen");
        isWordGuessed = true;
    } else {
        console.log("Je hebt het niet geraden.");
    }
}
