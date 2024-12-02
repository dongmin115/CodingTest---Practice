const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution() {
    const [N,M] = input[0];
    const payArr = input[1];
    const results = [];
    let sum = 0;

    for(let i=0; i<M; i++) {
        results.push(payArr[i]);
        sum += payArr[i];
    }

    let max = sum;

    for(let i=M; i<N; i++) {
        sum -= results[0];
        results.shift();
        results.push(payArr[i]);
        sum += payArr[i];
        max = Math.max(max, sum);
    }

    console.log(max);

}

solution();
