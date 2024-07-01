function solution(my_string) {
    var answer = 0;
    var r1 = my_string.split('').filter(e => !isNaN(e));
    r1.forEach((e)=>{
        answer += parseInt(e);
    })
    return answer;
}