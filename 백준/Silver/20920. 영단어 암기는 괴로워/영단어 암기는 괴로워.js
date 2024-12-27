const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [_, M] = input[0].split(' ').map(Number);
    const note = input.slice(1);
    const map = {};

    note.forEach(e => {
        if(e.length >= M){
            if(!map[e]){
                map[e] = 1;
            } else {
                map[e]++;
            }
        }
    })

    const result = Object.entries(map)
        .sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1];
            if (b[0].length !== a[0].length) return b[0].length - a[0].length;
            return a[0].localeCompare(b[0]);
        })
        .map(([word]) => word);

    console.log(result.join('\n'));
}

solution();
