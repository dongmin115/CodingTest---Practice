const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    let sideLength = 4 * input - 3;
    const square = Array.from({ length: sideLength }, () => new Array(sideLength).fill(' '));

    function drawSquare(positionX, positionY, sideLength) {
        if(sideLength < 1) return;

        for(let x=positionX; x<positionX+sideLength; x++){
            for(let y=positionY; y<positionY+sideLength; y++){
                square[positionX][y] = "*";
                square[x][positionY] = "*";
                square[x][positionY+sideLength-1] = "*";
                square[positionX+sideLength-1][y] = "*";
            }
        }

        drawSquare(positionX+2,positionY+2,sideLength-4);
    }

    drawSquare(0,0,sideLength);
    console.log(square.map(e=> e.join('')).join('\n'));
}

solution();