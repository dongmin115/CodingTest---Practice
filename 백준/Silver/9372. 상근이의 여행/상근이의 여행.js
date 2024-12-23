const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const T = input[0][0];
    let idx = 1;

    const result = [];

    for(let t=0; t<T; t++){
        const [N,M] = input[idx];
        idx += M + 1;

        result.push(N-1);
    }

    console.log(result.join('\n'));
}

solution();
