const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,M] = input[0];
    const numArr = input.slice(1,N+1);
    const testCase = input.slice(N+2);
    const result = [];

    const sum = Array.from({ length: N+1 }, () => new Array(M+1).fill(0));

    for(let i=1; i<=N; i++){
        for(let j=1; j<=M; j++){
            sum[i][j] = numArr[i-1][j-1] + sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1];
        }
    }

    testCase.forEach(([i,j,x,y]) => {
        const total = sum[x][y] - sum[x][j-1] - sum[i-1][y] + sum[i-1][j-1];
        result.push(total);
    })

    console.log(result.join('\n'));
}

solution();
