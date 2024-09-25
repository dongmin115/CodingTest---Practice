const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const N = parseInt(input[0]);
    const tree = {};

    // 트리구성
    for (let i = 1; i <= N; i++) {
        const [ root, left, right ] = input[i].split(' ');
        tree[root] = { left, right };
    }

    function preorder(node) {
        if (node === '.') return '';
        const left = preorder(tree[node].left);
        const right = preorder(tree[node].right);
        return node + left + right;
    }

    function inorder(node) {
        if (node === '.') return '';
        const left = inorder(tree[node].left);
        const right = inorder(tree[node].right);
        return left + node + right;
    }

    function postorder(node) {
        if (node === '.') return '';
        const left = postorder(tree[node].left);
        const right = postorder(tree[node].right);
        return left + right + node;
    }

    console.log(preorder('A'));
    console.log(inorder('A'));
    console.log(postorder('A'));
}

solution();