const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,S] = input[0];
    const numArr = input[1];
    let sum = 0;
    let left = 0;
    let minLength = Infinity;

    for(let i=0; i<N; i++) {
        sum += numArr[i];

        while(sum >= S) {
            minLength = Math.min(minLength, i - left + 1);
            sum -= numArr[left++];
        }
    }

    console.log(minLength === Infinity ? 0 : minLength);
}

solution();
