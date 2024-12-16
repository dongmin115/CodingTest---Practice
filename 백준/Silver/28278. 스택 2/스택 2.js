const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const commands = input.splice(1);
    const stack = [];
    const result = [];

    commands.forEach(e => {
        if(e[0] === 1){
            stack.push(e[1]);
        } else if(e[0] === 2){
            if(stack.length === 0){
                result.push(-1);
            } else {
                result.push(stack.pop());
            }
        } else if(e[0] === 3){
            result.push(stack.length);
        } else if (e[0] === 4){
            if(stack.length === 0){
                result.push(1);
            } else result.push(0);
        } else if(e[0] === 5){
            if(stack.length === 0){
                result.push(-1);
            } else result.push(stack[stack.length - 1]);
        }
    })
    console.log(result.join('\n'));
}

solution();
