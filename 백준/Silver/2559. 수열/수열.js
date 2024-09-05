const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=>e.split(' ').map(Number));

function solution() {
    const size = input[0][1];
    const tempArr = input[1];
    let result = -Infinity;

    for( let i=0; i <= tempArr.length - size; i++ ){
        let sum = 0;

        for( let j=0; j < size; j++ ){
            sum += tempArr[i+j];
        }

        if( result < sum) {
            result = sum;
        }
    }

    console.log(result);

}

solution();