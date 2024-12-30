const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, _] = input[0].split(' ').map(Number);
    const pocketMon = input.slice(1,N+1);
    const testCase = input.slice(N+1);
    const map = new Map();
    const result = [];

    for(let i=0; i<N; i++) {
        map.set(i+1,pocketMon[i]);
        map.set(pocketMon[i],i+1);
    }

    testCase.forEach(e => {
        if(isNaN(e)){
            result.push(map.get(e));
        } else {
            result.push(map.get(Number(e)));
        }
    })

    console.log(result.join('\n'));
}

solution();