const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function solution() {
    const numbers = input.slice(1);
    const stack = [];
    let current = 1;
    const result = [];

    for(const e of numbers) {
        while(current <= e) {
            stack.push(current);
            current++;
            result.push('+');
        }

        if(stack[stack.length -1] === e){
            stack.pop();
            result.push('-');
        } else {
            return console.log('NO');
        }
    }

    console.log(result.join('\n'));

}

solution();
