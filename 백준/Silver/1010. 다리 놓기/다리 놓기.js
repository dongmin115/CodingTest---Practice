const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=>e.split(' ').map(Number));

function combination(n,r) {
    if(r>n) return 0;
    let result = 1;
    for(let i=0; i<r; i++){
        result *= (n-i);
        result /= i+1;
    }
    return result;
}

function solution() {
    const testCase = input.slice(1);

    testCase.forEach(([N,M]) => {
        console.log(combination(M,N));
    })
}

solution();