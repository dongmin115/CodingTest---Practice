const solution = (my_string) => {
    const r1 = ['a','e','i','o','u'];
    return my_string.split('').filter((e) => !r1.includes(e)).join('');
}