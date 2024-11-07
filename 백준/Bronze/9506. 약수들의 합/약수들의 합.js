const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function solution() {

    function isPerfectNumber(n) {
        const arr = [];

        for(let i=1; i<=Math.floor(n/2); i++) {
            if(n % i === 0) {
                arr.push(i);
            }
        }

        const sum = arr.reduce((acc, cur) => acc + cur, 0);

        if(n === sum) {
            console.log(`${n} = ${arr.sort((a, b) => a - b).join(' + ')}`);
        } else {
            console.log(`${n} is NOT perfect.`)
        }
    }

    for(let i=0; i < input.length - 1; i++) {
        isPerfectNumber(input[i]);
    }
}

solution();