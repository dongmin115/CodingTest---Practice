const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e=>e.split(' ').map(Number));

function solution() {
    const testCase = input;
    let firstCase = true;

    for(let i=0; i<testCase.length-1; i++) {
        const k = testCase[i][0];
        const arr = testCase[i].slice(1);
        const result = [];
        const temp = [];

        function recursive(depth,start){
            if(depth === 6){
                result.push(temp.join(' '));
                return;
            }

            for(let i=start; i<k; i++){
                const curr = arr[i];
                temp.push(curr);
                recursive(depth + 1, i + 1);
                temp.pop();
            }

        }

        if(!firstCase){
            console.log('');
        }
        firstCase = false;
        recursive(0,0);
        console.log(result.join('\n'));

    }


}

solution();
