function solution(sequence, k) {
    let answer = [];
    let sum = 0;
    let left = 0;
    let minLength = Infinity;
    
    for (let right = 0; right < sequence.length; right++) {
        sum += sequence[right];
        
        while (sum > k) {
            sum -= sequence[left++];
        }

        if (sum === k) {
            const length = right - left + 1;
            if (length < minLength) {
                minLength = length;
                answer = [[left, right]];
            } else if (length === minLength) {
                answer.push([left, right]);
            }
        }
    }
    
    return answer[0];
}
