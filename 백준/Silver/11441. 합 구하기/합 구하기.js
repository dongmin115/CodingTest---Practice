const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const numArr = input[1];
    const testCase = input.slice(3);
    const  result = [];
    const dp = new Array(numArr.length+1).fill(0);

    for(let i=1; i<=numArr.length; i++) {
        dp[i] = dp[i-1] + numArr[i-1];
    }

    testCase.forEach(([start,end]) => {
        result.push(dp[end] - dp[start-1]);
    })

    console.log(result.join('\n'));

}

solution();
