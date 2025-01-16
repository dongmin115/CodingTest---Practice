function solution(topping) {
    const freqRight = new Map();
    topping.forEach(t => {
        freqRight.set(t, (freqRight.get(t) || 0) + 1);
    });

    const freqLeft = new Map();

    let result = 0;

    let distinctLeft = 0;
    let distinctRight = freqRight.size;

    for (let i = 0; i < topping.length; i++) {
        const t = topping[i];

        let r = freqRight.get(t);
        freqRight.set(t, r - 1);
        if (r - 1 === 0) {
            freqRight.delete(t);
            distinctRight--;
        }

        if (!freqLeft.has(t)) {
            freqLeft.set(t, 1);
            distinctLeft++;
        } else {
            freqLeft.set(t, freqLeft.get(t) + 1);
        }

        if (i < topping.length - 1) {
            if (distinctLeft === distinctRight) {
                result++;
            }
        }
    }

    return result;
}
