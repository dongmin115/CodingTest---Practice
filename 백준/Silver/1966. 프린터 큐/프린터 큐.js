const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const testCase = input.slice(1);

    for(let i=0; i<testCase.length; i+=2) {
        const [_,M] = testCase[i];
        const level = testCase[i+1];
        let count = 0;
        const queue = level.map((priority,initIdx) => ({ priority, initIdx }));

        while(queue.length > 0){
            const curr = queue.shift();
            const max = Math.max(...queue.map(e => e.priority));

            if(curr.priority < max){
                queue.push(curr);
            } else {
                count++;
                if(curr.initIdx === M){
                    console.log(count);
                    break;
                }
            }
        }

    }


}

solution();
