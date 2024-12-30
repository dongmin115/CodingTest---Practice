const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, M] = input[0].split(' ').map(Number);
    const notHear = input.slice(1,N+1);
    const notSee = input.slice(N+1);
    const map = new Map();
    const result = [];

    notHear.forEach(e => {
        map.set(e,true);
    })

    notSee.forEach(e => {
        if(map.has(e)){
            result.push(e);
        }
    })

    result.sort();

    console.log(result.length + '\n' + result.join('\n'));

}

solution();