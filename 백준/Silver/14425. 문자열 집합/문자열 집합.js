const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, _] = input[0].split(' ').map(Number);
    const words = input.slice(1,N+1);
    const testCase = input.slice(N+1);
    const set = new Set(words);
    let count = 0;

    testCase.forEach(e => {
        if(set.has(e)){
            count++;
        }
    })

    console.log(count);
}

solution();