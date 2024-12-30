const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('')
    .map(Number);

function solution() {
    input.sort((a,b) => b - a);
    const sum = input.reduce((a,b) => a + b, 0);

    if(sum % 3 !== 0 || !input.includes(0)){
        console.log(-1);
    } else {
        console.log(input.join(''));
    }
}

solution();
