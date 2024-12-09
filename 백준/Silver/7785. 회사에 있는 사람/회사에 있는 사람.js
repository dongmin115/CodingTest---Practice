const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const log = input.slice(1);
    const map = Object.create(null);
    const result = [];

    log.forEach(e => {
       const [name, status] = e.split(' ');
       map[name] = status;
    })

    Object.entries(map).forEach(([name, status]) => {
        if(status === 'enter') {
            result.push(name);
        }
    })

    result.sort().reverse();
    console.log(result.join('\n'));
}

solution();
