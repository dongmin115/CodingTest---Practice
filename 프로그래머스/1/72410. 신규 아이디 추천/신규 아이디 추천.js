function solution(new_id) {
    // 1단계: 대문자를 소문자로 변환
    new_id = new_id.toLowerCase();

    new_id = new_id.replace(/[^a-z0-9-_.]/g, "");

    new_id = new_id.replace(/\.{2,}/g, ".");

    new_id = new_id.replace(/^\.|\.$/g, "");

    if (new_id === "") {
        new_id = "a";
    }

    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15).replace(/\.$/, "");
    }

    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }

    return new_id;
}