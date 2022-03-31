function decodeString(s: string): string {
    const reg = /(\d+)\[(\w+)\]/g;
    const str = s.replace(reg, ($0, $1, $2) => {
        let t = '';
        for (let i = 0; i < $1; i++) {
            t += $2;
        }
        return t;
    });
    return reg.test(str) ? decodeString(str) : str;
}

decodeString('3[a2[c]]'); // "accaccacc"
