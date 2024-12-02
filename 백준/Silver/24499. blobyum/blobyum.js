const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,K] = input[0];
    const tasteArr = [...input[1],...input[1]];
    const pie = [];
    let sum = 0;

    for(let i=0; i<K; i++) {
        pie.push(tasteArr[i]);
        sum += tasteArr[i];
    }

    let max = sum;

    for(let i=K; i<2*N; i++) {
        sum -= pie[0];
        pie.shift();
        pie.push(tasteArr[i]);
        sum += tasteArr[i];
        max = Math.max(max, sum);
    }

    console.log(max);
}

solution();
