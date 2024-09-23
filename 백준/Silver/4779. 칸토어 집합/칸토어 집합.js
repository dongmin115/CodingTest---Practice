const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);

function solution() {

    input.forEach((N)=>{
        const times = 3**N;
        let str = "-";
        str = str.repeat(times);    // 자르지 않은 상태

        function slice(str){
            if(str.length === 1){
                return str;
            }
            const size = str.length / 3;    // 3등분한 크기
            const head = slice(str.slice(0, size));
            const tail = slice(str.slice(2 * size));

            return head + " ".repeat(size) + tail;

        }

        const result = slice(str);

        console.log(result);
    })
}

solution();