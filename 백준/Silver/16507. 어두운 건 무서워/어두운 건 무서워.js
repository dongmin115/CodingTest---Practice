const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=>e.split(' ').map(Number));

function solution() {
    const [R,C,Q] = input[0];
    const brightness = input.slice(1,R+1);
    const position = input.slice(R+1);
    let result = [];

    const prefixSum = Array.from({length: R +1},()=> Array(C+1).fill(0));

    for(let i=1; i <= R; i++){
        for(let j=1; j <= C; j++){
            prefixSum[i][j] = brightness[i-1][j-1] + prefixSum[i-1][j] + prefixSum[i][j-1] - prefixSum[i-1][j-1];
        }
    }

    position.forEach(([r1,c1,r2,c2])=>{
        const sum = prefixSum[r2][c2] - prefixSum[r1-1][c2] -prefixSum[r2][c1-1] + prefixSum[r1-1][c1-1];
        const area = (r2 - r1 + 1) * (c2 - c1 + 1);
        const average = Math.floor(sum/area);
        result.push(average);

    })
    console.log(result.join('\n'));
}

solution();

