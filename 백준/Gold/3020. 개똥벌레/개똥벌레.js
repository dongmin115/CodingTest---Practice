const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,H] = input[0];
    const testCase = input.slice(1).flat();
    const lowSum = new Array(H+1).fill(0);
    const upSum = new Array(H+1).fill(0);
    let min = Infinity;
    let count = 0;

    for(let i=0; i<N; i++) {

        if(i % 2 === 0) {
            lowSum[testCase[i]]++;
        } else {
            upSum[testCase[i]]++;
        }
    }

    for(let j=H-1; j>0; j--) {
        lowSum[j] += lowSum[j+1];
        upSum[j] += upSum[j+1];
    }

    for(let h=1; h<=H; h++) {
        const destroy = lowSum[h] + upSum[H-h+1];
        if(destroy < min) {
            min = destroy;
            count = 1;
        } else if ( destroy === min ) {
            count++;
        }
    }

    console.log(`${min} ${count}`);

}

solution();
