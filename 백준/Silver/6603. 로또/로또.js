const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map((e)=> e.split(' ').map(Number));

function getCombinations(arr, r){
    const results = [];
    if (r === 1) return arr.map(el => [el]);

    // 이부분 참고
    arr.forEach((e,i)=>{
        const rest = arr.slice(i+1);  // i번째 원소 이후 배열을 자른다
        const combinations = getCombinations(rest, r-1);  // 재귀 호출로 r-1 만큼 더 뽑는다
        const attached = combinations.map((el)=> [e, ...el]);  // 조합에 현재 원소를 추가
        results.push(...attached);
    })

    return results;
}

function solution() {
    const r=6;
    for(let i=0; i<input.length; i++){
        const k = input[i][0];
        if( k === 0){
            return;
        }

        const S = input[i].slice(1);
        const combinations = getCombinations(S,r);

        combinations.forEach(e => console.log(e.join(' ')));
        console.log('');

    }
}

solution();