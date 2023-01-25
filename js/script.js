// salvo in una variabile il bottone genera
const generateButton = document.getElementById( "generate" );

// rimango in ascolto di un evento click sul bottone genera
generateButton.addEventListener("click" , function ()
{
    // leggo i valori di nome e cognome, km inseriti ed età inseriti dall'utente
    const userName = document.getElementById( "nome-cognome" ).value;
    
    const kmInseriti = parseInt(document.getElementById( "km-inseriti" ).value);

    const etaInserita = document.getElementById( "eta-inserita" ).value;

    if( !userName || !kmInseriti || !etaInserita ) {
        
        alert(" Attenzione: tutti i campi devono essere compilati");

    }else{

        // assegno in una variabile il costo al km e prezzo standard
        const costokm = 0.21;
        let finalPrice = costokm * kmInseriti;

     // calcolo offerta: sconto 20% se minorenne, 40% se over 65 o costo standard se maggiorenne
        if( etaInserita == "minorenne" ){
            finalPrice -= ( finalPrice * 20 / 100 );
        } else if ( etaInserita == "over" ){
            finalPrice -= ( finalPrice * 40 / 100 );
        }

        // STAMPARE IL BIGLIETTO
        document.getElementById( "name-user" ).innerHTML = userName;
        document.getElementById( "offer-user" ).innerHTML = etaInserita;
        document.getElementById( "carriage-user" ).innerHTML = randomCarrozza();
        document.getElementById( "code-user" ).innerHTML = randomTrain();
        document.getElementById( "cost-user" ).innerHTML = finalPrice.toFixed(2);
    
        // al click del bottone genera visualizzo il biglietto che altrimenti ha display none
        document.getElementById( "ticket-user" ).className = "block";

    }    
});


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


