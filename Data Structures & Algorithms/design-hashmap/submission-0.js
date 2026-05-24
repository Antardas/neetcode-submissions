
class Node {
    key = null;
    next = null;
    value = null;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    
    setNext(next) {
        this.next = next;
    }
}


class MyHashMap {
    constructor() {
        this.set = [];
    }

      /**
     * @param {number} key
     * @return {number}
     */
    getHash(number){
        return 10_000 % number;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const hash = this.getHash(key);
        const list = this.set[hash];

        if(!list) {
            this.set[hash] = new Node(key, value);
            return;
        }


        let cur = list;
        let prev = null;
        while(cur) {
            if(cur.key === key){
                cur.value = value;
                return;    
            }

            if(cur.next === null) {
                break;
            }
            cur = cur.next;
        }

        cur.next = new Node(key, value);
        console.log(list)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const hash = this.getHash(key);
        const list = this.set[hash];
        if(!list) return -1;
        let cur = list;
        console.log(cur)

        while(cur) {
            if(cur.key === key){
                return cur.value;
            }

            if(cur.next === null) {
                return -1;
            }

            cur = cur.next;
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {

        const hash = this.getHash(key);
        const list = this.set[hash];

        if(!list) {
            return;
        }

        let cur = list;

        while(cur) {
            if(cur.key === key) {
                if(cur.next == null){
                    this.set[hash] = null;
                    return;
                }

                this.set[hash] = cur.next;
                return
            }

            if(cur.next === null) {
                return;
            }

            if(cur.next.key === key){
                cur.next = cur.next.next;
                return;
            }

            cur = cur.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */




