const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const testCase = input.slice(1);
    let count = 0;

    testCase.forEach(e => {
        const stack = [];

        for(let i=0; i<e.length; i++){
            const char = e[i];
            if(stack.length > 0 && stack[stack.length - 1] === char){
                stack.pop();
            } else stack.push(char);
        }

        if(stack.length === 0) count++;
    })

    console.log(count);
}

solution();
