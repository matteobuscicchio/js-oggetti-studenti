// Istruzioni:
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// 
// var esercizio = {
//     repo : "js-oggetti-studenti",
//     istruzioni: ["Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.", "Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", "Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età." ],
//     augurio: "che la forza degli oggetti sia con voi :muscle:"
// }


// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
    'nome': 'Marco',
    'cognome': 'Rossi',
    'età' : 25    
};
for (var key in studente) {
    console.log(studente[key]);
}

// // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studentArray = [
    {
        'nome': 'Riccardo',
        'cognome': 'Fragola',
        'età' : 25    
    },
    {
        'nome': 'Maria',
        'cognome': 'Bianchi',
        'età' : 30    
    },
    {
        'nome': 'Gerardo',
        'cognome': 'Albano',
        'età' : 27    
    }
];

for (const key in studentArray) {
    console.log(studentArray[key].nome, studentArray[key].cognome);
}
