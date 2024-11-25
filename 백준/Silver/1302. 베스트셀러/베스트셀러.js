const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const titleArr = input.slice(1);
    const count = {};

    titleArr.forEach((title) => {
        if (!count[title]) {
            count[title] = 1;
        } else {
            count[title]++;
        }
    });

    let maxCount = 0;
    let bestSellers = [];

    for (const [title, value] of Object.entries(count)) {
        if (value > maxCount) {
            maxCount = value;
            bestSellers = [title];
        } else if (value === maxCount) {
            bestSellers.push(title);
        }
    }

    console.log(bestSellers.sort()[0]);
}

solution();
