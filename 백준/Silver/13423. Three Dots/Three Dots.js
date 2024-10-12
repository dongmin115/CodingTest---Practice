const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let idx = 0;
    const T = Number(input[idx++]);

    for(let t = 0; t < T; t++) {
        const dotLength = Number(input[idx++]);
        const dots = input[idx++].split(' ').map(e => parseInt(e)).sort((a, b) => a - b);
        let count = 0;

        for(let i=1; i<dotLength-1;i++){
            const center = dots[i];
            let leftIdx = i-1;
            let rightIdx = i+1;

            while(leftIdx >= 0 && rightIdx < dotLength){
                let left = dots[leftIdx];
                let right = dots[rightIdx];

                if((center - left) === (right - center)){
                    count++;
                    leftIdx--;
                    rightIdx++;
                } else if ((center - left) < (right - center)){
                    leftIdx--;
                } else {
                    rightIdx++;
                }
            }
        }
        console.log(count);
    }
}

solution();