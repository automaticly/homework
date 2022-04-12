class EventEmitter {
    map = new Map();

    subscribe(eventName, callback) {
        const release = () => {
            const arr = this.map.get(eventName);
            arr.pop();
            this.map.set(eventName, arr);
        };
        const arr = this.map.has(eventName)
            ? this.map.get(eventName).concat([callback])
            : [callback];
        this.map.set(eventName, arr);
        return { release };
    }

    emit(eventName, ...args) {
        const arr = this.map.get(eventName);
        arr?.forEach((callback) => { callback(...args); });
    }
}
