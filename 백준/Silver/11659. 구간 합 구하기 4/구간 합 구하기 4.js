const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const arr = input[1].split(' ').map(Number);
    const range = input.slice(2).map((e) => e.split(' ').map(Number));

    // 구간 합 배열 생성
    const prefixSum = new Array(arr.length + 1).fill(0);
    
    for (let i = 1; i <= arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
    }

    const result = [];
    
    range.forEach(([start, end]) => {
        // 구간 합 계산: prefixSum[end] - prefixSum[start - 1]
        const sum = prefixSum[end] - prefixSum[start - 1];
        result.push(sum);
    });

    console.log(result.join('\n'));
}

solution();
