const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' '));

function solution() {
    const commands = input.slice(1);
    const stack = [];
    const result = [];

    commands.forEach(e => {
        if(e[0] === 'push'){
            stack.push(Number(e[1]));
        } else if (e[0] === 'pop'){
            if(stack.length === 0){
                result.push(-1);
            } else {
                result.push(stack.pop());
            }
        } else if (e[0] === 'size'){
            result.push(stack.length);
        } else if (e[0] === 'empty'){
            stack.length === 0 ? result.push(1) : result.push(0);
        } else if (e[0] === 'top'){
            if(stack.length === 0){
                result.push(-1);
            } else {
                result.push(stack[stack.length - 1]);
            }
        }
    })

    console.log(result.join('\n'));
}

solution();
