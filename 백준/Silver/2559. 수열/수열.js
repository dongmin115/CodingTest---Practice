const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [ N, K ] = input[0];
    const temperature = input[1];
    let sum = 0


    for(let i=0; i<K; i++) {
        sum += temperature[i];
    }

    let maxSum = sum;

    for(let j=K; j<N; j++) {
        sum += temperature[j] - temperature[j-K]
        maxSum = Math.max(maxSum, sum);
    }
    console.log(maxSum);
}

solution();
