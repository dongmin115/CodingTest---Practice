const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const testCase = input.slice(1);
    const result = [];

    testCase.forEach(e => {
        const stack = [];
        for(let i=0; i<e.length; i++) {
            const char = e[i];
            if(char === '(') stack.push(char);
            else if(char === ')' && stack[stack.length - 1] === '(') stack.pop();
            else if(char === ')' && stack[stack.length - 1] !== '(') stack.push(char);
        }

        if(stack.length === 0) result.push('YES');
        else result.push('NO');
    })

    console.log(result.join('\n'));
}

solution();