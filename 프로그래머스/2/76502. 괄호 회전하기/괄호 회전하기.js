function solution(s) {
    const stack = s.split('');
    let count = 0;
    const temp = [];

    for(let i=0; i<stack.length; i++){
        let isTrue = true;

        for(let j=0; j<stack.length; j++){
            const e = stack[j];
            if(e === '[' || e === '{' || e === '(') {
                temp.push(e);
            } else if (e === ']') {
                if(temp.length === 0 || temp[temp.length - 1] !== '['){
                    isTrue = false;
                    break;
                }
                temp.pop();
            } else if (e === '}') {
                if(temp.length === 0 || temp[temp.length - 1] !== '{'){
                    isTrue = false;
                    break;
                }
                temp.pop();
            } else if (e === ')') {
                if(temp.length === 0 || temp[temp.length - 1] !== '('){
                    isTrue = false;
                    break;
                }
                temp.pop();
            }
        }

        if (isTrue && temp.length === 0) {
            count++;
        }

        stack.push(stack.shift());
    }
    
    return count
}