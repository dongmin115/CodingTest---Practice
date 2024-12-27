const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const numArr = input[1];
    const testCase = input[3];
    const map = new Map();
    const result = [];

    numArr.forEach(e=> {
        map[e] = true;
    })

    testCase.forEach(e => {
        if(map[e]) result.push(1);
        else result.push(0);
    })

    console.log(result.join('\n'));

}

solution();
