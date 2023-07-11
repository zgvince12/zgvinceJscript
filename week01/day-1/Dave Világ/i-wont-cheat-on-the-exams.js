'use strict';

// Írj egy programot ami 100-szor kiírja:
// "Nem fogok csalni az a vizsgán!"
let a = 0
while (a < 100) {
    console.log('Nem fogok csalni az a vizsgán!' + (a + 1))
    a++
}

for (let i = 0; i < 100; i++) {
    console.log('Nem fogok csalni az a vizsgán!' + (i + 1))
}