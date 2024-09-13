const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map((e)=> e.split(' '));


function solution() {
    const [ M, N ] = input[0].map(Number);
    const chessBoard = input.slice(1).flat();

    const pattern1 =[
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW'
    ]

    const pattern2 =[
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
    ]

    // 시작점이 x,y 일 때 칠해야하는 최소 정사각형 갯수 구하는 함수
    function countRepaint(x,y){
        let repaint1 = 0; // pattern1과 비교
        let repaint2 = 0; // pattern2와 비교

        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                if(chessBoard[x+i][y+j] !== pattern1[i][j]) repaint1++;
                if(chessBoard[x+i][y+j] !== pattern2[i][j]) repaint2++;
            }
        }
        return Math.min(repaint1,repaint2);
    }

    let result = Infinity;

    // (i,j) 가 체스판의 시작점이 된다
    for (let i=0; i <= M - 8; i++){
        for (let j=0; j <= N - 8; j++){
            result = Math.min(result,countRepaint(i,j));
        }
    }

    console.log(result);

}

solution()