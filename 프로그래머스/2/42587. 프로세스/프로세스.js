function solution(priorities, location) {
    let queue = priorities.map((priority, idx) => [priority, idx]);
    let result = 0;

    while (true) {
        const [currPriority, currIndex] = queue.shift();

        if (queue.some(([p]) => p > currPriority)) {
            queue.push([currPriority, currIndex]);
        } else {
            result++;
            if (currIndex === location) {
                return result;
            }
        }
    }
}