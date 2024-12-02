const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const testCase = input.slice(1);

    testCase.forEach((str) => {
        const map = {};
        let isFake = false;
        for (let i = 0; i< str.length; i++) {
            if(!map[str[i]]) map[str[i]] = 1;
            else {
                map[str[i]]++;
                if (map[str[i]] === 3) {
                    if(str[i+1] !== str[i]){
                        isFake = true;
                        break;
                    }
                    map[str[i]] = 0;
                    i++;
                }
            }
        }
        console.log(isFake ? 'FAKE' : 'OK')
    })
}

solution();
