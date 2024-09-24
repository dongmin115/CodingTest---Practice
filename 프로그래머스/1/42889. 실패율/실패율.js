function solution(N, stages) {
    var fails = [];
    var answer = [];
    let totalPlayer = stages.length; // 전체 플레이어 수
    const arr = new Array(N + 2).fill(0); // 각 스테이지에 멈춰있는 유저 수 저장

    // 각 스테이지에 멈춰있는 유저 수 계산
    stages.forEach((stage) => {
        arr[stage] += 1;
    });

    // 각 스테이지별 실패율 계산
    for (let i = 1; i <= N; i++) {
        if (arr[i] === 0) {
            fails.push([i, 0]); // 실패율 0인 스테이지
            continue;
        }
        const failRate = arr[i] / totalPlayer; // 실패율 계산
        fails.push([i, failRate]);
        totalPlayer -= arr[i]; // 전체 플레이어 수에서 현재 스테이지 클리어 못한 인원 빼기
    }

    // 실패율을 기준으로 내림차순 정렬, 실패율이 같으면 스테이지 번호 오름차순 정렬
    fails.sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0] - b[0]; // 실패율이 같으면 스테이지 번호가 작은 순으로
        } else {
            return b[1] - a[1]; // 실패율이 높은 순으로 정렬
        }
    });

    // 정렬된 스테이지 번호만 추출
    answer = fails.map(stage => stage[0]);

    return answer;
}
