function solution(participant, completion) {
    var answer = '';
    completion[completion.length] = '';
    var arr1 = participant.sort();
    var arr2 = completion.sort();
    
    for(var i=0;i<participant.length;i++){
        if(arr1[i] !== arr2[i])
            answer = arr1[i];
    }
    
    return answer;
}