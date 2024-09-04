const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const input = []

// 소수를 찾아내는 함수
function isPrime(x) {
    for(let i=2;i<=Math.sqrt(x);i++) {
        if( x%i === 0 ) return false;
    }
    return true;
}

// 소수의 갯수를 찾아내는 함수
function countPrimes(x){
    let count = 0;
    for(let i = x+1; i <= 2*x; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}

function main(input){
    input.forEach((e)=>{
        console.log(countPrimes(e));
    })
}

rl.on('line',(line)=>{
    input.push(parseInt(line));
    if(line === '0'){
        main(input.slice(0,input.length-1));
        rl.close();
    }
})

