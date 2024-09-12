const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map((e)=> e.split(' ').map(Number));

const [N] = input[0];
const arr = input.slice(1);
let minusOne = 0;
let zero = 0;
let one = 0;

// 같은 숫자인지 비교하는 함수
function isSameNumber(x,y,size) {
    for( let i=x; i<x+size; i++) {
        for( let j=y; j<y+size; j++ ){
            if( arr[x][y] !== arr[i][j] )
                return false;
        }
    }
    return true;
}

// 종이를 자르는 함수
function divide(x,y,size) {
    // 같은 숫자일 때 해당 숫자 카운트
    if( isSameNumber(x,y,size) ){
        if( arr[x][y] === 1) one++;
        else if( arr[x][y] === 0 ) zero++;
        else if( arr[x][y] === -1 ) minusOne++;
    } else {
        // 같은 숫자가 아니라면 종이를 자른다
        const newSize = size / 3;
        for( let i=0; i<3; i++ ){
            for ( let j=0; j<3; j++ ){
                divide(x + i * newSize, y + j * newSize, newSize);
            }
        }
    }
}

divide(0,0,N);

console.log(minusOne);
console.log(zero);
console.log(one);