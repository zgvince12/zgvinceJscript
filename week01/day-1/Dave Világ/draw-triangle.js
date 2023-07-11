'use strict';

const lineCount = 4;

// Írj egy programot, ami rajzol
// egy ilyen háromszöget:
//
// *
// **
// ***
// ****
//
// A háromszögnek annyi sora legyen, mint amennyi a lineCount értéke

for (let i = 1; i <= lineCount; i++) {
    let stars = ''
    for (let j = 1; j <= i; j++) {
        stars += '*'
    }
    console.log(stars)
}