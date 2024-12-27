const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const numArr = input[1];
    const testCase = input[3];
    const map = {};
    const result = [];

    numArr.forEach(e => {
        if(!map[e]){
            map[e] = 1;
        } else {
            map[e]++;
        }
    })

    testCase.forEach(e => {
        result.push(map[e] ? map[e] : 0);
    })

    console.log(result.join(' '));
}

solution();
