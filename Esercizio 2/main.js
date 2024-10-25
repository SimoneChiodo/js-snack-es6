// Testo:
//
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo l'array di oggetti
let squadre = [
    //Primo oggetto
    {
        // Nome squadra
        nome: "",

        // Punti fatti
        punti: 0,

        // Falli subiti
        falli: 0,
    },

    // Secondo oggetto
    {
        // Nome squadra
        nome: "",

        // Punti fatti
        punti: 0,

        // Falli subiti
        falli: 0,
    },
];

// Modifico/Inizializzo i dati
squadre[0].nome = prompt("Inserisci il nome della squadra 1:");
squadre[1].nome = prompt("Inserisci il nome della squadra 2:");
for (const squadra of squadre) {
    squadra.punti = generateNumber(0, 100);
    squadra.falli = generateNumber(0, 30);
}

// Output
for (const squadra of squadre) {
    const { nome, punti } = squadra;
    console.log(`Output: ${nome}, ${punti}.`);
}

// Funzione per generare un numero random
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
