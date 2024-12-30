const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const testCase = input[1];
    const stack = [];
    let current = 1;

    testCase.forEach(e => {
        if(e === current){
            current++;
        } else {
            stack.push(e);
        }

        while(stack.length > 0 && current === stack[stack.length-1]){
            stack.pop();
            current++;
        }
    })

    console.log(current === N+1 ? "Nice" : "Sad");

}

solution();