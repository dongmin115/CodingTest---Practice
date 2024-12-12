const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    input.forEach(e => {
        if(e[0] === '.' && e.length === 1) return;

        const stack = [];
        let isBalanced = true;

        for(let i=0; i<e.length; i++) {
            const char = e[i];
            if(char === '(' || char === '['){
                stack.push(char);
            } else if(char === ')') {
                if(stack.length === 0 || stack[stack.length - 1] !== '('){
                    isBalanced = false;
                    break;
                }
                stack.pop();
            } else if(char === ']') {
                if(stack.length === 0 || stack[stack.length - 1] !== '['){
                    isBalanced = false;
                    break;
                }
                stack.pop();
            }
        }
        if(isBalanced && stack.length === 0) {
            console.log('yes');
        } else console.log('no');
    })
}

solution();
