function solution(array, height) {
    var answer = 0;
    array.forEach((e)=> {
        if(height < e){
            answer++;
        }
    })
    return answer;
}