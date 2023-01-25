// salvo in una variabile il bottone genera
const generateButton = document.getElementById( "generate" );

// rimango in ascolto di un evento click sul bottone genera
generateButton.addEventListener("click" , function ()
{
    // leggo i valori di nome e cognome, km inseriti ed età inseriti dall'utente
    const userName = document.getElementById( "nome-cognome" ).value;
    
    
    const kmInseriti = parseInt(document.getElementById( "km-inseriti" ).value);

    const etaInserita = document.getElementById( "eta-inserita" ).value;

    if( (userName.length == 0  ) || (kmInseriti.length == 0 || !kmInseriti ) || (etaInserita.length == 0 )) {
        
        alert(" Attenzione: tutti i campi devono essere compilati");

    }else{

        // assegno in una variabile il costo al km e prezzo standard
        const costokm = 0.21;
        let prezzoFinale = costokm * kmInseriti;

     // calcolo offerta: sconto 20% se minorenne, 40% se over 65 o costo standard se maggiorenne
        if( etaInserita == "minorenne" ){
            prezzoFinale -= ( prezzoFinale * 20 / 100 );
        } else if ( etaInserita == "over" ){
            prezzoFinale -= ( prezzoFinale * 40 / 100 );
        }

        stampaBiglietto(userName, etaInserita, prezzoFinale);
    
        // al click del bottone genera visualizzo il biglietto che altrimenti ha display none
        document.getElementById( "ticket-user" ).className = "block";

    }    
});


/**
 * Funzione che stampa il biglietto
 * @param {string} user Nome della persona che compra il biglietto
 * @param {int} eta Età della persona che compra il biglietto
 * @param {float} prezzo Prezzo totale del biglietto
 */
function stampaBiglietto(user, eta, prezzo) {

      // STAMPARE IL BIGLIETTO
      document.getElementById( "name-user" ).innerHTML = user;
      document.getElementById( "offer-user" ).innerHTML = eta;
      document.getElementById( "carriage-user" ).innerHTML = randomCarrozza();
      document.getElementById( "code-user" ).innerHTML = randomTrain();
      document.getElementById( "cost-user" ).innerHTML = prezzo.toFixed(2);
}


// Funzione per generare codice random per carrozza treno 
function randomCarrozza(min) {
    return Math.floor(Math.random() * 20) + 1;
}

// Funzione per generare codice random per CP treno 
function randomTrain(min) {
    return Math.floor(Math.random() * 10000) + 1;
}


// salvo in una variabile il bottone cancel
const cancelButton = document.getElementById( "cancel" );

// rimango in ascolto di un evento click sul bottone annulla
cancelButton.addEventListener("click" ,
    function (){

    // Tolgo il Biglietto
    document.getElementById( "ticket-user" ).className = "none";

    // svuoto gli input
    const userName = document.getElementById( "nome-cognome" ).value = "";
    const kmInseriti = parseInt(document.getElementById( "km-inseriti" ).value ="");
    const etaInserita = document.getElementById( "eta-inserita" ).value = "";

});


