class MyURLSearchParams {
    /**
     * @params {string} init
     */
    arr: string[] = [];

    constructor(init: string) {
        this.arr = init.slice(init.indexOf('?') + 1).split('&');
    }

    /**
     * @params {string} name
     * @params {any} value
     */
    append(name: string, value: any) {
        const str = `${name}=${value}`;
        this.arr.push(str);
    }

    /**
     * @params {string} name
     */
    delete(name: string) {
        const res = this.arr.filter((str) => {
            const [key] = str.split('=');
            return key !== name;
        });
        this.arr = res;
    }

    /**
     * @returns {Iterator}
     */
    * entries() {
        const len = this.arr.length;
        for (let i = 0; i < len; i++) {
            const [key, value] = this.arr[i].split('=');
            yield [value, key];
        }
    }

    /**
     * @param {(value, key) => void} callback
     */
    forEach(callback: (v:string, k:string)=>void) {
        const len = this.arr.length;
        for (let i = 0; i < len; i++) {
            const [key, value] = this.arr[i].split('=');
            callback(value, key);
        }
    }

    /**
     * @param {string} name
     * returns the first value of the name
     */
    get(name: string) {
        const n = name.slice(name.indexOf('?') + 1);
        const len = this.arr.length;
        for (let i = 0; i < len; i++) {
            const [key, value] = this.arr[i].split('=');
            if (key === n) {
                return value;
            }
        }
        return null;
    }

    /**
     * @param {string} name
     * @return {string[]}
     * returns the value list of the name
     */
    getAll(name: string) {
        const n = name.slice(name.indexOf('?') + 1);
        const len = this.arr.length;
        const res = [];
        for (let i = 0; i < len; i++) {
            const [key, value] = this.arr[i].split('=');
            if (key === n) {
                res.push(value);
            }
        }
        return res;
    }

    /**
     * @params {string} name
     * @return {boolean}
     */
    has(name: string) {
        const len = this.arr.length;
        for (let i = 0; i < len; i++) {
            const [key] = this.arr[i].split('=');
            if (key === name) {
                return true;
            }
        }
        return false;
    }

    /**
     * @return {Iterator}
     */
    keys() {
        const len = this.arr.length;
        const res = [];
        for (let i = 0; i < len; i++) {
            const [key] = this.arr[i].split('=');
            if (!res.includes(key)) {
                res.push(key);
            }
        }
        return res;
    }

    /**
     * @param {string} name
     * @param {any} value
     */
    set(name: string, value: any) {
        const len = this.arr.length;
        let isHas = false;
        for (let i = 0; i < len; i++) {
            const [key] = this.arr[i].split('=');
            if (name === key) {
                isHas = true;
                this.arr[i] = `${name}=${value}`;
            }
        }
        if (!isHas) {
            this.arr.push(`${name}=${value}`);
        }
    }

    // sor all key/value pairs based on the keys
    sort() {
        this.arr.sort((a, b) => {
            const [k1] = a.split('=');
            const [k2] = b.split('=');
            return k1 < k2 ? -1 : 1;
        });
    }

    /**
     * @return {string}
     */
    toString() {
        return this.arr.join('&');
    }

    /**
     * @return {Iterator} values
     */
    values() {
        const len = this.arr.length;
        const res = [];
        for (let i = 0; i < len; i++) {
            const [, value] = this.arr[i].split('=');
            res.push(value);
        }
        return res;
    }
}

const params = new MyURLSearchParams('c=2&a=2&a=1&a=2&b=2');

// console.log(params.toString());

// const entries = params.entries();
// console.log(entries.next());
// console.log(entries.next());
// console.log(entries.next());
// console.log(entries.next());

// console.log(params.values());
// console.log(params.keys());

// params.delete('a');
// console.log(params.get('a'));

// params.set('a', '3');
// params.set('b', new Map());
// params.set('c', false);
// console.log(params.get('a'));
// console.log(params.get('b'));
// console.log(params.get('c'));

// params.sort();
// console.log([...params.entries()]);
