// Írj egy programot, ami 1-től 100-ig kiíratja a számokat.
// De a 3 többszörösei esetén a "Fizz" szót írja ki a szám helyett
// és az 5 többszöröseinél pedig a "Buzz" szót írja ki a szám helyett.
// Ha a szám a 3-nak és 5-nek is többszöröse,
// akkor a "FizzBuzz" szót írja ki a szám helyett

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz')
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('Buzz')
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz-Buzz')
    } else {
        console.log(i)
    }
}