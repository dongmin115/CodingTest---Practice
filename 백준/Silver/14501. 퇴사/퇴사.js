const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const N = Number(input[0]);
    const consult = input.slice(1).map(e => e.split(' ').map(Number));
    let maxPay = 0;

    function dfs(day, pay) {
        if (day >= N) {
            maxPay = Math.max(maxPay, pay);
            return;
        }

        const [t, p] = consult[day];

        // 1. 상담을 하지 않고 넘어가는 경우
        dfs(day + 1, pay);

        // 2. 상담을 진행하는 경우
        if (day + t <= N) {
            dfs(day + t, pay + p);
        }
    }

    dfs(0, 0);  // 0일차부터 상담 시작

    console.log(maxPay);
}

solution();
