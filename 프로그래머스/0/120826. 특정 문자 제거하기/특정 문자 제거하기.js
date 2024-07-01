function solution(my_string, letter) {
    var answer = '';
    answer = my_string.split('').filter( e => e !== letter).join('');
    return answer;
}