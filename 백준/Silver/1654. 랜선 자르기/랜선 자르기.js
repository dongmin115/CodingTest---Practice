const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [K, N] = input[0].split(' ').map(Number);
    const lengths = input.slice(1).map(Number);

    let start = 1;
    let end = Math.max(...lengths);
    let answer = 0;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        let count = lengths.reduce((acc, length) => acc + Math.floor(length / mid), 0);

        if (count >= N) {
            answer = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    console.log(answer);
}

solution();