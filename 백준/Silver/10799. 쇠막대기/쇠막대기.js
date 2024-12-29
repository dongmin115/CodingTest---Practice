const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('');

function solution() {
    const stack = [];
    let count = 0;

    for(let i=0; i<input.length; i++){
        if(input[i] === '(' && input[i+1] !== ')'){
            stack.push(input[i]);
        } else if(input[i] === '(' && input[i+1] === ')'){
            count += stack.length;
            i++
        } else if(input[i] === ')'){
            stack.pop();
            count++;
        }
    }

    console.log(count);

}

solution();
