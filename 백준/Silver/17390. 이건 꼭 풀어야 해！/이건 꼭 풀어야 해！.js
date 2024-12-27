const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,Q] = input[0];
    const numArr = input[1].sort((a, b) => a - b);
    const testCase = input.slice(2);
    const preSum = new Array(N+1).fill(0);
    const result = [];

    for(let i=1; i<=N; i++) {
        preSum[i] = preSum[i-1] + numArr[i-1];
    }

    testCase.forEach(([start,end]) => {
        result.push(preSum[end] - preSum[start-1]);
    })

    console.log(result.join('\n'));
}

solution();
