const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=>e.split(' ').map(Number));


function solution() {
    let [ _, K ] = input[0];
    const coins = input.slice(1).flat();
    let result = 0;

    coins.reverse();

    for (let i=0; i<coins.length; i++) {
        if( K >= coins[i] ){
            result += Math.floor(K / coins[i]);
            K = K % coins[i];
        }

        if( K === 0) {
            break;
        }
    }

    console.log(result);
}

solution()