
const lineCount = 4;

// Írj egy programot, ami
// ilyen piramist rajzol:
//
//
//    *
//   ***
//  *****
// *******
//
// A piramisnak annyi sora legyen, mint amennyi a lineCount értéke

for (let i = 1; i <= lineCount; i++) {
    spaces = ''
    for (let j = 1; j <= lineCount - i; j++) {
        spaces += ' '
    }
    stars = ''
    for (let k = 0; k < 2 * i - 1; k++) {
            stars += '*'
    }
    console.log (spaces + stars)
}