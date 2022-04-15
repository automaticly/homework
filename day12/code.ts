class DNode {
    key: number;
    value: number;
    pre?: DNode;
    next?: DNode;
    constructor(key: number,val: number){
        this.key = key;
        this.value = val
    }
}

class LRUCache {
    #capacity:number
    #map: Map<number, DNode>;
    #head: DNode;
    #trail: DNode;
    #len = 0;
    constructor(capacity: number) {
        this.#capacity = capacity;
        this.#map = new Map();
        this.#head = new DNode(0, 0);
        this.#trail = new DNode(0,0);
        this.#head.next = this.#trail;
        this.#trail.pre = this.#head;
    }

    get(key: number): number {
        
        if(!this.#map.has(key)){
            return -1;
        }
        const node = this.#map.get(key);
        this.moveToHead(node);
        return node.value;
    }

    put(key: number, value: number): void {
        
        if (this.#map.has(key)) {
            const node = this.#map.get(key);
            node.value = value;
            this.moveToHead(node);
        } else {
            const node = new DNode(key, value);
            this.addToHead(node);
            this.#map.set(key, node);
            this.#len++;
            if(this.#len > this.#capacity) {
                const node = this.removeTail();
                this.#map.delete(node.key);
                this.#len--;
            }
        }
        
    }
    addToHead(node: DNode){
        node.pre = this.#head;
        node.next = this.#head.next;
        this.#head.next.pre = node;
        this.#head.next = node;
    }
    removeNode(node: DNode){
        node.pre.next = node.next;
        node.next.pre = node.pre
    }
    moveToHead(node: DNode){
        this.removeNode(node);
        this.addToHead(node);
    }
    removeTail(){
        const node = this.#trail.pre;
        this.removeNode(node);
        return node;
    }

}

const obj = new LRUCache(2);
obj.put(2,1);
obj.put(1,1);
obj.put(2,3);
obj.put(4,1);
obj.get(1);
obj.get(2);

