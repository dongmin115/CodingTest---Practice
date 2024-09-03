const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = [];

function isPrime(n) {
    if (n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0){
            return false
        }
    }
    return true;
}

function nextPrime(n){

    n.forEach((e)=>{

        while(!isPrime(e)){
            e++;
        }
        console.log(`${e}`);
    })

}

rl.on('line',(line)=>{
    inputLines.push(line.trim());

    if(inputLines.length > inputLines[0]){
        rl.close();
    }
})

rl.on('close',()=>{
    nextPrime(inputLines.slice(1));
})