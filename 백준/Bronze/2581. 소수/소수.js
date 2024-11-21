const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);

function isPrime(x){
    if(x===1) return false;
    for(let i=2; i<=Math.sqrt(x); i++){
        if(x%i === 0) return false;
    }
    return true;
}

function solution() {
    const primeArr = [];
    const [M,N] = input;

    for(let i=M; i<=N; i++){
        if(isPrime(i)) primeArr.push(i);
    }
    if(primeArr.length === 0) console.log(-1);
    else {
        const sum = primeArr.reduce((a,b) => a + b);
        const min = Math.min(...primeArr);
        console.log(sum);
        console.log(min);
    }
}

solution();