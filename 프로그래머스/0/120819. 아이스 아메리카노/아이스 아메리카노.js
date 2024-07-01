const solution = (money) => {
    let e1 = Math.floor(money/5500);
    let e2 = money % 5500;
    return [e1,e2];
}