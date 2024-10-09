const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);

function solution() {
    const T = input[0];
    const k = input.slice(1);
    const result = [];

    function isPrime(x){
        if(x === 1) return false;
        for(let i=2;i<=Math.sqrt(x);i++){
            if(x%i === 0) return false
        }
        return true;
    }

    k.forEach(e=>{
        if(isPrime(e)){
            result.push(0);
        }
        else {
            let prevPrime = e-1;
            while(prevPrime > 1 && !isPrime(prevPrime)){
                prevPrime--;
            }

            let nextPrime = e+1;
            while(!isPrime(nextPrime)){
                nextPrime++;
            }
            const length = nextPrime - prevPrime;
            result.push(length);
        }
    })

    console.log(result.join('\n'));
}

solution();