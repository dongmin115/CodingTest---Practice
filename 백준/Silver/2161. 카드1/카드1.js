const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const N = Number(input);
    const cardDeck = [];
    const trashDeck = [];

    for (let i = 1; i <= N; i++) {
        cardDeck.push(i);
    }

    while (cardDeck.length > 1) {
        trashDeck.push(cardDeck.shift());

        cardDeck.push(cardDeck.shift());
    }

    console.log(trashDeck.join(' ') + (trashDeck.length === 0 ? '' : ' ') + cardDeck[0]);

}

solution();
