const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,M] = input[0];
    const board = input.slice(1,N+1);
    const testCase = input.slice(N+1);
    const preSum = Array.from({length: N+1},() => new Array(N+1).fill(0));
    const result = [];

    for(let i=1; i<=N; i++) {
        for(let j=1; j<=N; j++) {
            preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] - preSum[i-1][j-1] + board[i-1][j-1];
        }
    }

    testCase.forEach(([x1,y1,x2,y2]) => {
        const cal = preSum[x2][y2] - preSum[x2][y1-1] - preSum[x1-1][y2] + preSum[x1-1][y1-1];
        result.push(cal);
    })

    console.log(result.join('\n'));
}

solution();
