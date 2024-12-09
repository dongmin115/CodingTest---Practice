const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,X] = input[0];
    const visitorCount = input[1];
    let sum = 0;
    let maxCount;
    let scopeCount = 0;

    for(let i=0; i<X; i++) {
        sum += visitorCount[i];
    }

    maxCount = Math.max(sum,0);
    if(maxCount !== 0) scopeCount++;

    for(let i=X; i<N; i++) {
        sum += visitorCount[i] - visitorCount[i-X];

        if(sum === maxCount) scopeCount++;
        else if(maxCount < sum) {
            maxCount = sum;
            scopeCount = 1;
        }

    }

    if(maxCount === 0) console.log("SAD");
    else {
        console.log(maxCount);
        console.log(scopeCount);
    }
}

solution();
