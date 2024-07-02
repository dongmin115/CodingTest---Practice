function solution(array) {
    var r1 = 0;
    var r2 = 0;
    array.forEach((e,i)=>{
        if(r1 < e){
            r1=e;
            r2=i
        }
    })
    return [r1,r2];
}