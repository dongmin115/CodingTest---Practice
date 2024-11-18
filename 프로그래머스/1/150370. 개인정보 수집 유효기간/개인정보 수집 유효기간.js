function solution(today, terms, privacies) {
    const answer = [];
    const termMap = {};

    const todayDays = convertDateToDays(today);

    for (const term of terms) {
        const [type, period] = term.split(" ");
        termMap[type] = Number(period);
    }
    
    function convertDateToDays(date) {
    const [year, month, day] = date.split(".").map(Number);
    return year * 12 * 28 + month * 28 + day;
}

    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(" ");
        const collectedDays = convertDateToDays(date);
        const validDays = collectedDays + termMap[termType] * 28;

        if (todayDays >= validDays) {
            answer.push(index + 1);
        }
    });

    return answer;
}
