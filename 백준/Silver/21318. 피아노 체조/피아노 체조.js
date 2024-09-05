const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=>e.split(' ').map(Number));



function solution(){
    const difficulty = input[1];    // [ 1,  2, 3, 3, 4, 1, 10, 8, 1]
    const question = input.slice(3);   // [ [ 1, 3 ], [ 2, 5 ], [ 4, 7 ], [ 9, 9 ], [ 5, 9 ] ]
    const result = []

    // 구간별 실패 카운트를 담고 있는 배열 생성
    const failCount = new Array(difficulty.length).fill(0);

    // failCount = [ 0, 0, 0, 0, 0,1, 1, 2, 3 ]
    for( let i = 1; i < difficulty.length; i++ ){
        failCount[i] = failCount[i-1];
        if(difficulty[i-1] > difficulty[i]){
            failCount[i]++;
        }
    }

    question.forEach(([start,end])=>{
        result.push(failCount[end-1]-failCount[start-1]);
    })

    console.log(result.join('\n'));
}

solution()