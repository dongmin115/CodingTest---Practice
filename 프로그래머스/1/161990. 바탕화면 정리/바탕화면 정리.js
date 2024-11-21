function solution(wallpaper) {
    var answer = [];
    wallpaper.forEach((e,i)=> {
        const splitArr = e.split('');
        splitArr.forEach((el,idx)=>{
            if(el === '#') answer.push([i,idx]);
        })
    })
    let minY = Infinity;
    let minX = Infinity;
    let maxY = -Infinity;
    let maxX = -Infinity;
    answer.forEach(([y,x])=>{
        minY = Math.min(minY,y);
        maxY = Math.max(maxY,y);
        minX = Math.min(minX,x);
        maxX = Math.max(maxX,x);
    })
    return [minY,minX,maxY+1,maxX+1];
}