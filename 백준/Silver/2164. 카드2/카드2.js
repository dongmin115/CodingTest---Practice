const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const N = Number(input);
    const deque = [];
    let head = 0;
    let tail = N;

    for(let i=0; i<N; i++) {
        deque.push(i+1);
    }

    while(tail - head > 1) {
        head++;
        deque[tail++] = deque[head++];
    }

    console.log(deque[head]);
}

solution();