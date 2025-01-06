function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const stack1 = [];
    const stack2 = [];

    for (let i = 0; i < str1.length - 1; i++) {
        const pair = str1[i] + str1[i + 1];
        if (/^[a-z]{2}$/.test(pair)) {
            stack1.push(pair);
        }
    }

    for (let i = 0; i < str2.length - 1; i++) {
        const pair = str2[i] + str2[i + 1];
        if (/^[a-z]{2}$/.test(pair)) {
            stack2.push(pair);
        }
    }

    const gyo = [];
    const tempStack2 = [...stack2];

    for (const e of stack1) {
        const idx = tempStack2.indexOf(e);
        if (idx !== -1) {
            gyo.push(e);
            tempStack2.splice(idx, 1);
        }
    }

    const hap = [...stack1];
    for (const e of stack2) {
        const idx = stack1.indexOf(e);
        if (idx === -1) {
            hap.push(e);
        } else {
            stack1.splice(idx, 1);
        }
    }

    if (hap.length === 0) {
        return 65536;
    }

    return Math.floor((gyo.length / hap.length) * 65536);
}
