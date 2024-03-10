// L’utente potrà compilare il form e cliccare il pulsante per calcolare il prezzo:

// recuperare i km dall’input dei km
const kmInputElement = document.getElementById('km') 
console.log(kmInputElement)

// definire l'elemento bottone
const buttonElement = document.getElementById('submit') //object
console.log(buttonElement)

// abilitare ascolto clic sul bottone
buttonElement.addEventListener('click', function () {
	console.log('click on button')

// recuperare l'opzione selezionata dal dropdown menu
const discountList = document.getElementById("discount-list");
const selectedValue = discountList.value;

// chiedere il numero dei km da percorrere
const km = parseFloat(kmInputElement.value); //number
//console.log(km)

// validare i dati
// - km > 0
console.log(km > 0)
// - km non è NaN
console.log(!isNaN(km))
//selectedValue != "0" è diverso da 0
console.log(selectedValue != "0")

//Se i dati sono validi
if (km > 0 && !isNaN(km) && selectedValue != "0") {

// impostare variabile prezzo al km
const pricePerKm = 0.21; //number

// calcolare il prezzo del biglietto senza sconti
const basePrice = (km * pricePerKm); //number
//console.log(basePrice)

// impostare le variabili di sconto
    if (selectedValue === "1") {
        discount = 0.2;
    } else if (selectedValue === "2") {
        discount = 0.4;
    } else if (selectedValue === "3") {
       discount = 0;
    } 

// calcolare il prezzo del biglietto applicando gli sconti
const price = basePrice - basePrice * discount //number

// stampare il prezzo finale riducendo il numero di cifre decimali a 2
console.log (price.toFixed(2))

// stampare il prezzo del biglietto sulla viewport tramite collegamento a html
const priceElement = document.getElementById('price')
priceElement.innerHTML = + price.toFixed(2)

if (selectedValue === "1") {
    shownDiscount = 20;
} else if (selectedValue === "2") {
    shownDiscount = 40;
} else if (selectedValue === "3") {
   shownDiscount = 0;
}

const kmElement = document.getElementById('km-percorsi')
kmElement.innerHTML = km

const basePriceElement = document.getElementById('base-price')
basePriceElement.innerHTML = basePrice

const discountElement = document.getElementById('discount')
discountElement.innerHTML = shownDiscount


} else {
    //ALTRIMENTI 
    alert('I dati inseriti non sono validi e/o nessuna opzione di sconto selezionata')
}
})