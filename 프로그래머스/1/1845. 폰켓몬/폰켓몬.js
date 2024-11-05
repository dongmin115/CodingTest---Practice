function solution(nums) {
    var answer = 0;
    var count = 1;
    const n = nums.length / 2;      //고를 수 있는 폰켓몬 수
    var nums_1 = nums.sort();       //폰켓몬의 종류 번호 순서대로 재배열
    for(var i=0; i<nums.length-1;i++){
        if(nums_1[i] !== nums_1[i+1])   //배열안에서 요소의 값이 달라질 때마다
            count++;                    //카운트+1해서 폰켓몬의 종류의 수를 셈
    }
    if(count >= n)      //종류의 수가 고를 수 있는 수 이상이면 최대로 많이 고를 수있는 종류 수는
        answer = n;     //가져갈 수 있는 수와 같음
    else if(count < n ) //가져갈 수 있는 수가 더 크면
        answer = count; //종류의 수와 같음
    return answer;
}