const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const arr = input[1];
    const dp = new Array(N+1).fill(0);
    let minPrice = arr[0];

    for(let i=1;i<N+1;i++){
        dp[i] = Math.max(dp[i-1], arr[i-1] - minPrice);
        minPrice = Math.min(minPrice, arr[i-1]);
    }

    console.log(dp[N]);
}

solution();