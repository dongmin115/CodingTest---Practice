const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);

input.shift();
input.sort((a, b) => a - b);

function solution() {
    let min = 5;

    for(let i=0;i<input.length;i++){
        const endNum = input[i] + 4;
        let length = 0;

        for(let j=i;j<input.length && input[j] <= endNum; j++){
            length++;
        }
        min = Math.min(min,5 - length);
    }
    console.log(min);
}

solution();