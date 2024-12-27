function solution(N, road, K) {
    const graph = Array.from({length: N+1}, () => []);
    const distances = new Array(N+1).fill(Infinity);
    let current = [[1,0]];
    distances[1] = 0;
    
    road.forEach(([a,b,c]) => {
        graph[a].push([b,c]);
        graph[b].push([a,c]);
    })
    while(current.length > 0){
        const [currentPosition, currentDistance] = current.shift();
    for(const [next, distance] of graph[currentPosition]){
        const newDistance = currentDistance + distance;
        
        if(newDistance < distances[next]){
            distances[next] = newDistance;
            current.push([next, newDistance]);
        }
    }
    }
    return distances.filter((distance) => distance <= K).length;
    
    
}