const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];

function isPerfectNumber(n){

    let arr = [];
    let sum = 0;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            arr.push(i);
            sum += i;
        }
    }

    if (sum === n) {
        return console.log(`${n} = ${arr.join(' + ')}`);
    } else {
        return console.log(`${n} is NOT perfect.`);
    }
}

rl.on('line', (line)=> {
    const n = parseInt(line);
    if(n === -1){
        rl.close();
    }else {
        inputLines.push(n);
    }
})

rl.on('close', () => {
    const results = inputLines.map(isPerfectNumber);
    console.log(results.join('\n'));
});