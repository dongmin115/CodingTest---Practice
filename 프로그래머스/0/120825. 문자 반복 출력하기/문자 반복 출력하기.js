function solution(my_string, n) {
    var answer = '';
    var r1 = my_string.split('');
    var r2 = r1.forEach((e) => {
        answer += e.repeat(n);
    })
    return answer;
}