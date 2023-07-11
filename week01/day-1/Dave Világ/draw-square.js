const lineCount = 6;

for (let i = 1; i <= lineCount; i++) {
    let first = ''
    let line =''
    let last = ''
    if (i === 1) {
        for (let j = 1; j <= lineCount; j++) {
            first += '%'
        }
    } else if (i === lineCount) {
        for (let j = 1; j <= lineCount; j++) {
            last += '%'
        }
    } else {
        line += '%'
        for (let k = 1; k <= lineCount - 2; k++) {
            line += ' '
        }
        line += '%'
    }
    console.log(first + line + last)
}