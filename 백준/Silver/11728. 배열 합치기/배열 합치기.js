const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const [N, M] = input[0];
    const A = input[1];
    const B = input[2];

    const result = [];
    let i = 0, j = 0;

    while (i < N && j < M) {
        if (A[i] <= B[j]) {
            result.push(A[i]);
            i++;
        } else {
            result.push(B[j]);
            j++;
        }
    }

    while (i < N) {
        result.push(A[i]);
        i++;
    }

    while (j < M) {
        result.push(B[j]);
        j++;
    }

    console.log(result.join(' '));
}

solution();