const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const T = Number(input[0]);
    const testCase = input.slice(1);
    let idx = 0;
    const answer = [];

    for(let i=0; i<T; i++) {
        const n = Number(testCase[idx++]);
        const map = {};

        for(let j=0; j<n; j++) {
            const [name, category] = testCase[idx++].split(' ');
            map[category] = (map[category] || 0) + 1;
        }

        let result = 1;
        Object.entries(map).map(([_,count]) => {
            result *= count + 1;
        })
        answer.push(result-1);
    }
    
    console.log(answer.join('\n'));
}

solution();
