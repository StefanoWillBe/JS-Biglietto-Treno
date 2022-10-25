// salvo in una variabile il bottone genera
var generateButton = document.getElementById("generate");

// rimango in ascolto di un evento click sul bottone genera
generateButton.addEventListener("click" ,
    function (){

    // leggo i valori di nome e cognome, km inseriti ed età inseriti dall'utente
    var nomeUser = document.getElementById("nome-cognome").value;
    var kmInserti = document.getElementById("km-inseriti").value;
    var kmInsert = parseInt(kmInserti);
    var etaInser = document.getElementById("eta-inserita").value;


    // assegno in una variabile il costo al km e prezzo standard
    var costokm = 0.21;
    var finalPrice = costokm * kmInsert;

// calcolo offerta: sconto se minorenne o overe se maggiorenne costo standard
    if(etaInser == "minorenne"){
        finalPrice -= (finalPrice * 20 / 100);
    } else if (etaInser == "over"){
        finalPrice -= (finalPrice * 20 / 100);
    }

    // STAMPARE IL BIGLIETTO
    document.getElementById("name-user").innerHTML = nomeUser;
    document.getElementById("offer-user").innerHTML = etaInser;
    document.getElementById("carriage-user").innerHTML = getRandomcarrozza();
    document.getElementById("code-user").innerHTML = getRandomTrain();
    document.getElementById("cost-user").innerHTML = finalPrice.toFixed(2);

    // al click del bottone genera visualizzo il biglietto che altrimenti ha display none
    document.getElementById("ticket-user").className = "block";
})

// Funzione per generare codice random per carrozza treno da 1 a 10
function getRandomcarrozza(min) {
    return Math.floor(Math.random() * 10) + 1;
}

// Funzione per generare codice random per CP treno da 1000 a 10000
function getRandomTrain(min) {
    return Math.floor(Math.random() * 10000) + 1;
}


// salvo in una variabile il bottone genera
var cancelButton = document.getElementById("cancel");

// rimango in ascolto di un evento click sul bottone annulla
cancelButton.addEventListener("click" ,
    function (){

    // Tolgo il Biglietto
    document.getElementById("ticket-user").className = "none";

    // svuoto gli input
    var nomeUser = document.getElementById("nome-cognome").value = "";
    var kmInserti = document.getElementById("km-inseriti").value = "";
    var kmInsert = parseInt(kmInserti);
    var etaInser = document.getElementById("eta-inserita").value = "";

    // svuoto gli altri elementi
    document.getElementById("name-user").innerHTML = "";
    document.getElementById("offer-user").innerHTML = "";
    document.getElementById("carriage-user").innerHTML = "";
    document.getElementById("code-user").innerHTML = "";
    document.getElementById("cost-user").innerHTML = "";

})


