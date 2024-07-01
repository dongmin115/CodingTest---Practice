function solution(num_list) {
    var r1=0;
    var r2=0;
    num_list.forEach((e)=>{
        e%2 === 0 ? r1++ : r2++;
    })
    return [r1,r2];
}