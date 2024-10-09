const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const myCards = new Set(input[1]);
    const yourCards = input[3];
    const result = yourCards.map(e => myCards.has(e) ? 1 : 0);
    console.log(result.join(' '));
}

solution();