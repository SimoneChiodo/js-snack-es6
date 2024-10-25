// Testo
//
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (il primo deve essere più piccolo del secondo).
// La funzione ritornerà un nuovo array contenente gli elementi posizionati tra gli indici inseriti dall'utente.

// Creo le variabili necessarie
const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let indice1;
while (isNaN(indice1) || indice1 <= 0 || indice1 > array.length) {
    indice1 = parseInt(
        prompt(`L'array è: ${array.join(", ")}

Scrivere il primo indice (da 1 a 10): `)
    );
}
let indice2 = 0;
do {
    indice2 = parseInt(
        prompt(`L'array è: ${array.join(", ")}

Scrivere il secondo indice (da 1 a 10): `)
    );
} while (
    isNaN(indice2) ||
    indice2 < indice1 ||
    indice2 <= 0 ||
    indice2 > array.length
);

// Output
alert(fz(array, --indice1, --indice2).join(", "));

// Funzione
function fz(array, index1, index2) {
    // Creo un nuovo vettore
    let newArray = [];

    // Salvo i valori tra il primo e il secondo indice
    while (index1 != index2 + 1) newArray.push(array[index1++]);

    return newArray;
}
