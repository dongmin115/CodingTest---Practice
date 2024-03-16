function solution(array) {
    var answer=[];
    var frequency = {};
    array.forEach((e)=>{
        frequency[e] = (frequency[e]||0) + 1;
    })
    var max=0;
    for( const key in frequency){
        if(frequency[key]>max){
            max = frequency[key];
            answer = [key];
        }
        else if(frequency[key] === max){
            answer.push(key);
        }
    }
    if(answer.length > 1)
        return -1;
    else
        return parseInt(answer[0]);
}