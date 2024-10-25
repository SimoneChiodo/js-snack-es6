// Testo:
//
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Creo l'array di oggetti
let array = [
    //Primo oggetto
    {
        nome: "",

        // Caratteristiche peso
        peso: {
            value: generateNumber(0.7, 7), // Range peso: 0.7 grammi - 7 kg  (cercato online °_°)
            unit: "Kg",
        },
    },

    // Secondo oggetto
    {
        nome: "",

        // Caratteristiche peso
        peso: {
            value: generateNumber(0.7, 7), // Range peso: 0.7 grammi - 7 kg
            unit: "Kg",
        },
    },
];

// Assegno un nome
array[0].nome = "Ciao";
array[1].nome = "CRX-3000 SUPER";

//Cerco il tag main (usato per l'output)
const main = document.querySelector("main");

//Output
if (array[0].peso.value > array[1].peso.value)
    main.innerHTML = `La bici più leggera è <b>${array[0].nome}</b>, perché pesa <b>${array[0].peso.value} ${array[0].peso.unit}</b>,
<br> mentre la bici <b>${array[1].nome}</b> è la più pesante, perché pesa <b>${array[1].peso.value} ${array[1].peso.unit}</b>`;
else
    main.innerHTML = `La bici più leggera è <b>${array[1].nome}</b>, perché pesa <b>${array[1].peso.value} ${array[1].peso.unit}</b>,
<br> mentre la bici <b>${array[0].nome}</b> è la più pesante, perché pesa <b>${array[0].peso.value} ${array[0].peso.unit}</b>`;

// Funzione per generare un numero random
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
