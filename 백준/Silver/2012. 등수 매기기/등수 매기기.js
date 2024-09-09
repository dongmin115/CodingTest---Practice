const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);


function solution(){
    const pre = input.slice(1).sort((a, b) => a - b);
    let result = 0;

    for(let i=0; i<pre.length; i++){
        result += Math.abs(pre[i] - (i+1))
    }
    console.log(result);
}

solution()