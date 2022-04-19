/**
 * 给定只含有a、b 和 c的字符串，请去掉其中的b 和 ac。
 * @param input 
 * @returns 
 */
function removeChars(input: string): string {
    // your code here
    let s = input.replace(/b/g, '');
    const reg = /ac/g;
    while(reg.test(s)){
        s = s.replace(reg, '');
    }
    return s;
}