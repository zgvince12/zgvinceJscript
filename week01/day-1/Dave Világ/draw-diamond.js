const lineCount = 7;
const half = Math.ceil(lineCount / 2);

for (let i = 1; i <= half; i++) {
    let spaces = ''
    for (let j = 1; j <= half - i; j++) {
        spaces += ' '
    }
    let stars = ''
    for (let k = 0; k < 2 * i - 1; k++) {
        stars += '*'
    }
    console.log(spaces + stars)
}

for (let a = 0; a <= lineCount - half; a++) {
    let space = ''
    for (let b = 0; b <= a; b++) {
        space += ' '
    }
    star = ''
    for (let c = (lineCount - half - a) * 2; c > 1; c--) {
        star += '*'
    }
    console.log(space + star)
}