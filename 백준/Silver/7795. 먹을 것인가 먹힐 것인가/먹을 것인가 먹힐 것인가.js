const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let index = 0;
    const T = parseInt(input[index++]);

    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    for (let t = 0; t < T; t++) {
        const [N, M] = input[index++].split(' ').map(Number);
        const A = input[index++].split(' ').map(Number).sort((a, b) => a - b);
        const B = input[index++].split(' ').map(Number).sort((a, b) => a - b);

        let count = 0;
        for (const a of A) {
            count += binarySearch(B, a);
        }
        console.log(count);
    }
}

solution();