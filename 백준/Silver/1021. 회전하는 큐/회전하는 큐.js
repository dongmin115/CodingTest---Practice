const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,_] = input[0];
    const position = input[1];

    const stack = [];
    let count = 0;

    for(let i=1; i<=N; i++) {
        stack.push(i);
    }

    position.forEach(e=> {
        const idx = stack.indexOf(e);
        const half = Math.floor(stack.length / 2);

        if(idx <= half) {
            for(let i=0; i<idx; i++){
                stack.push(stack.shift());
                count++;
            }
        } else {
            for(let i=0; i<stack.length - idx; i++){
                stack.unshift(stack.pop());
                count++;
            }
        }
        stack.shift();
    })

    console.log(count);

}

solution();
