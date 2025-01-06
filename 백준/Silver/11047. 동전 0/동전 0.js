const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N,K] = input[0].split(' ').map(Number);
    const coins = input.slice(1).reverse().map(Number);
    let current = K;
    let result = 0;

    for(let i=0; i<N; i++) {
        if(current >= coins[i]){
            const a = Math.floor(current / coins[i]);
            current -= coins[i] * a;
            result += a
        }
    }

    console.log(result);

}

solution();
