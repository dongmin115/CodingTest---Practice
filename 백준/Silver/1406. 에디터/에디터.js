const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let string = input[0];
    const commands = input.slice(2);
    const left = string.split('');
    const right = [];

    commands.forEach(e => {
        if(e.startsWith('P ')){
            const char = e.split(' ')[1];
            left.push(char);
        } else {
            if(e === 'L' && left.length > 0){
                right.push(left.pop());
            } else if(e === 'D' && right.length > 0){
                left.push(right.pop());
            } else if(e === 'B' && left.length > 0){
                left.pop();
            }
        }
    })
    console.log(left.join('') + right.reverse().join(''));

}

solution();
