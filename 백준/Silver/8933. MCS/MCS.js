const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const testCase = input.slice(1).map(e=> e.split(' '));

    testCase.forEach(([k, str]) => {
        k = Number(k);
        const map = new Map();
        const counts = {A:0, G:0, T:0, C:0};

        for(let i=0; i<k; i++){
            counts[str[i]]++;
        }
        map.set(JSON.stringify(counts),1);

        for(let i=k; i<str.length; i++){
            counts[str[i]]++;
            counts[str[i-k]]--;

            const key = JSON.stringify(counts);
            map.set(key,(map.get(key) || 0) + 1);
        }

        const result = Math.max(...map.values());
        console.log(result);
    })

}

solution();
