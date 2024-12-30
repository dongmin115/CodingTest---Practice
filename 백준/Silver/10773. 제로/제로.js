const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const K = input[0];
    const testCase = input.slice(1).map(Number);
    const stack = [];

    testCase.forEach((e) => {
        if(e === 0){
            stack.pop()
        } else stack.push(e);
    })

    console.log(stack.reduce((a, b) => a + b,0));
}

solution();