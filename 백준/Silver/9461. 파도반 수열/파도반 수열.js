const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function solution() {
    const N = input[0];
    const dp = new Array(N+1).fill(0);

    function test(n){
        dp[1] = 1;
        dp[2] = 1;
        dp[3] = 1;

        for (let i=3; i<=n;i++) {
            dp[i] = dp[i-2] + dp[i-3];
        }
        return console.log(dp[n]);
    }

    for(let i=1;i<=N;i++){
        test(input[i]);
    }

}

solution();