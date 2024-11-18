const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const A = Number(input);
    const result = [];
    for(let i = 1; i <= A; i++){
        if(30 % (i+1) === 0){
            result.push(i);
        }
    }

    console.log(result.join('\n'));
}

solution();