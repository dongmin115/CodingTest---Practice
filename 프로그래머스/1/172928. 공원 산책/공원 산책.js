function solution(park, routes) {
    const directions = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
    let startX, startY;

    for (let i = 0; i < park.length; i++) {
        const index = park[i].indexOf('S');
        if (index !== -1) {
            startX = i;
            startY = index;
            break;
        }
    }

    let x = startX, y = startY;

    for (const route of routes) {
        const [direction, steps] = route.split(' ');
        const [dx, dy] = directions[direction];
        let nx = x, ny = y;
        let valid = true;

        for (let i = 1; i <= parseInt(steps); i++) {
            nx = x + dx * i;
            ny = y + dy * i;

            if (
                nx < 0 || nx >= park.length ||
                ny < 0 || ny >= park[0].length || 
                park[nx][ny] === 'X'
            ) {
                valid = false;
                break;
            }
        }

        if (valid) {
            x = nx;
            y = ny;
        }
    }

    return [x, y];
}
