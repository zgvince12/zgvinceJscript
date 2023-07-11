'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

// Írj egy programot, ami kiszámítja, hogy hány másodperc
// van még hátra a napból úgy, hogy az aktuális időt a fenti változókkal
// lehet beállítani

const secPerDay = 24 * 60 * 60;
console.log(secPerDay - ((currentHours*60*60) + (currentMinutes*60) + (currentSeconds*60)));