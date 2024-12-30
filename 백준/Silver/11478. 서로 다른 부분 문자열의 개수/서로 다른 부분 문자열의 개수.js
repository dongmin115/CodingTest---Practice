const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const set = new Set();

    for(let i=0; i<input.length; i++){
        let string = '';
        for(let j=i; j<input.length; j++){
            string += input[j];
            set.add(string);
        }
    }

    console.log(set.size);
}

solution();